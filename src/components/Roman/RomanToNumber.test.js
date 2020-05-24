import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RomanToNumber from './RomanToNumber';

test('verify roman component renders component title', () => {
  const { getByText } = render(<RomanToNumber />);
  const titleElement = getByText(/enter roman numerals here:/i);
  expect(titleElement).toBeInTheDocument();
});

test('verify roman component renders input box', () => {
  const { getByPlaceholderText } = render(<RomanToNumber />);
  const inputElement = getByPlaceholderText(/MCCCXXXVII/i);
  expect(inputElement).toBeInTheDocument();
});

test('verify roman component renders conversion value prop', () => {
  const { getByTitle } = render(<RomanToNumber />);
  const propElement = getByTitle(/conversionProp/i);
  expect(propElement).toBeInTheDocument();
});

test('verify users can enter text into roman component', () => {
  const { getByTitle, getByPlaceholderText } = render(<RomanToNumber />);
  const inputElement = getByPlaceholderText(/MCCCXXXVII/i);
  const propElement = getByTitle(/conversionProp/i);
  fireEvent.keyDown(inputElement, { key: 'M', code: 'KeyM' });
  expect(propElement).toBeInTheDocument();
});