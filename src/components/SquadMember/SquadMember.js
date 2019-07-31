import React from 'react';

class SquadMember extends React.Component {
  render() {
    const { member } = this.props;
    return (
      <div className="SquadMember">
        <div className="d-flex flex-column mx-1">
            <img className="toonImg" src={member.image} title={member.name} alt={member.name}/>
        </div>
      </div>
    );
  }
}

export default SquadMember;
