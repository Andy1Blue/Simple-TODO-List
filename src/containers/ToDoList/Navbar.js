import React, { Component } from 'react';
import { CurrentUserConsumer } from '../../context/CurrentUser.context';
import GoogleLogin from 'react-google-login';
import { config } from '../../config/index';
class Navbar extends Component {
  render() {
    return (
      <CurrentUserConsumer>
        {({ user, responseGoogle, logout }) => (
          <div>
            {user !== null
              ? <div>Hello {user.profileObj.givenName}! <button onClick={logout}>Logout</button></div>
              : 
                <GoogleLogin
              clientId={config.google}
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              />
            }
          </div>
        )}
      </CurrentUserConsumer>
    )
  }
}

export default Navbar;
