import React from 'react';
import PropTypes from 'prop-types';

import SquadMember from '../SquadMember/SquadMember';

import './SquadRow.scss';
import squadShape from '../../helpers/propz/squadShape';
import characterData from '../../helpers/data/characterData';

class SquadRow extends React.Component {
  static propTypes = {
    deleteSquad: PropTypes.func.isRequired,
    openUpdateSquadRowModal: PropTypes.func.isRequired,
    squad: squadShape.squadShape,
  }

  state = {
    squadMembers: [],
  }

  componentDidMount() {
    this.getSquadCharacters();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.squad !== this.props.squad && nextProps.squad.character1) {
      this.getSquadCharacters();
    }
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { squad, deleteSquad } = this.props;
    deleteSquad(squad.id);
  }

  getSquadCharacters = () => {
    const {
      character1,
      character2,
      character3,
      character4,
      character5,
    } = this.props.squad;
    console.error('props Squad', this.props.squad);
    characterData
      .getCharactersBySquad(character1, character2, character3, character4, character5)
      .then(res => this.setState({ squadMembers: res }))
      .catch(err => console.error(err));
  }

  updateMe = (e) => {
    e.preventDefault();
    const { squad, openUpdateSquadRowModal } = this.props;
    openUpdateSquadRowModal(squad);
  }

  render() {
    const { squadMembers } = this.state;
    const { squad } = this.props;
    let makeSquadMemberIcon;
    if (squadMembers[0] !== undefined) {
      makeSquadMemberIcon = this.state.squadMembers.map(member => (
        <SquadMember
          key={member.base_id}
          member={member}
        />
      ));
    } else {
      makeSquadMemberIcon = null;
    }

    return (
      <div className="SquadRow mb-2 align-items-center">
        <h4 className="col-2">{squad.name}</h4>
        <div className="col-8 d-flex flex-row justify-content-around">
          {makeSquadMemberIcon}
        </div>
        <div className="d-flex flex-column col-2">
          <button className="btn-sm btn-outline-primary" onClick={this.updateMe}>edit</button>
          <button className="btn-sm btn-outline-danger" onClick={this.deleteMe}>x</button>
        </div>
      </div>
    );
  }
}

export default SquadRow;
