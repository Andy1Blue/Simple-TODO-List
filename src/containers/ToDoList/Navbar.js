import React, { Component } from 'react';
import { CurrentUserConsumer } from '../../context/CurrentUser.context';

class Navbar extends Component {
  render() {
    return (
      <CurrentUserConsumer>
        {({ user, logout, login }) => (
          <div>
            {user
              ? <div>Hello {user.name}! <button onClick={logout}>Logout</button></div>
              : <div>Please <button onClick={login}>Login</button></div>
            }
          </div>
        )}
      </CurrentUserConsumer>
    )
  }
}

export default Navbar;
