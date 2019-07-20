import React from 'react';
// import { Link } from 'react-router-dom';

import SquadRow from '../SquadRow/SquadRow';

import squadListData from '../../helpers/data/squadListData';
import squadData from '../../helpers/data/squadData';

// import squadListShape from '../../helpers/propz/squadListShape';

class SquadList extends React.Component {
  state = {
    squadList: {},
    squads: [],
  }

  getSquadList = (squadListId) => {
    squadListData.getSquadListById(squadListId)
      .then(res => this.setState({ squadList: res }))
      .catch(err => console.error('squadlist didnt load', err));
  }

  getSquadsbySquadList = (squadListId) => {
    squadData.getSquadsBySquadList(squadListId)
      .then(res => this.setState({ squads: res }))
      .catch(err => console.error('squads didnt load', err));
  }

  componentDidMount() {
    const squadListId = this.props.match.params.id;
    this.getSquadList(squadListId);
    this.getSquadsbySquadList(squadListId);
  }

  render() {
    const { squadList } = this.state;
    const squadComponents = this.state.squads.map(squad => (
      <SquadRow
        key={squad.id}
        squad={squad}
      />
    ));

    return (
      <div className="SquadList col-12 justify-content-center">
        <h1>{squadList.name}</h1>
        <div className="d-flex flex-column">
          {squadComponents}
        </div>
      </div>
    );
  }
}

export default SquadList;
