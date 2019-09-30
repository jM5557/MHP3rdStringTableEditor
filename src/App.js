import React, { Component, Fragment, useContext } from 'react';
import { QuestProvider, QuestContext } from './quest-context';
import LargeViewLayout from './components/layouts/large-view-layout';
import MultiViewLayout from './components/layouts/multi-view-layout';

import './sass/main.scss';
import QuestImport from './components/quest-import';

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
    }
  }

  render () {
    return (
      <QuestProvider>

        <Content />

      </QuestProvider>
    );
  }
}

let Content = () => {
  let context = useContext(QuestContext);

  return (
    <Fragment>

      {(context.quests.length < 1) &&
        <div className = "large-import">
          <QuestImport />
        </div>
      }
      
      { (context.quests.length > 0) &&
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
