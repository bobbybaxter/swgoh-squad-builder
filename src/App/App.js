import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }

      return <Auth />;
    };
    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        <h1>App</h1>
        {loadComponent()}
        <button className="btn btn-danger">help</button>
      </div>
    );
  }
}

export default App;
