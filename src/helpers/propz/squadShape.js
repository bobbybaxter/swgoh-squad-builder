import PropTypes from 'prop-types';

const squadShape = PropTypes.shape({
  character1: PropTypes.string.isRequired,
  character2: PropTypes.string.isRequired,
  character3: PropTypes.string.isRequired,
  character4: PropTypes.string.isRequired,
  character5: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { squadShape };
