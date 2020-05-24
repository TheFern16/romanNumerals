import React from 'react';
import { render } from '@testing-library/react';
import Roman from './Roman';

test('roman component renders roman component title', () => {
  const { getByText } = render(<Roman />);
  const titleElement = getByText(/enter roman numerals here:/i);
  expect(titleElement).toBeInTheDocument();
});

test('roman component renders roman input box', () => {
  const { getByPlaceholderText } = render(<Roman />);
  const inputElement = getByPlaceholderText(/MCCCXXXVII/i);
  expect(inputElement).toBeInTheDocument();
});