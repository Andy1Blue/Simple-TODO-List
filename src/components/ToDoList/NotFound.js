import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <p>No match for <code>{this.props.location.pathname}</code></p>
      </div>
    )
  }
}

export default NotFound;
