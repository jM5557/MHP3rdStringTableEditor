import React, { Component } from 'react';
import QuestDetailsForm from './quest-details-form';
import {FileContext} from './../file-context';

import './quest-edit-form.scss';

class FileEditForm extends Component {
    static contextType = FileContext;

    constructor (props) {
        super (props);

        this.state = {
            file: this.props.file
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.file.id !== this.state.file.id) {
            this.setState({
                file: this.props.file
            });
        }
    }

    editInputField = (propToEdit, event) => {
        let fileData = {...this.props.file};

        fileData.editable[propToEdit] = event.target.value;

        this.setState({
            file: fileData
        });

        console.log(fileData);

        this.context.updateFile(fileData);
    }

    render () {
        return (
            <div className = "file-form">

                <label>
                    <div className = "field-name">File Title</div>
                    <input 
                        type = "text" 
                        onChange = { this.editInputField.bind(this, "title")}
                        value = { this.state.file.editable.title }
                    />
                </label>

                <label>
                    <div className = "field-name">File Target</div>
                    <input 
                        type = "text" 
                        onChange = { this.editInputField.bind(this, "target")}
                        value = { this.state.file.editable.target }
                    />
                </label>

                <label>
                    <div className = "field-name">Fail Condition</div>
                    <p>{ this.state.file.editable.fail_condition }</p>
                </label>

                <label>
                    <div className = "field-name">Monsters</div>
                    <p>{ this.state.file.editable.monsters }</p>
                </label>

                <label>
                    <div className = "field-name">Client</div>
                    <input 
                        type = "text" 
                        onChange = { this.editInputField.bind(this, "client")}
                        value = { this.state.file.editable.client }
                    />
                </label>

                <QuestDetailsForm
                    data = { this.state.file }
                    updateFile = { this.context.updateFileDetails }
                />

            </div>
        )
    }
}

export default FileEditForm;