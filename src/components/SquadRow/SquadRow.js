import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  moveDown = () => {
    this.props.moveRowDown(this.props.squad.id);
  }

  moveUp = () => {
    this.props.moveRowUp(this.props.squad.id);
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
    const { isEditMode, squad, position } = this.props;
    let positionButtons;
    if (position === 'first') {
      positionButtons = (<div className="squadRowButtons">
            <span className="col-6"></span>
            <button className="btn-sm btn-secondary col-6" onClick={this.moveDown}><FontAwesomeIcon icon="arrow-down" /></button>
      </div>);
    } else if (position === 'last') {
      positionButtons = (<div className="squadRowButtons">
            <button className="btn-sm btn-dark col-6" onClick={this.moveUp}><FontAwesomeIcon icon="arrow-up" /></button>
      </div>);
    } else {
      positionButtons = (<div className="squadRowButtons">
            <button className="btn-sm btn-dark col-6" onClick={this.moveUp}><FontAwesomeIcon icon="arrow-up" /></button>
            <button className="btn-sm btn-secondary col-6" onClick={this.moveDown}><FontAwesomeIcon icon="arrow-down" /></button>
      </div>);
    }
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
      <div className="SquadRow mb-2">
        <div className="squadRowLeftColumn">
          <h5 className="squadRowTitle">{squad.name}</h5>
        </div>
        <div className="squadRowRightColumn">
          <div className="squadRowImages">
            {makeSquadMemberIcon}
          </div>
          {isEditMode
            ? (<div className="squadRowButtons">
                <button className="btn-sm btn-dark col-6" onClick={this.updateMe}><FontAwesomeIcon icon="pencil-alt" /></button>
                <button className="btn-sm btn-danger col-6" onClick={this.deleteMe}><FontAwesomeIcon icon="trash-alt" /></button>
              </div>)
            : (positionButtons)
          }
        </div>

      </div>
    );
  }
}

export default SquadRow;
