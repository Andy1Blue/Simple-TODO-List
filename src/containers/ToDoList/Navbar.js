import React, { Component } from 'react';
import { CurrentUserConsumer } from '../../context/CurrentUser.context';
import GoogleLogin from 'react-google-login';
import '../../App.css';
import { config } from '../../config';

class Navbar extends Component { 
  render() {
    return (
      <CurrentUserConsumer>
        {({ user, responseGoogle, logout }) => (
          <div>
            {user !== null
              ? <div><img src={user.profileObj.imageUrl} alt="user avatar" id="userImg"></img>Hello {user.profileObj.givenName}! <button onClick={logout}>Logout</button></div>
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
