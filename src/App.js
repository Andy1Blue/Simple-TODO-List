import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import ToDoEditForm from './components/ToDoList/ToDoEditForm';
import NotFound from './components/ToDoList/NotFound';
import Login from './components/ToDoList/Login';



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props =>
    sessionStorage.getItem('currentUser') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
        pathname: '/login',
        state: { from: props.location }
      }}
      />
    )
  }
  />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ToDoList} />
            <PrivateRoute exact path='/edit/:itemId' component={ToDoEditForm} />
            <Route exact path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
