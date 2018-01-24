import React, {Component} from 'react';
import uuid from 'uuid'

class AddProject extends Component {
  constructor(){
    super()
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories: ['boy','girl']
  };

  HandleSubmit(e) {
      this.setState({
        newProject: {
          title: this.refs.title.value,
          type: this.refs.category.value,
          id: uuid.v4()
        }}, function(){
          this.props.addProject(this.state.newProject)
        }
      );
    e.preventDefault();
  };

  render(){
    let CategoryOptions = this.props.categories.map(category => {
      return <option key={category}>{category}</option>
    });
    return(
      <form onSubmit={this.HandleSubmit.bind(this)}>
        <div>
        <label>Title</label><br />
        <input type='text' ref='title' />
        </div>
        <div>
        <label>Category</label><br />
        <select ref='category'>
        {CategoryOptions}
        </select>
        </div>
        <input type='submit' value='Submit' />
      </form>
    )
  };

};

export default AddProject;
