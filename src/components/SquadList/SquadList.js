import React from 'react';
// import { Link } from 'react-router-dom';

// import SquadRow from '../SquadRow/SquadRow';

import squadListData from '../../helpers/data/squadListData';

// import squadListShape from '../../helpers/propz/squadListShape';

class SquadList extends React.Component {
  state = {
    squadList: {},
  }

  componentDidMount() {
    const squadListId = this.props.match.params.id;
    squadListData.getSquadListById(squadListId)
      .then(squadList => this.setState({ squadList }))
      .catch(err => console.error('squads didnt load', err));
  }

  render() {
    // const squadComponents = this.props.squadList.map(squad => (
    //   <SquadRow
    //     key={squad.id}
    //     squad={squad}
    //   />
    // ));

    return (
      <div className="SquadList">
        {/* {squadComponents} */}
      </div>
    );
  }
}

export default SquadList;
