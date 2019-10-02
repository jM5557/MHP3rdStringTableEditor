import React, { Component } from 'react';
import QuestDetailsForm from './../quest-details-form';
import { FileContext } from './../../file-context'; 
import { TopControls } from './../top-controls';
import copyToClipboard from '../../lib/copy-to-clipboard';

import './multi-view.scss';

class MultiViewLayout extends Component {
    static contextType = FileContext;

    renderFilePreviews = () => {
      return this.context.files.map( (data) => {

        if (data.file_type === "QUEST") {
          return (
            <div 
                className = "quest-details-form-wrapper" 
                key = {data.id}
            >
                < QuestDetailsForm 
                  data = {data}
                  deleteFile = { this.context.deleteFile }
                  updateFile = { this.context.updateFile }
                  viewSelectedFile = { this.context.viewSelectedFile }
                  viewMode = { this.context.viewMode }
    
                />
              </div>
            )
        }

        else {
          return (
            <div className = "other-file-preview" key = {data.id}>
              <div className = "space-between">
                <span className = "file-name">{ data.file_name }</span>
                
                <button onClick = { this.context.viewSelectedFile.bind(this, data)}>
                  View File
                </button>
              </div>
              
              <button className = "copy-btn" onClick = { copyToClipboard.bind(this, data.editable)}>
                Copy
              </button>
              <button className = "delete-btn" onClick = { this.context.deleteFile.bind(this, data) }>
                Delete
              </button>
            </div>
          )
        }
      });
    }
    
    render () {
        return (
            <div className = "multi-view">
                <TopControls />

                <div className = "file-previews">
                  { this.renderFilePreviews() }
                </div>
            </div>
        );
    }
}

export default MultiViewLayout;