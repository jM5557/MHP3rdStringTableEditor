import React, { useContext } from 'react';
import { QuestContext } from '../quest-context';
import QuestImport from './quest-import';

import './top-controls.scss';

export const TopControls = () => {
    let context = useContext(QuestContext);
    
    return (
        <div className = "top-controls">
            { (context.quests.length > 0 && context.viewMode === 'SINGLE') &&
                <button 
                    onClick = { context.setViewMode.bind(this, 'MULTI') }
                    className = "view-btn"
                >
                    View All Quests
                </button>
            }

            <div className = "side-controls right">
                <QuestImport />

                { (context.quests.length > 0) &&
                    <button className = "delete-all-btn" onClick = {context.clearAllQuests}>
                    Delete All Quests
                    </button>
                }
            </div>
            
        </div>
    )
}