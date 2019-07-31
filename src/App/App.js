import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import SquadManager from '../components/SquadManager/SquadManager';
import SquadList from '../components/SquadList/SquadList';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (
    authed === true
      ? (<Component {...props} />)
      : (
        (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />))
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (
    authed === false
      ? (<Component {...props} />)
      : (
        (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />))
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

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
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
            <div>
              {/* <div className="row"> */}
                <Switch>
                  <PublicRoute path="/auth" component={Auth} authed={authed} />

                  <PrivateRoute path="/home" component={Home} authed={authed} />
                  <PrivateRoute path="/squad-manager" component={SquadManager} authed={authed} />
                  <PrivateRoute path="/squad-list/:id" component={SquadList} authed={authed} />

                  <Redirect from="*" to="/auth" />
                </Switch>
              {/* </div> */}
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
