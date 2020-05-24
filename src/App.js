import React from 'react';
import logo from './assets/clockface_roman01.jpg';
import Roman from './components/Roman/Roman.js';
import NumberToRoman from './components/Number/NumberToRoman.js';
import { romanNumeralConverter, validateRomanNumerals } from './helperFunctions/helperFunctions.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conversionType: 'convertToNumbers',
      numberRomanConversionValue: '',
      romanNumeralConversionValue: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleRomanChange = this.handleRomanChange.bind(this);
  };

  conditionalRender() {
    if (this.state.conversionType === 'convertToNumbers') {
      return (
        <Roman
          romanNumeralConversionValue={this.state.romanNumeralConversionValue}
          handleRomanChange={this.handleRomanChange}
        />
      )
    } else {
      return (
        <NumberToRoman
          numberConversionValue={this.state.numberConversionValue}
          handleNumberChange={this.handleNumberChange}
        />
      )
    }
  }

  handleClick(event) {
    if (event.target.name === 'convertToNumbers') {
      return this.setState({ conversionType: event.target.name });
    } else {
      return this.setState({ conversionType: event.target.name });
    }
  };

  handleNumberchange(number) {
    console.log('number ran');
  };

  handleRomanChange(textValue) {
    var validate = validateRomanNumerals(textValue);
    if (validate) {
      this.setState({
        romanNumeralConversionValue: romanNumeralConverter(textValue)
      })
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Roman Numeral Converter</p>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Roman_numerals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about Roman Numerals
          </a>
          <div className="buttonContainer">
            <button name="convertToNumbers" onClick={this.handleClick}>Convert to Numbers</button>
            <button name="convertToNumerals" onClick={this.handleClick}>Convert to Roman Numerals</button>
          </div>
        </header>
        { this.conditionalRender() }
      </div>
    );
  }
}

export default App;