import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonWrapper } from '../buttonWrapper.jsx';

test('handles onClick', () => {
  const onClick = jest.fn();
  const user = userEvent.setup();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);
  const buttonElement = screen.getByText('Add Item');
  user.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
