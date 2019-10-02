import React, { Component, Fragment } from 'react';
import { FileContext } from '../file-context';

import './file-import.scss';

class FileImport extends Component {
    static contextType = FileContext;

    state = {
        filesLoaded: [],
        filesLoadedSuccess: false
    }

    displayFilesLoadedSuccessMessage = () => {
        if (this.props.doNotDisplayMessage){
            return;
        }
        
        this.setState({
            filesLoadedSuccess: true
        });

        window.setTimeout(() => {
            this.setState({
                filesLoadedSuccess: false
            });
        }, 2000);
    }

    loadFiles = () => {
        let files = document.getElementById("file-import").files;
    
        Array.from(files).map((file, index) => {
          let fileReader = new FileReader();
    
          fileReader.onload = (event) => {
            let data = event.target.result;
    
            const lines = data.split(/\r\n|\n/);

            let payload = data;
            let file_type = "DATA";

            if (lines.length === 6 || lines.length === 7) {
                payload = {
                  title: lines[0],
                  target: lines[1],
                  fail_condition: lines[2],
                  details: lines[3],
                  monsters: lines[4],
                  client: lines[5]
                }

                file_type = "QUEST";
            }

            let fileData = {
                editable: payload,
                original: {...payload},
                file_name: file.name,
                file_type: file_type
            }
            
            this.context.addFile(fileData);

            if (index === this.state.filesLoaded.length - 1) {
                this.displayFilesLoadedSuccessMessage();
            }
          }
          
          fileReader.readAsText(file, "UTF-8");
        });
    }

    updateFileList = (event) => {
        let files = event.target.files;

        this.setState({
            filesLoaded: files
        });
    }

    render () {
        return (
            <div className = "file-import">
                { (this.state.filesLoadedSuccess) &&
                    <span className = "files-loaded success">Files Loaded!</span>
                }
                <label htmlFor = "file-import" className = "file-import-inner">
                    <input 
                        type = "file" 
                        id = "file-import" 
                        onChange = { this.updateFileList }
                        multiple 
                    />
                    Upload Text Files: { this.state.filesLoaded.length } File(s)
                </label>
                { this.state.filesLoaded.length > 0 &&
                    <button onClick = { this.loadFiles }>
                        Import
                    </button>
                }
            </div>
        );
    }
}

export default FileImport;