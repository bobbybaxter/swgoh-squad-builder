import React from 'react';
import MyNavbar from '../MyNavbar/MyNavbar';

import './App.scss';

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
