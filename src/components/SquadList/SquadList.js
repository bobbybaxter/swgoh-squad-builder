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
  character1Id: 'a',
  character2Id: 'a',
  character3Id: '',
  character4Id: '',
  character5Id: '',
  description: '',
  name: '',
  squadListId: '',
};

class SquadList extends React.Component {
  state = {
    newSquad: defaultSquad,
    modal: false,
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
        this.getSquadsbySquadList(squadListId);
        this.toggle();
      })
      .catch(err => console.error('didnt post squadlist', err));
  }

  componentDidMount() {
    const squadListId = this.props.match.params.id;
    this.getSquadList(squadListId);
    this.getSquadsbySquadList(squadListId);
  }

  deleteSquad = (squadId) => {
    const squadListId = this.props.match.params.id;
    squadData.deleteSquad(squadId)
      .then(() => {
        this.getSquadList(squadListId);
        this.getSquadsbySquadList(squadListId);
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

  getSquadsbySquadList = (squadListId) => {
    squadData.getSquadsBySquadList(squadListId)
      .then(res => this.setState({ squads: res }))
      .catch(err => console.error('squads didnt load', err));
  }

  openSquadRowModal = () => {
    this.toggle();
  }

  squadCharacter1IdChange = e => this.formFieldStringState('character1Id', e);

  squadCharacter2IdChange = e => this.formFieldStringState('character2Id', e);

  squadCharacter3IdChange = e => this.formFieldStringState('character3Id', e);

  squadCharacter4IdChange = e => this.formFieldStringState('character4Id', e);

  squadCharacter5IdChange = e => this.formFieldStringState('character5Id', e);

  squadDescriptionChange = e => this.formFieldStringState('description', e);

  squadNameChange = e => this.formFieldStringState('name', e);

  toggle = () => {
    this.setState({ newSquad: defaultSquad });
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { squadList } = this.state;
    const squadComponents = this.state.squads.map(squad => (
      <SquadRow
        key={squad.id}
        squad={squad}
        deleteSquad={this.deleteSquad}
      />
    ));

    return (
      <div className="SquadList col-12 justify-content-center">
        <SquadListModal
          addNewSquadRow={this.addNewSquadRow}
          modal={this.state.modal}
          squadCharacter1IdChange={this.squadCharacter1IdChange}
          squadCharacter2IdChange={this.squadCharacter2IdChange}
          squadCharacter3IdChange={this.squadCharacter3IdChange}
          squadCharacter4IdChange={this.squadCharacter4IdChange}
          squadCharacter5IdChange={this.squadCharacter5IdChange}
          squadDescriptionChange={this.squadDescriptionChange}
          squadNameChange={this.squadNameChange}
          toggle={this.toggle}
        />
        <h1>{squadList.name}</h1>
        <div className="d-flex flex-column">
          {squadComponents}
          <div className="SquadRow">
            <div className="card col-12">
              <div className="card-body d-flex flex-row justify-content-center">
                <button className="btn btn-outline-primary" onClick={this.openSquadRowModal}>New Squad</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadList;
