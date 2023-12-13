import React from 'react';
import PropTypes from 'prop-types';

function Display({ count }) {
  return (
    <div className="Display">
      <h1>{count}</h1>
    </div>
  );
}

Display.propTypes = {
  count: PropTypes.string.isRequired,
};

export default Display;
