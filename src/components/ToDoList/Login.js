import React, { Component } from 'react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    processing: false,
    currentUser: null,
    finished: false
  }

  fbLogin = () => {
    this.setState({processing: true});
    window.FB.getLoginStatus(response => {
      if(response.status !== 'connected') {
        window.FB.login();
      } else {
        window.FB.api('/me', user => {
          console.log(user);
          sessionStorage.setItem('currentUser', user);
          this.setState({finished: true, processing: false, currentUser: user});
        })
      }
    });
  }

  render() {
    const { finished } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '' } };

    if (finished) {
      return <Redirect to={from} />
    }

    return (
      <div>
      {this.state.currentUser
        ? <div>Hello, {this.state.currentUser.name}</div>
        : <p>You must login to view page {from.pathname}.</p>
      }
      {this.state.processing
          ? <div>Authenticating...</div>
          : <button onClick={this.fbLogin}>Facebook login</button>
      }
      </div>
    )
  }
}

export default Login;
