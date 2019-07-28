import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import SquadRow from '../SquadRow/SquadRow';
import SquadListModal from '../SquadListModal/SquadListModal';

import characterData from '../../helpers/data/characterData';
import squadData from '../../helpers/data/squadData';
import squadListData from '../../helpers/data/squadListData';

// import squadListShape from '../../helpers/propz/squadListShape';

const defaultSquad = {
  character1: '',
  character2: '',
  character3: '',
  character4: '',
  character5: '',
  description: '',
  id: '',
  name: '',
  squadListId: '',
};

class SquadList extends React.Component {
  state = {
    characters: [],
    modal: false,
    newSquad: defaultSquad,
    squadForModal: [],
    squadList: {},
    squads: [],
  }

  addCharacterToSquad = (name) => {
    const { newSquad } = this.state;
    if (newSquad.character1 === '') {
      this.squadCharacter1Change(name);
    } else if (newSquad.character2 === '') {
      this.squadCharacter2Change(name);
    } else if (newSquad.character3 === '') {
      this.squadCharacter3Change(name);
    } else if (newSquad.character4 === '') {
      this.squadCharacter4Change(name);
    } else if (newSquad.character5 === '') {
      this.squadCharacter5Change(name);
    } else {
      console.error('all full');
    }
  }

  addNewSquadRow = () => {
    const { newSquad } = this.state;
    const squadListId = this.props.match.params.id;
    const tempSquad = newSquad;
    tempSquad.character1 = newSquad.character1;
    tempSquad.character2 = newSquad.character2;
    tempSquad.character3 = newSquad.character3;
    tempSquad.character4 = newSquad.character4;
    tempSquad.character5 = newSquad.character5;
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
    this.getCharacters();
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

  formFieldStringState = (input, updatedName) => {
    const tempSquad = { ...this.state.newSquad };
    if (updatedName === 'Select Leader') {
      tempSquad[input] = '';
      this.setState({ newSquad: tempSquad });
    } else if (updatedName === 'Select Character') {
      tempSquad[input] = '';
      this.setState({ newSquad: tempSquad });
    } else if (input === 'name') {
      tempSquad[input] = updatedName;
      this.setState({ newSquad: tempSquad });
    } else if (input === 'description') {
      tempSquad[input] = updatedName;
      this.setState({ newSquad: tempSquad });
    } else {
      const characterName = updatedName;
      const character = this.state.characters.find(x => x.name === characterName);
      tempSquad[input] = character.name;
      this.setState({ newSquad: tempSquad });
    }
  }

  getCharacters = () => {
    characterData.getAllCharacters()
      .then(res => this.setState({ characters: res }))
      .catch(err => console.error(err));
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

  openUpdateSquadRowModal = (squad) => {
    const action = 'update';
    this.toggle(action, squad);
  }

  removeCharacterFromSquad = (e) => {
    const { newSquad } = this.state;
    const characterName = e.target.alt;
    if (characterName === newSquad.character1) {
      this.formFieldStringState('character1', 'Select Leader');
    } else if (characterName === newSquad.character2) {
      this.formFieldStringState('character2', 'Select Character');
    } else if (characterName === newSquad.character3) {
      this.formFieldStringState('character3', 'Select Character');
    } else if (characterName === newSquad.character4) {
      this.formFieldStringState('character4', 'Select Character');
    } else if (characterName === newSquad.character5) {
      this.formFieldStringState('character5', 'Select Character');
    }
  };

  squadCharacter1Change = e => this.formFieldStringState('character1', e);

  squadCharacter2Change = e => this.formFieldStringState('character2', e);

  squadCharacter3Change = e => this.formFieldStringState('character3', e);

  squadCharacter4Change = e => this.formFieldStringState('character4', e);

  squadCharacter5Change = e => this.formFieldStringState('character5', e);

  squadDescriptionChange = e => this.formFieldStringState('description', e);

  squadNameChange = e => this.formFieldStringState('name', e);

  toggle = (action, squad) => {
    if (action === 'update') {
      this.setState({ newSquad: squad });
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
    tempSquad.character1 = newSquad.character1;
    tempSquad.character2 = newSquad.character2;
    tempSquad.character3 = newSquad.character3;
    tempSquad.character4 = newSquad.character4;
    tempSquad.character5 = newSquad.character5;
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
    const { characters, squadList, squads } = this.state;
    const squadComponents = squads.map(squad => <SquadRow
          deleteSquad={this.deleteSquad}
          key={squad.id}
          openUpdateSquadRowModal={this.openUpdateSquadRowModal}
          squad={squad}
        />);

    return (
      <div className="SquadList col-12 justify-content-center">
        <SquadListModal
          addCharacterToSquad={this.addCharacterToSquad}
          addNewSquadRow={this.addNewSquadRow}
          characters={characters}
          modal={this.state.modal}
          newSquad={this.state.newSquad}
          removeCharacterFromSquad={this.removeCharacterFromSquad}
          squadCharacter1Change={this.squadCharacter1Change}
          squadCharacter2Change={this.squadCharacter2Change}
          squadCharacter3Change={this.squadCharacter3Change}
          squadCharacter4Change={this.squadCharacter4Change}
          squadCharacter5Change={this.squadCharacter5Change}
          squadDescriptionChange={this.squadDescriptionChange}
          squadForModal={this.state.squadForModal}
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
