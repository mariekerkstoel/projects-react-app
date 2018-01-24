import React, { Component } from 'react';
import './App.css';
import Project from '../Project'
import AddProject from '../AddProject'
import uuid from 'uuid'

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: []
    };
  };

  HandleAddProject(e) {
    let projects = this.state.projects
    projects.push(e)
    this.setState(projects: projects);
    console.log(this.state.projects)
  }

  handleDeleteRequest(e){
    console.log(e)
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title: 'Marie',
          type: 'girl',
          id: uuid.v4()
        },
        {
          title: 'Eva',
          type: 'girl',
          id: uuid.v4()
        },
        {
          title: 'Thomas',
          type: 'boy',
          id: uuid.v4()
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.HandleAddProject.bind(this)}/>
        <Project projects={this.state.projects} deleteProject={this.handleDeleteRequest.bind(this)}/>
      </div>
    );
  }
}

export default App;
