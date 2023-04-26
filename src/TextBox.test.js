import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TextBox from './TextBox.jsx';

test('renders a name', () => {
  render(<TextBox />);
  const textBoxElement = screen.getByRole('nameinfo');
  expect(textBoxElement).toHaveTextContent('Good Name Please');
  expect(divElement).toHaveAttribute('role', 'nameinfo');
  fireEvent.change(textBoxElement, { target: { value: 'ManiVenkat' } });
  expect(textBoxElement).toHaveTextContent('ManiVenkat');
});
