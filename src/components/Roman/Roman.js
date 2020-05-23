import React from 'react';
import './Roman.css';

function Roman(props) {
  return (
    <div className="romanContainer">
      <form>
        Enter Roman Numerals Here:
        <input type="text" name="roman"/>
      </form>
      <h4>{props.romanNumeralConversionValue}</h4>
    </div>
  );
}

export default Roman;