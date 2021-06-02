import React from 'react';
import PropTypes from 'prop-types';

const PageControls = ({ page, handleClick }) => (
  <>
    <button disabled={page === 1} value="back" onClick={handleClick}>back</button>
    <span>Page: {page}</span>
    <button disabled={page === 82}value="forward" onClick={handleClick}>forward</button>
  </>
);

PageControls.propTypes = {
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PageControls;
