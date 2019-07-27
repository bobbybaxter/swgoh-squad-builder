import React from 'react';

class SquadMember extends React.Component {
  render() {
    const { member } = this.props;
    const image = `https://swgoh.gg${member.image}`;
    return (
      <div className="SquadMember">
        <div className="d-flex flex-column">
            <img className="toonImg" src={image} alt={member.name}/>
            {/* <p className="">{member.name}</p> */}
        </div>
      </div>
    );
  }
}

export default SquadMember;
