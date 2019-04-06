import React, { Component } from 'react';
import { CurrentUserConsumer } from '../../context/CurrentUser.context';
import GoogleLogin from 'react-google-login';
import '../../App.css';

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
              clientId="735748601383-k6rg9m35ja0rudmeighr2j9gc4pm1ap3.apps.googleusercontent.com"
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
