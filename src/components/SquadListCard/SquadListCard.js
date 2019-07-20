import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import squadListShape from '../../helpers/propz/squadListShape';

import './SquadListCard.scss';

class SquadListCard extends React.Component {
  static propTypes = {
    squadList: squadListShape.squadListShape,
  }

  render() {
    const { squadList } = this.props;
    const toSquadList = `squad-list/${squadList.id}`;

    return (
      <div className="SquadListCard col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{squadList.name}</h5>
            <p className="card-text">{squadList.description}</p>
            <Link className="btn btn-outline-success" to={toSquadList}>View</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadListCard;
