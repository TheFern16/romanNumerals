import React from 'react';
import logo from './assets/clockface_roman01.jpg';
import Roman from './components/Roman/Roman.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      romanNumeralConversionValue: 'default'
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Roman Numeral Converter
          </p>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Roman_numerals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about Roman Numerals
          </a>
        </header>
        <Roman
          romanNumeralConversionValue={this.state.romanNumeralConversionValue}
        />
      </div>
    );
  }
}

export default App;