import React from 'react';
// import PropTypes from 'prop-types';

import squadShape from '../../helpers/propz/squadShape';

import './SquadRow.scss';

class SquadRow extends React.Component {
  static propTypes = {
    squadList: squadShape.squadShape,
  }

  render() {
    return (
      <div className="SquadRow">
        This is a squad row
      </div>
    );
  }
}

export default SquadRow;
