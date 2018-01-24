import React, {Component} from 'react';
import ProjectItem from './ProjectItem'

class Project extends Component {

  deleteProject(id){
    this.props.onDelete(id)
  }

  render() {
    let receivedProjects
    receivedProjects = this.props.projects.map(project => {
      return(
        <ProjectItem key={project.title} project={project} onDelete={this.props.deleteProject.bind(this)} />
      );
    });

    return(
      <div>
        {receivedProjects}
      </div>
    )
  };
};

export default Project
