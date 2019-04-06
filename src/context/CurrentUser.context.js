import React, { Component } from 'react';

const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends Component {
  state = {
    user: null,
    processing: false
  }

  responseGoogle = (response) => {
    console.log(response);
    this.setState({ user: response, processing: true });
  }

  logout = () => {
    this.setState({ user: null });
  }

  render() {
    const { children } = this.props;
    return (
      <CurrentUserContext.Provider
        value={{
          logout: this.logout,
          user: this.state.user,
          responseGoogle: this.responseGoogle
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    )
  }

}

export const CurrentUserConsumer = CurrentUserContext.Consumer;
