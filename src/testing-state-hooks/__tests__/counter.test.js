import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../counter';

test('handles onClick', () => {
  render(<Counter />);

  const divElement = screen.getByRole('contentinfo');
  const buttonElement = screen.getByText('Add One');
  userEvent.click(buttonElement);

  expect(divElement).toHaveTextContent('Count is 1');
});
