import React from 'react';
// import PropTypes from 'prop-types';

import characterData from '../../helpers/data/characterData';
import squadShape from '../../helpers/propz/squadShape';

import './SquadRow.scss';

class SquadRow extends React.Component {
  static propTypes = {
    squadList: squadShape.squadShape,
  }

  state = {
    character1: [],
    character2: [],
    character3: [],
    character4: [],
    character5: [],
  }

  associateCharacter = (characterId, characterPosition) => {
    const character = this.state.characters.find(x => x.base_id === characterId);
    this.setState({ [characterPosition]: character });
  }

  componentDidMount() {
    this.getCharacters();
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { squad, deleteSquad } = this.props;
    deleteSquad(squad.id);
  }

  getCharacters = () => {
    characterData.getAllCharacters()
      .then(res => this.setState({ characters: res }))
      .catch(err => console.error(err));
  }

  updateMe = (e) => {
    e.preventDefault();
    const { squad, openUpdateSquadRowModal } = this.props;
    openUpdateSquadRowModal(squad.id);
  }

  render() {
    const { squad } = this.props;
    // NEED TO CREATE A NEW COMPONENT AND LOOP THROUGH THE CHARACTER IDS TO BUILD THE CARDS

    return (
      <div className="SquadRow">
        <div className="card col-12">
          <div className="card-body d-flex flex-row justify-content-between">
            <h5 className="card-title">{squad.name}</h5>
            <p className="card-text">{squad.character1Id}</p>
            <p className="card-text">{squad.character2Id}</p>
            <p className="card-text">{squad.character3Id}</p>
            <p className="card-text">{squad.character4Id}</p>
            <p className="card-text">{squad.character5Id}</p>
            <p className="card-text">{squad.description}</p>
            <button className="btn-sm btn-outline-primary" onClick={this.updateMe}>edit</button>
            <button className="btn-sm btn-outline-danger" onClick={this.deleteMe}>x</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadRow;
