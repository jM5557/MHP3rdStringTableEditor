import React, { useContext } from 'react';
import { FileContext } from '../file-context';
import FileImport from './file-import';

import './top-controls.scss';

export const TopControls = () => {
    let context = useContext(FileContext);
    
    return (
        <div className = "top-controls">
            { (context.files.length > 0 && context.viewMode === 'SINGLE') &&
                <button 
                    onClick = { context.setViewMode.bind(this, 'MULTI') }
                    className = "view-btn"
                >
                    View All Files
                </button>
            }

            <div className = "side-controls right">
                <FileImport />

                { (context.files.length > 0) &&
                    <button className = "delete-all-btn" onClick = {context.clearAllFiles}>
                    Delete All Files
                    </button>
                }
            </div>
            
        </div>
    )
}