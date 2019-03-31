import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentDidMount = () => {
    console.log("Mounted");
  }

  componentDidUpdate = () => {
    console.log("Updated");
  }

  componentWillUnmount = () => {
    console.log("Unmounted");
  }

  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.props.toggleDone(this.props.id);
    console.log("updating id:" + this.props.id);
    this.setState({done: !this.state.done});
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
    console.log("removing id:" + this.props.id);
  }

  render() {
    const { id, text } = this.props;
    return (
      <div className={this.state.done ? 'doneTodo' : ''}>
        <p>
          {text}
          <button onClick={this.toggleDone}>&#10004;</button>
          <button onClick={this.deleteTask}>&#10006;</button>
          <button><Link to={`/edit/${id}`}>&#9998;</Link></button>
        </p>
      </div>
    )
  }
}

export default ToDoItem;
