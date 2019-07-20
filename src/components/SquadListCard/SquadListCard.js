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
      <div className="SquadListCard">
        <div className="card">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link className="btn btn-outline-success" to={toSquadList}>View</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadListCard;
