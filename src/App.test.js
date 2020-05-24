import React from 'react';
import { render } from '@testing-library/react';
import logo from './assets/clockface_roman01.jpg';
import App from './App';

test('app component renders roman numeral image', () => {
  const { getByAltText } = render(<App />);
  const imageElement = getByAltText(/logo/i);
  expect(imageElement).toBeInTheDocument();
});

test('app component renders learn about roman numerals link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn about roman numerals/i);
  expect(linkElement).toBeInTheDocument();
});
