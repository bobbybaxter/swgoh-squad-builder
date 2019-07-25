import PropTypes from 'prop-types';

const newSquadListShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uid: PropTypes.string,
});

export default { newSquadListShape };
