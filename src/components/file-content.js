import React from 'react';
import copyToClipboard from '../lib/copy-to-clipboard';

import './file-content.scss';

export const FileContent = (props) => {
    let renderStringWithNewlines = (str) => {
        return str.split(/\r\n|\n/).map( (line, index) => {
            return (<p key = {index}>{ line }</p>);
        });
    }
    return (
        <div className = "file-content">
            <h1 className = "top">
                <span>View File</span> 
                <span className = "file-name">
                    { props.file_name}
                </span>
            </h1>

            <code className = "file-content-data">
               {renderStringWithNewlines(props.content)}
            </code>
            <button className = "copy-btn" onClick = { copyToClipboard.bind(this, props.content) }>
                Copy
            </button>
        </div>
    )
}