import PropTypes from 'prop-types';

const squadShape = PropTypes.shape({
  character1: PropTypes.string,
  character1Id: PropTypes.string,
  character1Image: PropTypes.string,
  character2: PropTypes.string,
  character2Id: PropTypes.string,
  character2Image: PropTypes.string,
  character3: PropTypes.string,
  character3Id: PropTypes.string,
  character3Image: PropTypes.string,
  character4: PropTypes.string,
  character4Id: PropTypes.string,
  character4Image: PropTypes.string,
  character5: PropTypes.string,
  character5Id: PropTypes.string,
  character5Image: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  uid: PropTypes.string.isRequired,
});

export default { squadShape };
