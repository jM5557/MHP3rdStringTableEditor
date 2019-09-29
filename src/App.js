import React, {Component} from 'react';
import QuestDetailsForm from './components/quest-details-form';
import './sass/main.scss';

class App extends Component {
  constructor (props) {
    super (props);
  
    this.state = {
      data: [],
      ids: 0
    }
  }

  loadFiles = () => {
    let files = document.getElementById("import").files;

    let temp = [];

    Array.from(files).map((file, index) => {
      let fileRead = new FileReader();

      fileRead.onload = (event) => {
        let data = event.target.result;

        const lines = data.split(/\r\n|\n/);
        
        let dataObj = {
          id: this.state.ids+1,
          title: lines[0],
          target: lines[1],
          fail_condition: lines[2],
          details: lines[3],
          monsters: lines[4],
          client: lines[5],
          file_name: file.name
        }

        temp.push(dataObj);

        this.setState({
          data: temp,
          ids: this.state.ids+1
        });
      }
      
      fileRead.readAsText(file, "UTF-8");
    });
  }

  deleteQuest = (id) => {
    let quests = [...this.state.data];

    let questIndex = quests.findIndex(q => q.id == id);
    quests.splice(questIndex, 1);

    this.setState({
      data: quests
    });
  }

  renderQuestDetailsForm = () => {
    return this.state.data.map( (data, index) => {
      return (
        <div className = "quest-details-form-wrapper" key = {data.file_name}>
          <QuestDetailsForm 
            data = {data}
            deleteQuest = { this.deleteQuest }
          />
        </div>
      )
    });
  }

  render () {
    return (
      <div className="app">
        <div className = "import-btn-wrapper">
          <input type = "file" id = "import" multiple />
          <button onClick = { this.loadFiles }>Import</button>
        </div>
        { this.renderQuestDetailsForm() }
      </div>
    );
  }
}

export default App;
