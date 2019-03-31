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

  findyById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr);

    return { index, task: arr[index] }
  }

  deleteTask = async (id) => {
    const { tasks } = this.state;
    await toDoItemApi.remove(id);
    const { index } = this.findyById(id, tasks);
    this.setState({tasks: _.remove(index, 1, tasks)});
  }

  toggleDone = async (id) => {
    const { tasks } = this.state;
    const { index, task } = this.findyById(id, tasks);
    const response = await toDoItemApi.update(id, {done: !task.done});
    this.setState({tasks: _.update(index, response, tasks)});
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
        {tasks.map(task =>
          <ToDoItem
          id={task.id}
          key={task.id}
          deleteTask={this.deleteTask}
          text={task.title}
          toggleDone={this.toggleDone}
          done={task.completed}/>
        )}
      </div>
    )
  }
}

export default ToDoList;
