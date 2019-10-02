import React from 'react';

export const FileContent = (props) => {
    return (
        <div className = "file-content">
            { props.raw_content }
        </div>
    )
}