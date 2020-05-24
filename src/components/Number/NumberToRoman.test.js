import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberToRoman from './NumberToRoman.js';

test('verify number component renders component title', () => {
  const { getByText } = render(<NumberToRoman />);
  const titleElement = getByText(/enter numbers here:/i);
  expect(titleElement).toBeInTheDocument();
});

test('verify number component renders input box', () => {
  const { getByPlaceholderText } = render(<NumberToRoman />);
  const inputElement = getByPlaceholderText(/1337/i);
  expect(inputElement).toBeInTheDocument();
});

test('verify number component renders conversion value prop', () => {
  const { getByTitle } = render(<NumberToRoman />);
  const propElement = getByTitle(/conversionProp/i);
  expect(propElement).toBeInTheDocument();
});

// test('verify users can enter text into roman component', () => {
//   const { getByTitle, getByPlaceholderText } = render(<RomanToNumber />);
//   const inputElement = getByPlaceholderText(/MCCCXXXVII/i);
//   const propElement = getByTitle(/conversionProp/i);
//   fireEvent.keyDown(inputElement, { key: 'M', code: 'KeyM' });
//   expect(propElement).toBeInTheDocument();
// });