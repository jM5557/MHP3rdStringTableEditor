import React, { Component, createContext } from 'react';

export const FileContext = createContext();

export class FileProvider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            files: [],
            ids: 0,

            selectedFile: null,
            viewMode: 'SINGLE',
            
            addFile: this.addFile,
            updateFile: this.updateFile,
            updateFileDetails: this.updateFileDetails,
            deleteFile: this.deleteFile,
            clearAllFiles: this.clearAllFiles,

            setViewMode: this.setViewMode,
            setSelectedFile: this.setSelectedFile,
            viewSelectedFile: this.viewSelectedFile

        }
    }

    addFile = (file) => {
        let files = [...this.state.files];
        files.push({id: this.state.ids + 1, ...file});

        this.setState({
            files: files,
            ids: this.state.ids + 1
        });
    }

    setViewMode = (viewMode) => {
        this.setState({
            viewMode: viewMode
        })
    }

    deleteFile = (file) => {
        let files = [...this.state.files];
        let fileIndex = files.findIndex( q => q.id === file.id);

        files.splice(fileIndex, 1);

        if (files.length > 0) {

            console.log(fileIndex + "/" + files.length);

            if (fileIndex === files.length) {
                this.setState({
                    files: files,
                    selectedFile: files[fileIndex - 1]
                });
    
                return files[fileIndex - 1];
            }
            
            this.setState({
                files: files,
                selectedFile: files[fileIndex]
            });

            return files[fileIndex];
        }

        this.setState({
            files: [],
            selectedFile: null
        });

        return null;
    }

    updateFile = (file) => {
        let files = [...this.state.files];
        let fileIndex = files.findIndex( q => q.id === file.id);

        files[fileIndex] = file;

        this.setState({
            files: files
        });
    }

    updateFileDetails = (details, file) => {
        file.editable.details = details;

        this.updateFile(file);
    }

    setSelectedFile = (file) => {
        this.setState({
            selectedFile: file,
            viewMode: 'SINGLE'
        });
    }

    viewSelectedFile = (file) => {
        this.setSelectedFile(file);
    }

    clearAllFiles = () => {
        this.setState({
            files: [],
            ids: 0,

            selectedFile: null
        })
    }
        
    render () {
        return (
            <FileContext.Provider value = {this.state}>
                {this.props.children}
            </FileContext.Provider>
        )
    }
}