import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { Link } from 'react-router-dom';

import SquadRow from '../SquadRow/SquadRow';
import SquadListModal from '../SquadListModal/SquadListModal';

import squadListData from '../../helpers/data/squadListData';
import squadData from '../../helpers/data/squadData';

// import squadListShape from '../../helpers/propz/squadListShape';

const defaultSquad = {
  character1Id: '',
  character2Id: '',
  character3Id: '',
  character4Id: '',
  character5Id: '',
  description: '',
  name: '',
  squadListId: '',
};

class SquadList extends React.Component {
  state = {
    modal: false,
    newSquad: defaultSquad,
    squadList: {},
    squads: [],
  }

  addNewSquadRow = () => {
    const { newSquad } = this.state;
    const squadListId = this.props.match.params.id;
    const tempSquad = newSquad;
    tempSquad.character1Id = newSquad.character1Id;
    tempSquad.character2Id = newSquad.character2Id;
    tempSquad.character3Id = newSquad.character3Id;
    tempSquad.character4Id = newSquad.character4Id;
    tempSquad.character5Id = newSquad.character5Id;
    tempSquad.description = newSquad.description;
    tempSquad.squadListId = squadListId;
    tempSquad.name = newSquad.name;
    tempSquad.uid = firebase.auth().currentUser.uid;
    squadData.postSquad(tempSquad)
      .then(() => {
        this.getSquadList(squadListId);
        this.getSquadsBySquadList(squadListId);
        this.toggle();
      })
      .catch(err => console.error('didnt post squadlist', err));
  }

  componentDidMount() {
    const squadListId = this.props.match.params.id;
    this.getSquadList(squadListId);
    this.getSquadsBySquadList(squadListId);
  }

  deleteSquad = (squadId) => {
    const squadListId = this.props.match.params.id;
    squadData.deleteSquad(squadId)
      .then(() => {
        this.getSquadList(squadListId);
        this.getSquadsBySquadList(squadListId);
      })
      .catch(err => console.error(err));
  }

  formFieldStringState = (name, e) => {
    const tempSquad = { ...this.state.newSquad };
    tempSquad[name] = e.target.value;
    this.setState({ newSquad: tempSquad });
  }

  getSquadList = (squadListId) => {
    squadListData.getSquadListById(squadListId)
      .then(res => this.setState({ squadList: res }))
      .catch(err => console.error('squadlist didnt load', err));
  }

  getSquadsBySquadList = (squadListId) => {
    squadData.getSquadsBySquadList(squadListId)
      .then(res => this.setState({ squads: res }))
      .catch(err => console.error('squads didnt load', err));
  }

  openSquadRowModal = () => {
    this.setState({ newSquad: defaultSquad });
    this.toggle();
  }

  openUpdateSquadRowModal = (squadId) => {
    const action = 'update';
    this.toggle(action, squadId);
  }

  squadCharacter1IdChange = e => this.formFieldStringState('character1Id', e);

  squadCharacter2IdChange = e => this.formFieldStringState('character2Id', e);

  squadCharacter3IdChange = e => this.formFieldStringState('character3Id', e);

  squadCharacter4IdChange = e => this.formFieldStringState('character4Id', e);

  squadCharacter5IdChange = e => this.formFieldStringState('character5Id', e);

  squadDescriptionChange = e => this.formFieldStringState('description', e);

  squadNameChange = e => this.formFieldStringState('name', e);

  toggle = (action, squadId) => {
    if (action === 'update') {
      const squadToUpdate = this.state.squads.find(squad => squad.id === squadId);
      this.setState({ newSquad: squadToUpdate });
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    } else {
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    }
  }

  updateSquadRow = () => {
    const squadListId = this.props.match.params.id;
    const { newSquad } = this.state;
    const tempSquad = { ...this.state.newSquad };
    const squadId = tempSquad.id;
    delete tempSquad.id;
    tempSquad.uid = firebase.auth().currentUser.uid;
    tempSquad.name = newSquad.name;
    tempSquad.description = newSquad.description;
    tempSquad.character1Id = newSquad.character1Id;
    tempSquad.character2Id = newSquad.character2Id;
    tempSquad.character3Id = newSquad.character3Id;
    tempSquad.character4Id = newSquad.character4Id;
    tempSquad.character5Id = newSquad.character5Id;
    tempSquad.uid = newSquad.uid;
    squadData.putSquad(tempSquad, squadId)
      .then(() => {
        this.toggle();
        this.getSquadList(squadListId);
        this.getSquadsBySquadList(squadListId);
      })
      .catch(err => console.error('didnt put squad', err));
  }

  render() {
    const { squadList } = this.state;
    const squadComponents = this.state.squads.map(squad => (
      <SquadRow
        key={squad.id}
        squad={squad}
        deleteSquad={this.deleteSquad}
        openUpdateSquadRowModal={this.openUpdateSquadRowModal}
      />
    ));

    return (
      <div className="SquadList col-12 justify-content-center">
        <SquadListModal
          addNewSquadRow={this.addNewSquadRow}
          modal={this.state.modal}
          newSquad={this.state.newSquad}
          squadCharacter1IdChange={this.squadCharacter1IdChange}
          squadCharacter2IdChange={this.squadCharacter2IdChange}
          squadCharacter3IdChange={this.squadCharacter3IdChange}
          squadCharacter4IdChange={this.squadCharacter4IdChange}
          squadCharacter5IdChange={this.squadCharacter5IdChange}
          squadDescriptionChange={this.squadDescriptionChange}
          squadNameChange={this.squadNameChange}
          toggle={this.toggle}
          updateSquadRow={this.updateSquadRow}
        />
        <h1>{squadList.name}</h1>
        <div className="d-flex flex-column">
          {squadComponents}
          <div className="SquadRow">
            <div className="card col-12">
              <div className="card-body d-flex flex-row justify-content-center">
                <button className="btn-sm btn-outline-primary" onClick={this.openSquadRowModal}>New Squad</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadList;
