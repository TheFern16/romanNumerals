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
  const { getByText, getByTitle } = render(<NumberToRoman numberConversionValue={'MCCCXXXVII'} />);
  const propElement = getByText(/MCCCXXXVII/i);
  expect(propElement).toBeInTheDocument();
});

test('verify users can enter text into number component', () => {
  const { getByTitle, getByPlaceholderText } = render(<NumberToRoman />);
  const inputElement = getByPlaceholderText(/1337/i);
  const propElement = getByTitle(/conversionProp/i);
  fireEvent.keyDown(inputElement, { key: '1', code: 'Digit1' });
  expect(propElement).toBeInTheDocument();
});