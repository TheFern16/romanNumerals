import React from 'react';
import './Roman.css';

function Roman(props) {
  return (
    <div className="romanContainer">
      <h2>Hello World</h2>
      <h2>{props.romanNumeralConversionValue}</h2>
    </div>
  );
}

export default Roman;