import PropTypes from 'prop-types';

const squadListShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  squads: PropTypes.object,
  uid: PropTypes.string.isRequired,
});

export default { squadListShape };
