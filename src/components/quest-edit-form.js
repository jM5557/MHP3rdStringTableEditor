import React, { Component } from 'react';
import QuestDetailsForm from './quest-details-form';
import {QuestContext} from './../quest-context';

import './quest-edit-form.scss';

class QuestEditForm extends Component {
    static contextType = QuestContext;

    constructor (props) {
        super (props);

        this.state = {
            quest: this.props.quest
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.quest.id !== this.state.quest.id) {
            this.setState({
                quest: this.props.quest
            });
        }
    }

    editInputField = (propToEdit, event) => {
        let questData = {...this.props.quest};

        questData.editable[propToEdit] = event.target.value;

        this.setState({
            quest: questData
        });

        this.context.updateQuest(questData);
    }

    render () {
        return (
            <div className = "quest-form">

                <label>
                    <div className = "field-name">Quest Title</div>
                    <input 
                        type = "text" 
                        onChange = { this.editInputField.bind(this, "title")}
                        value = { this.state.quest.editable.title }
                    />
                </label>

                <label>
                    <div className = "field-name">Quest Target</div>
                    <input 
                        type = "text" 
                        onChange = { this.editInputField.bind(this, "target")}
                        value = { this.state.quest.editable.target }
                    />
                </label>

                <label>
                    <div className = "field-name">Fail Condition</div>
                    <p>{ this.state.quest.editable.fail_condition }</p>
                </label>

                <label>
                    <div className = "field-name">Monsters</div>
                    <p>{ this.state.quest.editable.monsters }</p>
                </label>

                <label>
                    <div className = "field-name">Client</div>
                    <input 
                        type = "text" 
                        onChange = { this.editInputField.bind(this, "client")}
                        value = { this.state.quest.editable.client }
                    />
                </label>

                <QuestDetailsForm
                    data = { this.state.quest }
                    updateQuest = { this.context.updateQuestDetails }
                />

            </div>
        )
    }
}

export default QuestEditForm;