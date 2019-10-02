import React, { Component, Fragment } from 'react';
import { FileContext } from '../file-context';

class FileImport extends Component {
    static contextType = FileContext;

    state = {
        filesLoaded: []
    }

    loadFiles = () => {
        let files = document.getElementById("file-import").files;
    
        Array.from(files).map((file) => {
          let fileRead = new FileReader();
    
          fileRead.onload = (event) => {
            let data = event.target.result;
    
            const lines = data.split(/\r\n|\n/);

            let payload = data;
            let file_type = "QUEST";

            if (lines.length === 6 || lines.length === 7) {
                payload = {
                  title: lines[0],
                  target: lines[1],
                  fail_condition: lines[2],
                  details: lines[3],
                  monsters: lines[4],
                  client: lines[5]
                }
            }

            let fileData = {
                editable: payload,
                original: payload,
                file_name: file.name,
                file_type: file_type
            }
            
            this.context.addFile(fileData);
          }
          
          fileRead.readAsText(file, "UTF-8");
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
            <div className = "import-btn-wrapper">
                <label htmlFor = "file-import" className = "file-import">
                    <input 
                        type = "file" 
                        id = "file-import" 
                        onChange = { this.updateFileList }
                        multiple 
                    />
                    Upload Text Files: { this.state.filesLoaded.length } File(s)
                </label>
                { this.state.filesLoaded.length > 0 &&
                    <button onClick = { this.loadFiles }>Import</button>
                }
            </div>
        );
    }
}

export default FileImport;