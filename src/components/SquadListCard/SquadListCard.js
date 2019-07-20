import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import squadListShape from '../../helpers/propz/squadListShape';

import './SquadListCard.scss';

class SquadListCard extends React.Component {
  static propTypes = {
    squadList: squadListShape.squadListShape,
    deleteSquadList: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { squadList, deleteSquadList } = this.props;
    deleteSquadList(squadList.id);
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
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <Link className="btn btn-outline-success" to={toSquadList}>View</Link>
              <button className="btn btn-outline-danger" onClick={this.deleteMe}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadListCard;
