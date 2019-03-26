import React, { Component } from 'react';
import ToDoItem from './../../components/ToDoList/ToDoItem';
import ToDoForm from './../../components/ToDoList/ToDoForm';
import * as toDoItemApi from './../../helpers/toDoItemApi';
import * as _ from 'ramda';

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = (e) => {
    this.setState({draft: e.target.value});
  };

  addTask = async () => {
    // const { tasks, draft } = this.state;
    // const list = tasks;
    // list.push({text: draft, done: false});
    // this.setState({tasks: list, draft: ''});

    // with api
    const { tasks, draft } = this.state;
    const task = await toDoItemApi.create({content: draft});
    this.setState({tasks: _.append(task, tasks), draft: ''});
  }

  deleteAllTask = () => {
    this.setState({tasks: []});
  }

  render() {
    const { title } = this.props;
    const { tasks, draft } = this.state;
    console.log(title);
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.deleteAllTask}>Delete all tasks</button>
        <ToDoForm
        onSubmit={this.addTask}
        onChange={this.updateDraft}
        draft={draft}
        />
        {tasks.map(task => <ToDoItem text={task.title} done={task.completed}/>)}
      </div>
    )
  }
}

export default ToDoList;
