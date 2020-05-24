import React from 'react';
import './Number.css';

function NumberToRoman(props) {
  function handleChange(event) {
    // return props.handleRomanChange(event.target.value);
    console.log(event);
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
      <h4 title="conversionProp">hello world</h4>
    </div>
  );
}

export default NumberToRoman;