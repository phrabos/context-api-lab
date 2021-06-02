import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => (
  <>
    <p>{character.name}</p>
    <p>{character.birthYear}</p>
  </>
);

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthYear: PropTypes.string.isRequired,
  }).isRequired
};

export default Character;
