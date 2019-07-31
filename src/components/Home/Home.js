import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home mt-3 justify-content-center">
        <h1>Welcome to the Star Wars: Galaxy of Heroes Squad Builder</h1>
        <p>Click on the Squad Builder link above to begin planning your squads.</p>
      </div>
    );
  }
}

export default Home;
