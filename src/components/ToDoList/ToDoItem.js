import React, { Component } from 'react';
import '../../App.css';

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
    this.setState({done: !this.state.done});
  }

  render() {
    const { text } = this.props;
    return (
      <div className={this.state.done ? 'doneTodo' : ''} onClick={this.toggleDone}><p>{text}</p></div>
    )
  }
}

export default ToDoItem;
