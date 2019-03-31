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
          <div className='item'>
            <div className={this.state.done ? 'doneTodo' : ''}>
              <span className='itemTask'>{text}</span>
                <div className='itemEdit'>
                  <button className='completeButton' onClick={this.toggleDone}>&#10004;</button>
                  <button className='deleteButton' onClick={this.deleteTask}>&#10006;</button>
                  <Link to={`/edit/${id}`}><button className='editButton'>&#9998;</button></Link>
                </div>
          </div>
        </div>
    )
  }
}

export default ToDoItem;
