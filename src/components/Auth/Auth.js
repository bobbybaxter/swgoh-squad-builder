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
      <div className="Auth">
        <h1>Auth</h1>
        <button className="btn btn-outline-danger" onClick="this.loginClickEvent">Sign In</button>
      </div>
    );
  }
}

export default Auth;
