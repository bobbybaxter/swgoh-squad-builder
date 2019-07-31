import React from 'react';

import './SquadMember.scss';

class SquadMember extends React.Component {
  render() {
    const { member } = this.props;
    const buildSquadRow = () => {
      if (member.name !== '') {
        return (
          <div className="d-flex flex-column mx-1">
            <img className="toonImg" src={member.image} title={member.name} alt={member.name}/>
          </div>
        );
      }
      return (
          <div className="d-flex flex-column mx-1">
            <span className="noCharacterinSquad" alt="blank"></span>
          </div>
      );
    };
    return (
      <div className="SquadMember">
        {buildSquadRow()}
      </div>
    );
  }
}

export default SquadMember;
