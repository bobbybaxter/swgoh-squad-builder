import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import newSquadListShape from '../../helpers/propz/newSquadListShape';

import './SquadListCard.scss';

class SquadListCard extends React.Component {
  static propTypes = {
    deleteSquadList: PropTypes.func.isRequired,
    openUpdateSquadListModal: PropTypes.func.isRequired,
    squadList: newSquadListShape.newSquadListShape,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { squadList, deleteSquadList } = this.props;
    deleteSquadList(squadList.id);
  }

  updateMe = (e) => {
    e.preventDefault();
    const { squadList, openUpdateSquadListModal } = this.props;
    openUpdateSquadListModal(squadList.id);
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
            <Link className="btn-sm btn-outline-primary" to={toSquadList}>View</Link>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="btn-sm btn-outline-primary" onClick={this.updateMe}>Edit</button>
              <button className="btn-sm btn-outline-danger" onClick={this.deleteMe}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadListCard;
