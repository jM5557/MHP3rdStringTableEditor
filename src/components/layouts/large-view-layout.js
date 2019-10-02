import React, { Component, Fragment } from 'react';
import './large-view-layout.scss';
import { TopControls } from './../top-controls';
import QuestEditForm from '../quest-edit-form';
import QuestContent from '../quest-content';
import { FileContext } from './../../file-context';
import copyToClipboard from '../../lib/copy-to-clipboard';
import { FileContent } from '../file-content';
 
class LargeViewLayout extends Component {

    static contextType = FileContext;

    constructor (props) {
        super(props);

        this.state = {
            selectedItem: null,
            viewOriginal: false
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

    resetQuestData = () => {
        let data = {...this.context.selectedFile};

        data.editable = {...this.context.selectedFile.original};

        console.log(data.editable.title);

        this.setSelectedItem(data);
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
                        <span className = "file-name">{ item.file_name }</span>
                        
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

                    { (this.context.selectedFile.file_type === "QUEST") &&
                        <Fragment>
                            <div className = "original-file-actions">
                                <button onClick = { this.resetQuestData }>
                                    Reset Quest Data
                                </button>
                                <button 
                                    onClick = { () => { this.setState({ viewOriginal: !this.state.viewOriginal }) } }
                                >
                                    { (!this.state.viewOriginal) 
                                        ? 'View Original' 
                                        : 'Close' 
                                    }
                                </button>
                            </div>

                            { (this.state.viewOriginal) && 
                                <QuestContent quest = { this.context.selectedFile.original } />
                            }

                            <QuestEditForm
                                file = { this.state.selectedItem }
                                deleteFile = { this.context.deleteFile }
                                updateFile = { this.context.updateFile }
                            />
                        </Fragment>
                    }

                    { (this.context.selectedFile.file_type !== "QUEST") &&
                        <Fragment>
                            <FileContent 
                                file_name = { this.context.selectedFile.file_name } 
                                content = { this.context.selectedFile.editable } 
                            />
                        </Fragment>
                    }
                </div>
            </div>
        )

    }
}

export default LargeViewLayout;