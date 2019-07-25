import React from 'react';
import PropTypes from 'prop-types';

import SquadRowMember from '../SquadRowMember/SquadRowMember';

import './SquadRow.scss';
import squadShape from '../../helpers/propz/squadShape';

class SquadRow extends React.Component {
  static propTypes = {
    deleteSquad: PropTypes.func.isRequired,
    openUpdateSquadRowModal: PropTypes.func.isRequired,
    squad: squadShape.squadShape,
    syncedSquad: PropTypes.array.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { squad, deleteSquad } = this.props;
    deleteSquad(squad.id);
  }

  updateMe = (e) => {
    e.preventDefault();
    const { squad, openUpdateSquadRowModal } = this.props;
    openUpdateSquadRowModal(squad.id);
  }

  render() {
    const { squad, syncedSquad } = this.props;
    let myComponent;
    if (syncedSquad[0] !== undefined) {
      const toonImg1 = `https://swgoh.gg${syncedSquad[0].image}`;
      const toonImg2 = `https://swgoh.gg${syncedSquad[1].image}`;
      const toonImg3 = `https://swgoh.gg${syncedSquad[2].image}`;
      const toonImg4 = `https://swgoh.gg${syncedSquad[3].image}`;
      const toonImg5 = `https://swgoh.gg${syncedSquad[4].image}`;
      console.error(toonImg1);
      myComponent = <div className="card col-12">
        <div className="card-body d-flex flex-row justify-content-between">
          <h5 className="card-title col-2">{squad.name}</h5>
          {/* {this.props.syncedSquad && buildSquadMembers} */}
          {/* {buildSquadMembers} */}
          <img className="toonImg" src={toonImg1} alt={syncedSquad[0].name}/>
          {/* <p className="card-text">{syncedSquad[0].name}</p> */}
          <img className="toonImg" src={toonImg2} alt={syncedSquad[1].name}/>
          {/* <p className="card-text">{syncedSquad[1].name}</p> */}
          <img className="toonImg" src={toonImg3} alt={syncedSquad[2].name}/>
          {/* <p className="card-text">{syncedSquad[2].name}</p> */}
          <img className="toonImg" src={toonImg4} alt={syncedSquad[3].name}/>
          {/* <p className="card-text">{syncedSquad[3].name}</p> */}
          <img className="toonImg" src={toonImg5} alt={syncedSquad[4].name}/>
          {/* <p className="card-text">{syncedSquad[4].name}</p> */}
          {/* <p className="card-text">{squad.description}</p> */}
          <button className="btn-sm btn-outline-primary" onClick={this.updateMe}>edit</button>
          <button className="btn-sm btn-outline-danger" onClick={this.deleteMe}>x</button>
        </div>
      </div>;
    } else {
      myComponent = null;
    }
    // const buildSquadMembers = syncedSquad.map((member, index) => `<p className="card-text">${member[index]}</p>`);
    // console.error(buildSquadMembers);

    return (
      <div className="SquadRow">
        {myComponent}
      </div>
    );
  }
}

export default SquadRow;
