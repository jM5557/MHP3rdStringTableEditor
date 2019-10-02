import React, { Component } from 'react';
import './large-view-layout.scss';
import { TopControls } from './../top-controls';
import QuestEditForm from '../quest-edit-form';
import { FileContext } from './../../file-context';
import copyToClipboard from '../../lib/copy-to-clipboard';
 
class LargeViewLayout extends Component {

    static contextType = FileContext;

    constructor (props) {
        super(props);

        this.state = {
            selectedItem: null
        }
    }

    componentDidMount () {
        this.setState({
            selectedItem: this.context.selectedFile
        });
    }

    componentDidUpdate () {

        if (this.context.selectedFile === null
                && this.context.files.length > 0) {

            this.context.setSelectedFile(this.context.files[0]);

            this.setState({
                selectedItem: this.context.files[0]
            });
        }
        
    }

    setSelectedItem = (item) => {
        this.context.setSelectedFile(item);

        this.setState({
            selectedItem: item
        });
    }

    copyToClipboard = (data, event) => {
        event.preventDefault();
        event.stopPropagation();

        copyToClipboard(data.editable);
    }

    deleteFile = (file, event) => {
        event.preventDefault();
        event.stopPropagation();

        let nextFile = this.context.deleteFile(file);

        if (this.state.selectedItem.id === file.id) {
            this.setState({
                selectedItem: nextFile
            })
        }
    }

    renderListItems = () => {
        return this.context.files.map( (item) => {
            return (
                <div 
                    key = {item.id}
                    onClick = { this.setSelectedItem.bind(this, item) }
                    className = { 
                        (this.state.selectedItem.id === item.id) 
                        ? 'list-item selected' : 'list-item' }
                >
                    <div className = "flex-between">
                        <span>{ item.file_name }</span>
                        
                        <div className = "quick-actions">
                            <button 
                                className = "copy-button" 
                                onClick = { this.copyToClipboard.bind(this,item) }
                            >
                                Copy
                            </button>

                            <button 
                                className = "delete-btn"
                                onClick = {this.deleteFile.bind(this,item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });
    }
    
    render () {
        if (this.context.selectedFile === null 
            || this.state.selectedItem === null) {
            return (
                <div className = "content">
                    <TopControls />
                    <div>
                        (0) Files Loaded
                    </div>
                </div>
            )
        }

        return (
            <div className = "large-view-layout">
                <div className = "list-items">
                    { this.renderListItems() }
                </div>
                <div className = "content">
                    <TopControls />

                    <QuestEditForm
                        file = { this.state.selectedItem }
                        deleteFile = { this.context.deleteFile }
                        updateFile = { this.context.updateFile }
                    />
                </div>
            </div>
        )

    }
}

export default LargeViewLayout;