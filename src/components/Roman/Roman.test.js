import React from 'react';
import { render } from '@testing-library/react';
import Roman from './Roman';

test('roman component renders roman component title', () => {
  const { getByText } = render(<Roman />);
  const titleElement = getByText(/enter roman numerals here:/i);
  expect(titleElement).toBeInTheDocument();
})
// test('app component renders roman numeral image', () => {
//   const { getByAltText } = render(<App />);
//   const imageElement = getByAltText(/logo/i);
//   expect(imageElement).toBeInTheDocument();
// });