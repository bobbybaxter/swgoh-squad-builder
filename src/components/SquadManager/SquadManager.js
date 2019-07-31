import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import SquadListCard from '../SquadListCard/SquadListCard';
import SquadManagerModal from '../SquadManagerModal/SquadManagerModal';

import squadListData from '../../helpers/data/squadListData';

import './SquadManager.scss';

const defaultSquadList = {
  description: '',
  name: '',
  id: '',
  uid: '',
};

class SquadManager extends React.Component {
  state = {
    isNameDuplicate: false,
    modal: false,
    newSquadList: defaultSquadList,
    squadLists: [],
  }

  addNewSquadList = () => {
    const { newSquadList } = this.state;
    const currentSquadNames = [];
    this.state.squadLists.map(squad => currentSquadNames.push(squad.name));
    if (!currentSquadNames.includes(newSquadList.name)) {
      const tempSquadList = { ...this.state.newSquadList };
      tempSquadList.uid = firebase.auth().currentUser.uid;
      tempSquadList.name = newSquadList.name;
      tempSquadList.description = newSquadList.description;
      tempSquadList.dateCreated = Date.now();
      delete tempSquadList.id;
      squadListData.postSquadList(tempSquadList)
        .then(() => {
          this.toggle();
          this.getSquadLists();
        })
        .catch(err => console.error('didnt post squadlist', err));
    } else {
      this.setState({ isNameDuplicate: true });
    }
  }

  componentDidMount() {
    this.getSquadLists();
  }

  deleteSquadList = (squadListId) => {
    squadListData.deleteSquadList(squadListId)
      .then(() => this.getSquadLists())
      .catch(err => console.error(err));
  }

  formFieldStringState = (name, e) => {
    const tempSquadList = { ...this.state.newSquadList };
    tempSquadList[name] = e.target.value;
    this.setState({ newSquadList: tempSquadList });
  }

  getSquadLists = () => {
    const { uid } = firebase.auth().currentUser;
    squadListData.getSquadLists(uid)
      .then(response => this.setState({ squadLists: response }))
      .catch(err => console.error('didnt get squadlists', err));
  }

  openSquadListModal = () => {
    this.setState({ newSquadList: defaultSquadList });
    this.toggle();
  }

  openUpdateSquadListModal = (squadListId) => {
    const action = 'update';
    this.toggle(action, squadListId);
  }

  squadDescriptionChange = e => this.formFieldStringState('description', e);

  squadNameChange = e => this.formFieldStringState('name', e);

  toggle = (action, squadListId) => {
    if (action === 'update') {
      const squadListToUpdate = this.state.squadLists.find(x => x.id === squadListId);
      this.setState({ newSquadList: squadListToUpdate });
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    } else {
      this.setState({ isNameDuplicate: false });
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    }
  }

  updateSquadList = () => {
    const { newSquadList } = this.state;
    let currentSquadNames = [];
    this.state.squadLists.map(squad => currentSquadNames.push(squad.name));
    currentSquadNames = currentSquadNames.filter(squad => squad !== newSquadList.name);
    if (!currentSquadNames.includes(newSquadList.name)) {
      this.setState({ isNameDuplicate: false });
      const tempSquadList = { ...this.state.newSquadList };
      const squadListId = tempSquadList.id;
      delete tempSquadList.id;
      tempSquadList.uid = firebase.auth().currentUser.uid;
      tempSquadList.name = newSquadList.name;
      tempSquadList.description = newSquadList.description;
      squadListData.putSquadList(tempSquadList, squadListId)
        .then(() => {
          this.toggle();
          this.getSquadLists();
        })
        .catch(err => console.error('didnt put squadlist', err));
    } else {
      this.setState({ isNameDuplicate: true });
    }
  }

  render() {
    const makeSquadListCards = this.state.squadLists
      .sort((a, b) => ((a.dateCreated < b.dateCreated) ? 1 : -1))
      .map(squadList => (
      <SquadListCard
        deleteSquadList={this.deleteSquadList}
        key={squadList.id}
        openUpdateSquadListModal={this.openUpdateSquadListModal}
        squadList={squadList}
      />
      ));

    return (
      <div className="SquadManager col-12 justify-content-center">
        <h1 className="my-4">Squad Manager</h1>
        <SquadManagerModal
          addNewSquadList={this.addNewSquadList}
          isNameDuplicate={this.state.isNameDuplicate}
          modal={this.state.modal}
          newSquadList={this.state.newSquadList}
          squadDescriptionChange={this.squadDescriptionChange}
          squadNameChange={this.squadNameChange}
          toggle={this.toggle}
          updateSquadList={this.updateSquadList}
        />
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="SquadListCard col-4 mb-4">
            <div className="slCard card text-white bg-dark">
              <div className="card-body newSquadListCard">
                <button className="btn-lg btn-dark" onClick={this.openSquadListModal}>New Squad List</button>
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
