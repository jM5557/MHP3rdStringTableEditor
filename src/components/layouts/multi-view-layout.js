import React, { Component } from 'react';
import FileDetailsForm from './../quest-details-form';
import { FileContext } from './../../file-context'; 
import { TopControls } from './../top-controls';

class MultiViewLayout extends Component {
    static contextType = FileContext;

    renderFileDetailsForm = () => {
      return this.context.files.map( (data) => {
        return (
          <div 
            className = "quest-details-form-wrapper" 
            key = {data.id}
        >
            <FileDetailsForm 
              data = {data}
              deleteFile = { this.context.deleteFile }
              updateFile = { this.context.updateFile }
              viewSelectedFile = { this.context.viewSelectedFile }
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

                { this.renderFileDetailsForm() }
            </div>
        );
    }
}

export default MultiViewLayout;