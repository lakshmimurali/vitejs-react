import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { ReduxCounter } from '../reduxCounter';
import { store } from '../store';

test('increment', () => {
  render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent('0');

  const addButton = screen.getByText(/Increment/i);
  userEvent.click(addButton);

  expect(counter).toHaveTextContent('1');
});

test('increment again', () => {
  render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent('0');

  const addButton = screen.getByText(/Increment/i);
  userEvent.click(addButton);

  expect(counter).toHaveTextContent('1');
});
