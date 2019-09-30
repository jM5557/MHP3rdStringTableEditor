import React, { Component, createContext } from 'react';

export const QuestContext = createContext();

export class QuestProvider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            quests: [],
            ids: 0,

            selectedQuest: null,
            viewMode: 'SINGLE',
            
            addQuest: this.addQuest,
            updateQuest: this.updateQuest,
            updateQuestDetails: this.updateQuestDetails,
            deleteQuest: this.deleteQuest,
            clearAllQuests: this.clearAllQuests,

            setViewMode: this.setViewMode,
            setSelectedQuest: this.setSelectedQuest,
            viewSelectedQuest: this.viewSelectedQuest

        }
    }

    addQuest = (quest) => {
        let quests = [...this.state.quests];
        quests.push({id: this.state.ids + 1, ...quest});

        this.setState({
            quests: quests,
            ids: this.state.ids + 1
        });
    }

    setViewMode = (viewMode) => {
        this.setState({
            viewMode: viewMode
        })
    }

    deleteQuest = (quest) => {
        let quests = [...this.state.quests];
        let questIndex = quests.findIndex( q => q.id === quest.id);

        quests.splice(questIndex, 1);

        if (quests.length > 0) {
            this.setState({
                quests: quests,
                selectedQuest: quests[questIndex]
            });

            return quests[questIndex];
        }

        this.setState({
            quests: [],
            selectedQuest: null
        });

        return null;
    }

    updateQuest = (quest) => {
        let quests = [...this.state.quests];
        let questIndex = quests.findIndex( q => q.id === quest.id);

        quests[questIndex] = quest;

        this.setState({
            quests: quests
        });
    }

    updateQuestDetails = (details, quest) => {
        quest.editable.details = details;

        this.updateQuest(quest);
    }

    setSelectedQuest = (quest) => {
        this.setState({
            selectedQuest: quest,
            viewMode: 'SINGLE'
        });
    }

    viewSelectedQuest = (quest) => {
        this.setSelectedQuest(quest);
    }

    clearAllQuests = () => {
        this.setState({
            quests: [],
            ids: 0,

            selectedQuest: null
        })
    }
        
    render () {
        return (
            <QuestContext.Provider value = {this.state}>
                {this.props.children}
            </QuestContext.Provider>
        )
    }
}