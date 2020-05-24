import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberToRoman from './NumberToRoman.js';

test('verify number component renders component title', () => {
  const { getByText } = render(<NumberToRoman />);
  const titleElement = getByText(/enter numbers here:/i);
  expect(titleElement).toBeInTheDocument();
});