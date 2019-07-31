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
      <div className="SquadListCard col-4 mb-4">
        <div className="slCard card text-white bg-dark">
          <div className="card-body">
            <h5 className="card-title">{squadList.name}</h5>
            <p className="card-text">{squadList.description}</p>
          </div>
          <div className="buttonRow">
            <button className="slCardBtn btn btn-dark" onClick={this.updateMe}>Rename</button>
            <Link className="slCardBtn btn btn-dark" to={toSquadList}>Edit</Link>
            <button className="slCardBtn btn btn-dark" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadListCard;
