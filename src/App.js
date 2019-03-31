import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import ToDoEditForm from './components/ToDoList/ToDoEditForm';
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
        <Router>
          <Route exact path='/'>
            <ToDoList title="TODO List" tasks={tasks}/>
          </Route>

          <Route path='/edit/:itemId' component={ToDoEditForm} />
        </Router>
      }
      </div>
    );
  }
}

export default App;
