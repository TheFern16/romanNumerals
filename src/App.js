import React from 'react';
import logo from './assets/clockface_roman01.jpg';
import Roman from './components/Roman/Roman.js';
import './App.css';

function App() {
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
      <Roman />
    </div>
  );
}

export default App;