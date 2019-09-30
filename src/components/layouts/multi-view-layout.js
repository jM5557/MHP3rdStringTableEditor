import React, { Component } from 'react';
import QuestDetailsForm from './../quest-details-form';
import { QuestContext } from './../../quest-context'; 
import { TopControls } from './../top-controls';

class MultiViewLayout extends Component {
    static contextType = QuestContext;

    renderQuestDetailsForm = () => {
      return this.context.quests.map( (data) => {
        return (
          <div 
            className = "quest-details-form-wrapper" 
            key = {data.id}
        >
            <QuestDetailsForm 
              data = {data}
              deleteQuest = { this.context.deleteQuest }
              updateQuest = { this.context.updateQuest }
              viewSelectedQuest = { this.context.viewSelectedQuest }
              viewMode = { this.context.viewMode }

            />
          </div>
        )
      });
    }
    
    render () {
        return (
            <div>
                <TopControls />

                { this.renderQuestDetailsForm() }
            </div>
        );
    }
}

export default MultiViewLayout;