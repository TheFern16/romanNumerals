import React from 'react';
import './Roman.css';

function Roman(props) {
  return (
    <div className="romanContainer">
      <h2>{props.romanNumeralConversionValue}</h2>
      <form>
        Enter Roman Numerals Here:
        <input type="text" name="roman"/>
      </form>
    </div>
  );
}

export default Roman;