import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('roman component renders conversion value prop', () => {
  const { getByTitle } = render(<Roman />);
  const propElement = getByTitle(/conversionProp/i);
  expect(propElement).toBeInTheDocument();
});

// copy: [Function],
//       cut: [Function],
//       paste: [Function],
//       compositionEnd: [Function],
//       compositionStart: [Function],
//       compositionUpdate: [Function],
//       keyDown: [Function],
//       keyPress: [Function],
//       keyUp: [Function],
//       focus: [Function],
//       blur: [Function],
//       focusIn: [Function],
//       focusOut: [Function],
//       change: [Function],
//       input: [Function],
//       invalid: [Function],
//       submit: [Function],
//       reset: [Function],
//       click: [Function],
//       contextMenu: [Function],
//       dblClick: [Function],
//       drag: [Function],
//       dragEnd: [Function],
//       dragEnter: [Function],
//       dragExit: [Function],
//       dragLeave: [Function],
//       dragOver: [Function],
//       dragStart: [Function],
//       drop: [Function],
//       mouseDown: [Function],
//       mouseEnter: [Function],
//       mouseLeave: [Function],
//       mouseMove: [Function],
//       mouseOut: [Function],
//       mouseOver: [Function],
//       mouseUp: [Function],
//       select: [Function],
//       touchCancel: [Function],
//       touchEnd: [Function],
//       touchMove: [Function],
//       touchStart: [Function],
//       scroll: [Function],
//       wheel: [Function],
//       abort: [Function],
//       canPlay: [Function],
//       canPlayThrough: [Function],
//       durationChange: [Function],
//       emptied: [Function],
//       encrypted: [Function],
//       ended: [Function],
//       loadedData: [Function],
//       loadedMetadata: [Function],
//       loadStart: [Function],
//       pause: [Function],
//       play: [Function],
//       playing: [Function],
//       progress: [Function],
//       rateChange: [Function],
//       seeked: [Function],
//       seeking: [Function],
//       stalled: [Function],
//       suspend: [Function],
//       timeUpdate: [Function],
//       volumeChange: [Function],
//       waiting: [Function],
//       load: [Function],
//       error: [Function],
//       animationStart: [Function],
//       animationEnd: [Function],
//       animationIteration: [Function],
//       transitionEnd: [Function],
//       pointerOver: [Function],
//       pointerEnter: [Function],
//       pointerDown: [Function],
//       pointerMove: [Function],
//       pointerUp: [Function],
//       pointerCancel: [Function],
//       pointerOut: [Function],
//       pointerLeave: [Function],
//       gotPointerCapture: [Function],
//       lostPointerCapture: [Function],
//       popState: [Function],
//       doubleClick: [Function] }