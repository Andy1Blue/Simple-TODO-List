import React, { Component } from 'react';

const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends Component {
  state = {
      user: null,
      processing: false,
      redirecting: false
  }

  getUser = () => {
    window.FB.api('/me', user => {
      this.setState({user, processing: false, redirecting: true});
    })
  }

  login = () => {
    this.setState({processing: true});
    window.FB.getLoginStatus(response => {
      if(response.status === 'connected') {
       this.getUser();
      } else {
        window.FB.api('/me', user => {
          this.getUser();
        })
        // TODO: adding catch errors
      }
    })
  }

  logout = () => {
     this.setState({ user: null});
  }

  render() {
    const { children } = this.props;
    return (
      <CurrentUserContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          user: this.state.user
        }}
      >
         {children}
      </CurrentUserContext.Provider>
    )
  }

}

export const CurrentUserConsumer = CurrentUserContext.Consumer;
