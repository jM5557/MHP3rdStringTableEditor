import React, { Component, Fragment } from 'react';
import { QuestContext } from '../quest-context';

class QuestImport extends Component {
    static contextType = QuestContext;

    state = {
        filesLoaded: []
    }

    loadFiles = () => {
        let files = document.getElementById("file-import").files;
    
        Array.from(files).map((file, index) => {
          let fileRead = new FileReader();
    
          fileRead.onload = (event) => {
            let data = event.target.result;
    
            const lines = data.split(/\r\n|\n/);
            
            let lineData = {
              title: lines[0],
              target: lines[1],
              fail_condition: lines[2],
              details: lines[3],
              monsters: lines[4],
              client: lines[5],
              file_name: file.name
            }

            let questData = {
                editable: lineData,
                original: lineData
            }
            
            this.context.addQuest(questData);
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

export default QuestImport;