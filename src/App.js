import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import * as toDoItemsApiUrl from './helpers/toDoItemApi';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    tasks: null,
    isLoading: true
  }

  componentDidMount = async () => {
    const tasks = await toDoItemsApiUrl.getAll();
    console.log(tasks);
    this.setState({tasks, isLoading: false});
  }

  render() {
    const { isLoading, tasks } = this.state;
    return (
      <div className="App">
      {isLoading && <div>Loading...</div>}
      {!isLoading && tasks !== null &&
        <ToDoList title="TODO List" tasks={tasks}/>
      }
      </div>
    );
  }
}

export default App;
