import React from 'react';
import './Roman.css';

function Roman(props) {
  function handleChange(event) {
    console.log(event.target.name, event.target.value);
    props.handleRomanChange();
  }

  return (
    <div className="romanContainer">
      <form onChange={handleChange} >
        Enter Roman Numerals Here:
        <input type="text" name="roman"/>
      </form>
      <h4>{props.romanNumeralConversionValue}</h4>
    </div>
  );
}

export default Roman;