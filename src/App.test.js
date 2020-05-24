import React from 'react';
import { render } from '@testing-library/react';
import logo from './assets/clockface_roman01.jpg';
import App from './App';

test('verify app component renders roman numeral logo', () => {
  const { getByAltText } = render(<App />);
  const imageElement = getByAltText(/logo/i);
  expect(imageElement).toBeInTheDocument();
});

test('verify app component renders roman numeral title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/converter/i);
  expect(titleElement).toBeInTheDocument();
});

test('verify app component renders roman numerals link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn about roman numerals/i);
  expect(linkElement).toBeInTheDocument();
});
