import React, { Component, Fragment } from 'react';
import './quest-details-form.scss';
import copyToClipboard from '../lib/copy-to-clipboard';
import { convertArrayToFormattedText, convertTextToFormattedText, convertDetailsToArray } from '../lib/convert-text';

class QuestDetailsForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            details: this.props.data 
                        ? convertDetailsToArray(this.props.data.editable.details, 30, 7) 
                        : [],
            detailsAsText: this.props.data.editable 
                            ? this.props.data.editable.details 
                            : "",
            importedDetailsText: "",

            currentLine: -1
        }
    }

    componentDidUpdate(prevProps) {
      if (this.props.data.id !== prevProps.data.id) {

        let lines = this.props.data.editable.details.split("<NEWLINE>");

        lines = lines.map( (line) => {
            return line.slice(0, 30);
        });

        this.props.updateFile(this.state.detailsAsText, prevProps.data);

        this.setState({
          details: lines,
          detailsAsText: this.props.data.editable.details
        });
      }
    }

    addNewLineAtEnd = (event) => {
        event.preventDefault();
        
        let details = [...this.state.details];

        details.push("");
        this.setState({
            details: details
        });
    }

    handleAddNewLineAtPos = (pos, event) => {
        event.preventDefault();

        this.addNewLineAtPos(pos)
    }

    addNewLineAtPos = (pos) => {

        if (this.state.details.length === 7) {
            return;
        }

        let details = [...this.state.details];

        details.splice(pos + 1, 0, "");

        this.setState({
            details: details
        });
    }

    deleteLine = (index, event) => {
        event.preventDefault();

        let details = [...this.state.details];

        details.splice(index, 1);

        this.setState({
            details: details,
            detailsAsText: convertArrayToFormattedText(details),
            currentLine: -1
        });
    }

    updateDetailValue = (index, event) => {
        if (event.target.value.length > 30){
            if (this.state.currentLine < 7 
                && this.state.details[this.state.currentLine + 1] !== "")
                this.addNewLineAtPos(this.state.currentLine);
            return;
        }

        let details = [...this.state.details];

        details[index] = event.target.value;

        this.setState({
            details: details,
            detailsAsText: convertArrayToFormattedText(details)
        });

        this.props.updateFile(this.state.detailsAsText, this.props.data);

    }

    handleImportedDetailsTextField = (event) => {
        this.setState({
            importedDetailsText: event.target.value
        });
    }

    loadDetailsText = () => {
        this.setState({
            details: convertDetailsToArray(this.state.importedDetailsText, 30, 7),
            detailsAsText: convertTextToFormattedText(this.state.importedDetailsText, 30, 7)
        });
    }

    copyToClipboard = () => {
        copyToClipboard({...this.props.data.editable, details: this.state.detailsAsText});
    }
    
    changeViewMode = () => {
        this.props.viewSelectedFile({
                                        ...this.props.data, 
                                        editable: {
                                                    ...this.props.data.editable, 
                                                    details: this.state.detailsAsText
                                                  }
                                    });
    }

    renderInputBoxes = () => {
        return this.state.details.map( (line, index) => {

            return (
                <label key = {index}>
                    <input
                        type = "text" 
                        onClick = { () => { this.setState({ currentLine: index }) } }
                        onFocus = { () => { this.setState({ currentLine: index }) } }
                        onChange = {this.updateDetailValue.bind(this, index)} 
                        value = {this.state.details[index]}
                    />
                    <div className = "bottom-controls">
                        <span className = "character-counter">{this.state.details[index].length + "/30" }</span>
                        
                        <div className = "side-controls">
                            { (this.state.details.length < 7 && this.state.currentLine === index) && 
                                <button 
                                    onClick = {this.handleAddNewLineAtPos.bind(this, index)}
                                    className = "add-line-below"
                                >
                                    Add Line Below
                                </button>
                            }

                            <button 
                                className = "delete-btn" 
                                onClick = {this.deleteLine.bind(this, index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </label>
            );

        });
    }

    render () {

        return (
            <div className = { (this.props.viewMode === "MULTI") 
                                ? "quest-details-form multi" 
                                : "quest-details-form"
                            }>
                { (this.props.viewMode === "MULTI") &&
                    <div className = "top-bar">
                        <div className = "title">
                            { this.props.data.editable.title }
                        </div>
                    
                        <div className = "bottom-details">
                            <span className = "file-name">{this.props.data.file_name}</span>
                            <div className = "side-controls">
                            
                                    <Fragment>
                                        <button onClick = { this.changeViewMode }>
                                            Edit File
                                        </button>

                                        <button 
                                            className = "delete-btn"
                                            onClick = { this.props.deleteFile.bind(this, this.props.data) }
                                        >
                                            Delete
                                        </button>
                                    </Fragment>
                            </div>
                        </div>
                    </div>
                }
                
                <div className = "space-between">
                    <div className = "line-counter">
                        { this.state.details.length + "/7"} Lines
                    </div>

                    <div className = "buttons-wrapper">
                        { (this.state.details.length < 7) &&
                            (
                                <button 
                                    className = "add-line" 
                                    onClick = { this.addNewLineAtEnd }
                                >
                                    Add Line
                                </button>
                            )
                        }
                    </div>
                </div>

                <form className = "details-input-boxes">
                    { this.renderInputBoxes() }
                    
                    { (this.state.details.length < 7) &&
                        (
                            <button 
                                className = "add-line" 
                                onClick = { this.addNewLineAtEnd }
                            >
                                Add Line
                            </button>
                        )
                    }
                </form>

                <label className = "load-quest-details">
                    <p>
                        To edit existing file details text instead, simply copy & paste it into the box below:
                    </p>
                    <input 
                        type = "text" 
                        onChange = { this.handleImportedDetailsTextField } 
                        value = { this.state.importedDetailsText } 
                    />
                    <button 
                        className = "load-new-details" 
                        onClick = { this.loadDetailsText }
                    >
                        Edit File Details
                    </button>
                </label>
                
                { this.state.detailsAsText.length > 0 && 
                    (
                        <div className = "plain-text-wrapper">
                            <code>
                                {this.props.data.editable.title}
                                    <br/>
                                {this.props.data.editable.target}
                                    <br/>
                                {this.props.data.editable.fail_condition}
                                    <br/>
                                {this.state.detailsAsText}
                                    <br/>
                                {this.props.data.editable.monsters}
                                    <br/>
                                {this.props.data.editable.client}
                            </code>

                            <button className = "copy-btn" onClick = { this.copyToClipboard }>Copy</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default QuestDetailsForm;