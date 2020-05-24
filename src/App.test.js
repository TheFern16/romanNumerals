import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders roman numeral image', () => {

})

test('renders learn about roman numerals link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn about roman numerals/i);
  expect(linkElement).toBeInTheDocument();
});
