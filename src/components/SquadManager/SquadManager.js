import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import SquadListCard from '../SquadListCard/SquadListCard';
import SquadManagerModal from '../SquadManagerModal/SquadManagerModal';

import squadListData from '../../helpers/data/squadListData';

import './SquadManager.scss';

const defaultSquadList = {
  name: '',
  description: '',
  squads: {},
};

class SquadManager extends React.Component {
  state = {
    squadLists: [],
    newSquadList: defaultSquadList,
    modal: false,
  }

  addNewSquadList = () => {
    const tempSquadList = this.state.newSquadList;
    tempSquadList.uid = firebase.auth().currentUser.uid;
    tempSquadList.name = this.state.newSquadList.name;
    tempSquadList.description = this.state.newSquadList.description;
    squadListData.postSquadList(tempSquadList)
      .then(() => {
        this.getSquadLists();
      })
      .catch(err => console.error('didnt post squadlist', err));
    this.toggle();
  }

  componentDidMount() {
    this.getSquadLists();
  }

  formFieldStringState = (name, e) => {
    const tempSquadList = { ...this.state.newSquadList };
    tempSquadList[name] = e.target.value;
    this.setState({ newSquadList: tempSquadList });
  }

  squadNameChange = e => this.formFieldStringState('name', e);

  squadDescriptionChange = e => this.formFieldStringState('description', e);

  getSquadLists = () => {
    const { uid } = firebase.auth().currentUser;
    squadListData.getSquadLists(uid)
      .then(response => this.setState({ squadLists: response }))
      .catch(err => console.error('didnt get squadlists', err));
  }

  openSquadListModal = () => {
    this.toggle();
  }

  toggle = () => {
    this.setState({ newSquadList: defaultSquadList });
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
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
        <SquadManagerModal
          modal={this.state.modal}
          toggle={this.toggle}
          squadNameChange={this.squadNameChange}
          squadDescriptionChange={this.squadDescriptionChange}
          addNewSquadList={this.addNewSquadList}
        />
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="SquadListCard col-4">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-outline-success" onClick={this.openSquadListModal}>New Squad List</button>
              </div>
            </div>
          </div>
          { makeSquadListCards }
        </div>
      </div>
    );
  }
}

export default SquadManager;
