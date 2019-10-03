import React, { Component, Fragment, useContext } from 'react';
import { FileProvider, FileContext } from './file-context';
import LargeViewLayout from './components/layouts/large-view-layout';
import MultiViewLayout from './components/layouts/multi-view-layout';

import './sass/main.scss';
import FileImport from './components/file-import';

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
    }
  }

  render () {
    return (
      <FileProvider>

        <Content />

      </FileProvider>
    );
  }
}

let Content = () => {
  let context = useContext(FileContext);

  return (
    <Fragment>

      {(context.files.length < 1) &&
        <div className = "large-import">
          <div className = "about">
            <h1 className = "top">
              MHP3rd String Table Editor
            </h1>
            <div className = "text-details">
              A simple web editor for working with Monster Hunter Portable 3rd string table text files.
                <br />
              Use this tool to edit quest string table files or preview other string tables (base, extras, npc dialogue)
                <br />
                <br />
              Files Supported: *.txt
                <br />
                <br />
              credit: codestation for mhtools | <a href = "https://github.com/codestation/mhtools">Available Here</a>
            </div>
          </div>
          <FileImport doNotDisplayMessage = { true } />
        </div>
      }
      
      { (context.files.length > 0) &&
        <Fragment>
          { (context.viewMode === 'SINGLE') &&
            <LargeViewLayout />
          }

          { (context.viewMode === 'MULTI') &&
            <MultiViewLayout />
          }
        </Fragment>
      }
    </Fragment>
  )
}

export default App;
