import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import ToDoEditForm from './components/ToDoList/ToDoEditForm';
import NotFound from './components/ToDoList/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ToDoList} />
            <Route exact path='/edit/:itemId' component={ToDoEditForm} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
