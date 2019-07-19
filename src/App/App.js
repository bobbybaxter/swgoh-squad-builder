import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import fbConnection from '../components/helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h1>App</h1>
        <button className="btn btn-danger">help</button>
      </div>
    );
  }
}

export default App;
