import React from 'react';
import copyToClipboard from '../lib/copy-to-clipboard';
import './quest-content.scss';

export default (props) => {
    return (
        <div className = "quest-content">
            <h1 className = "top">
                Original File
            </h1>
            <div className = "item">
                <h1>Quest Title</h1>
                <p>{ props.quest.title }</p>
            </div>
            <div className = "item">
                <h1>Quest Target</h1>
                <p>{ props.quest.target }</p>
            </div>
            <div className = "item">
                <h1>Fail Condition</h1>
                <p>{ props.quest.fail_condition }</p>
            </div>
            <div className = "item">
                <h1>Quest Details</h1>
                <p>{ props.quest.details }</p>
            </div>
            <div className = "item">
                <h1>Monsters</h1>
                <p>{ props.quest.monsters }</p>
            </div>
            <div className = "item">
                <h1>Client</h1>
                <p>{ props.quest.client }</p>
            </div>
            
            <div className = "buttons">
                <button className = "copy-btn" onClick = { copyToClipboard.bind(this, props.quest) }>Copy</button>
            </div>
        </div>
    )
}