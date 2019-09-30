import React, { Component, Fragment } from 'react';
import copy from 'copy-to-clipboard';
import './quest-details-form.scss';

class QuestDetailsForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            details: this.props.data 
                        ? this.convertDetailsToArray(this.props.data.editable.details) 
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

        lines = lines.map( (line, index) => {
            return line.slice(0, 30);
        });

        this.props.updateQuest(this.state.detailsAsText, prevProps.data);

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
            detailsAsText: this.convertDetailsToPlainText(details),
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
            detailsAsText: this.convertDetailsToPlainText(details)
        });

        this.props.updateQuest(this.state.detailsAsText, this.props.data);

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

        lines = lines.map( (line) => {
            return line.slice(0, 30);
        });

        return lines;
    }

    copyToClipboard = () => {
        let data = this.props.data.editable.title             + "\n"
                    + this.props.data.editable.target         + "\n"
                    + this.props.data.editable.fail_condition + "\n"
                    + this.state.detailsAsText                + "\n"
                    + this.props.data.editable.monsters       + "\n"
                    + this.props.data.editable.client         + "\n";

        copy(data);
    }
    
    changeViewMode = () => {
        this.props.viewSelectedQuest({...this.props.data, editable: {...this.props.data.editable, details: this.state.detailsAsText}});
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
                <div className = "top">
                    { (this.props.viewMode === 'MULTI') &&
                        <Fragment>
                            <div className = "title">
                                { this.props.data.editable.title }
                            </div>
                        </Fragment>
                    }
                    
                    <div className = "bottom-details">
                        <span>{this.props.data.editable.file_name}</span>

                        <div className = "side-controls">
                            { (this.props.viewMode === "MULTI") &&
                                <Fragment>
                                    <button onClick = { this.changeViewMode }>
                                        Edit Quest
                                    </button>

                                    <button 
                                        className = "delete-btn"
                                        onClick = { this.props.deleteQuest.bind(this, this.props.data) }
                                    >
                                        Delete
                                    </button>
                                </Fragment>
                            }
                        </div>
                    </div>
                </div>
                
                <div className = "top-controls">
                    <div className = "line-counter">
                        { this.state.details.length + "/7"}
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
                        If you want to edit preformatted quest details text instead, simply copy & paste it into the box below:
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
                        Load Quest Details
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