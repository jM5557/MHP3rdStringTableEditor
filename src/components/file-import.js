import React, { Component, Fragment } from 'react';
import { FileContext } from '../file-context';

import './file-import.scss';

class FileImport extends Component {
    static contextType = FileContext;

    state = {
        filesLoaded: [],
        displayMessage: false,
        filesLoadedMessage: '',
        filesLoadedSuccess: false
    }

    displayFilesLoadedMessage = (message, isSuccess) => {
        if (this.props.doNotDisplayMessage){
            return;
        }
        
        this.setState({
            displayMessage: true,
            filesLoadedMessage: message,
            filesLoadedSuccess: isSuccess
        });

        window.setTimeout(() => {
            this.setState({
                displayMessage: false,
                filesLoadedMessage: '',
                filesLoadedSuccess: false
            });
        }, 2000);
    }

    loadFiles = () => {
        let files = document.getElementById("file-import").files;

        let fileArray = Array.from(files);

        fileArray.reduce((res, file, index) => {
            if (file.type === "text/plain") {
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
                        this.displayFilesLoadedMessage('Files Loaded!', true);
                    }
                }
                
                fileReader.readAsText(file, "UTF-8");
            }

            else {
                if (index === this.state.filesLoaded.length - 1) {
                    this.displayFilesLoadedMessage('Some files failed to load.', false);
                }
            }

            return res;
        }, []);
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
                { (this.state.displayMessage) &&
                    <span className = { (this.state.filesLoadedSuccess) 
                                            ? "files-loaded success" 
                                            : "files-loaded failure" 
                                    }
                    >
                        {this.state.filesLoadedMessage}
                    </span>
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