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
          <FileImport />
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
