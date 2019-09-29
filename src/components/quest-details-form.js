import React, { Component, Fragment } from 'react';
import copy from 'copy-to-clipboard';
import './quest-details-form.scss';

class QuestDetailsForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            details: (this.props.data ? this.convertDetailsToArray(this.props.data.details) : []),
            detailsAsText: (this.props.data ? this.props.data.details : ""),
            importedDetailsText: ""
        }
    }

    addNewLine = (event) => {
        event.preventDefault();
        
        let details = [...this.state.details];

        details.push("");
        this.setState({
            details: details
        });
    }

    deleteLine = (index) => {
        let details = [...this.state.details];

        details.splice(index, 1);

        this.setState({
            details: details,
            detailsAsText: this.convertDetailsToPlainText(details)
        });
    }

    updateDetailValue = (index, event) => {
        if (event.target.value.length > 30)
            return;

        let details = [...this.state.details];

        details[index] = event.target.value;

        this.setState({
            details: details,
            detailsAsText: this.convertDetailsToPlainText(details)
        });

    }

    handleImportedDetailsTextField = (event) => {
        this.setState({
            importedDetailsText: event.target.value
        });
    }

    loadDetailsText = () => {
        this.setState({
            details: this.convertDetailsToArray(this.state.importedDetailsText),
            detailsAsText: this.state.importedDetailsText
        });
    }

    renderInputBoxes = () => {
        return this.state.details.map( (line, index) => {

            return (
                <label key = {index}>
                    <input 
                        type = "text" 
                        onChange = {this.updateDetailValue.bind(this, index)} 
                        value = {this.state.details[index]}
                    />
                    <div className = "bottom-controls">
                        <span className = "character-counter">{this.state.details[index].length + "/30" }</span>
                        <span className = "delete-btn" onClick = {this.deleteLine.bind(this,index)}>Delete</span>
                    </div>
                </label>
            );

        });
    }

    convertDetailsToPlainText = (details) => {
        let text = "";

        details.filter( (line) => line.length > 0 ).map( (line, index) => {
            if (details.length > 0 && index > 0) {
                text += "<NEWLINE>";
            }

            text += line;
        });

        return text;
    }

    convertDetailsToArray = (detailsStr) => {
        let lines = detailsStr.split("<NEWLINE>");

        lines = lines.map( (line, index) => {
            return line.slice(0, 30);
        });

        return lines;
    }

    deleteQuest = () => {
        this.props.deleteQuest(this.props.data.id);
    }

    copyToClipboard = () => {
        let data = this.props.data.title             + "\n"
                    + this.props.data.target         + "\n"
                    + this.props.data.fail_condition + "\n"
                    + this.state.detailsAsText       + "\n"
                    + this.props.data.monsters       + "\n"
                    + this.props.data.client         + "\n";

        copy(data);
    }       

    render () {

        return (
            <div className = "quest-details-form">
                <div className = "top">
                    <div className = "title">
                        { this.props.data.title }
                    </div> 
                    
                    <label>
                        <input 
                            type = "text" 
                            onChange = { this.handleImportedDetailsTextField } 
                            value = { this.state.importedDetailsText } 
                        />
                        <button onClick = { this.loadDetailsText }>
                            Load Details
                        </button>
                    </label>
                    
                    {this.props.data.file_name}
                </div>
                
                <div className = "top-controls">
                    <div className = "line-counter">
                        { this.state.details.filter( (line) => line.length > 0 ).length + "/7"}
                    </div>

                    <div className = "buttons-wrapper">
                        { (this.state.details.length < 7) &&
                            (
                                <button 
                                    className = "add-line" 
                                    onClick = { this.addNewLine }
                                >
                                    Add Line
                                </button>
                            )
                        }

                        <button 
                            className = "delete-quest"
                            onClick = { this.deleteQuest }
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <form className = "details-input-boxes">
                    { this.renderInputBoxes() }
                </form>
                
                { this.state.detailsAsText.length > 0 && 
                    (
                        <div className = "plain-text-wrapper">
                            <code  contentEditable="true">
                                {this.props.data.title}
                                    <br/>
                                {this.props.data.target}
                                    <br/>
                                {this.props.data.fail_condition}
                                    <br/>
                                {this.state.detailsAsText}
                                    <br/>
                                {this.props.data.monsters}
                                    <br/>
                                {this.props.data.client}
                            </code>

                            <button onClick = { this.copyToClipboard }>Copy</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default QuestDetailsForm;