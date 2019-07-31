import React from 'react';
import firebase from 'firebase/app';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth mt-3 justify-content-center">
        <button className="btn-lg btn-danger" onClick={this.loginClickEvent}>Sign In</button>
      </div>
    );
  }
}

export default Auth;
