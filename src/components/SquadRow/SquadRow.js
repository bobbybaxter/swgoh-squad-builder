import React from 'react';
// import PropTypes from 'prop-types';

import squadShape from '../../helpers/propz/squadShape';

import './SquadRow.scss';

class SquadRow extends React.Component {
  static propTypes = {
    squadList: squadShape.squadShape,
  }

  render() {
    const { squad } = this.props;
    console.error('squad', squad);
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
          </div>
        </div>
      </div>
    );
  }
}

export default SquadRow;
