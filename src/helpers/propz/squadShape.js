import PropTypes from 'prop-types';

const squadShape = PropTypes.shape({
  character1Id: PropTypes.string.isRequired,
  character2Id: PropTypes.string.isRequired,
  character3Id: PropTypes.string.isRequired,
  character4Id: PropTypes.string.isRequired,
  character5Id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { squadShape };
