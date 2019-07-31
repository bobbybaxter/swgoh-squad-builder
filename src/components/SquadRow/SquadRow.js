import React from 'react';
import PropTypes from 'prop-types';

import SquadMember from '../SquadMember/SquadMember';

import squadShape from '../../helpers/propz/squadShape';

import './SquadRow.scss';

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
    this.setSquadMembers();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.squad !== this.props.squad && nextProps.squad.character1) {
      this.setSquadMembers();
    }
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { squad, deleteSquad } = this.props;
    deleteSquad(squad.id);
  }

  setSquadMembers = () => {
    const { squad } = this.props;
    if (squad) {
      const newSquad = [];
      for (let i = 1; i < 6; i += 1) {
        const newSquadMember = {};
        newSquadMember.name = squad[`character${i}`];
        newSquadMember.image = squad[`character${i}Image`];
        newSquadMember.id = squad[`character${i}Id`];
        newSquad.push(newSquadMember);
      }
      this.setState({ squadMembers: newSquad });
    }
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
      makeSquadMemberIcon = this.state.squadMembers.map((member, index) => {
        if (member) {
          const memberId = `${squad.id}${member.id}${index}`;
          return (
            <SquadMember
              key={memberId}
              member={member}
            />
          );
        }
        return '';
      });
    } else {
      makeSquadMemberIcon = null;
    }

    return (
      <div className="SquadRow mb-2 align-items-center">
        <h5 className="col-3">{squad.name}</h5>
        <div className="col-6 d-flex flex-row justify-content-center">
          {makeSquadMemberIcon}
        </div>
        <div className="d-flex flex-column offset-1 col-2">
          <button className="btn btn-dark mb-1" onClick={this.updateMe}>edit</button>
          <button className="btn btn-danger" onClick={this.deleteMe}>x</button>
        </div>
      </div>
    );
  }
}

export default SquadRow;
