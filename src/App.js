import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import ToDoEditForm from './components/ToDoList/ToDoEditForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={ToDoList} />
          <Route path='/edit/:itemId' component={ToDoEditForm} />
        </Router>
      </div>
    );
  }
}

export default App;
