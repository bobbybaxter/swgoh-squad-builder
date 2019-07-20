import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import SquadListCard from '../SquadListCard/SquadListCard';

import squadListData from '../../helpers/data/squadListData';

import './SquadManager.scss';

class SquadManager extends React.Component {
  state = {
    squadLists: [],
  }

  getSquadLists = () => {
    const { uid } = firebase.auth().currentUser;
    squadListData.getSquadLists(uid)
      .then(response => this.setState({ squadLists: response }))
      .catch(err => console.error('didnt get squadlists', err));
  }

  componentDidMount() {
    this.getSquadLists();
  }

  render() {
    const makeSquadListCards = this.state.squadLists.map(squadList => (
      <SquadListCard
        key={squadList.id}
        squadList={squadList}
      />
    ));

    return (
      <div className="SquadManager col-12 justify-content-center">
        <h1>Squad Manager</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          { makeSquadListCards }
        </div>
      </div>
    );
  }
}

export default SquadManager;
