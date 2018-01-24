import React, {Component} from 'react';

class ProjectItem extends Component {
  handleDeleteRequest(title){
    this.props.onDelete(title)
  }
  render() {
    return(
      <li>
        {this.props.project.title} - {this.props.project.type} <button onClick={this.handleDeleteRequest.bind(this, this.props.project.id)}>x</button>
      </li>
    );
  };
};

export default ProjectItem
