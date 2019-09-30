import React, { Component } from 'react';
import './large-view-layout.scss';
import { TopControls } from './../top-controls';
import QuestEditForm from '../quest-edit-form';
import { QuestContext } from './../../quest-context';

import copy from 'copy-to-clipboard';
 
class LargeViewLayout extends Component {

    static contextType = QuestContext;

    constructor (props) {
        super(props);

        this.state = {
            selectedItem: null
        }
    }

    componentDidMount () {
        this.setState({
            selectedItem: this.context.selectedQuest
        });
    }

    componentDidUpdate () {

        if (this.context.selectedQuest === null
                && this.context.quests.length > 0) {

            this.context.setSelectedQuest(this.context.quests[0]);

            this.setState({
                selectedItem: this.context.quests[0]
            });
        }
        
    }

    setSelectedItem = (item) => {
        this.context.setSelectedQuest(item);

        this.setState({
            selectedItem: item
        });
    }

    copyToClipboard = (data, event) => {
        event.preventDefault();
        event.stopPropagation();

        let formattedData = data.editable.title    + "\n"
                    + data.editable.target         + "\n"
                    + data.editable.fail_condition + "\n"
                    + data.editable.details        + "\n"
                    + data.editable.monsters       + "\n"
                    + data.editable.client         + "\n";

        copy(formattedData);
    }

    deleteQuest = (quest, event) => {
        event.preventDefault();
        event.stopPropagation();

        let nextQuest = this.context.deleteQuest(quest);

        if (this.state.selectedItem.id === quest.id) {
            this.setState({
                selectedItem: nextQuest
            })
        }
    }

    renderListItems = () => {
        return this.context.quests.map( (item) => {
            return (
                <div 
                    key = {item.id}
                    onClick = { this.setSelectedItem.bind(this, item) }
                    className = { 
                        (this.state.selectedItem.id === item.id) 
                        ? 'list-item selected' : 'list-item' }
                >
                    <div className = "flex-between">
                        <span>{ item.editable.file_name }</span>
                        
                        <div className = "quick-actions">
                            <button 
                                className = "copy-button" 
                                onClick = { this.copyToClipboard.bind(this,item) }
                            >
                                Copy
                            </button>

                            <button 
                                className = "delete-btn"
                                onClick = {this.deleteQuest.bind(this,item)}
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
        if (this.context.selectedQuest === null 
            || this.state.selectedItem === null) {
            return (
                <div className = "content">
                    <TopControls />
                    <div>
                        (0) Quests Loaded
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
                        quest = { this.state.selectedItem }
                        deleteQuest = { this.context.deleteQuest }
                        updateQuest = { this.context.updateQuest }
                    />
                </div>
            </div>
        )

    }
}

export default LargeViewLayout;