import React from 'react';
import './Roman.css';

function Roman(props) {
  function handleChange(event) {
    return props.handleRomanChange(event.target.value);
  };

  return (
    <div className="romanContainer">
      <form onChange={handleChange} >
        Enter Roman Numerals Here:
        <input
          placeholder="MCCCXXXVII"
          type="text"
          name="roman"/>
      </form>
      <h4 title="conversionProp">{props.romanNumeralConversionValue}</h4>
    </div>
  );
}

export default Roman;