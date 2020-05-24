import React from 'react';
import './NumberToRoman.css';

function NumberToRoman(props) {
  function handleChange(event) {
    return props.handleNumberChange(event.target.value);
  };

  return (
    <div className="numberToRomanContainer">
      <form onChange={handleChange} >
        Enter Numbers Here:
        <input
          placeholder="1337"
          type="text"
          name="number"/>
      </form>
      <h4 title="conversionProp">{props.numberConversionValue}</h4>
    </div>
  );
}

export default NumberToRoman;