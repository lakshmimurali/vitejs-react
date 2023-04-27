import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { APIComponent } from '../apiComponent.jsx';

const server = setupServer(
  rest.get('/profileName', (req, res, ctx) => {
    return res(ctx.json({ name: 'VKR' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('gets the data', async () => {
  render(<APIComponent />);

  const contentInfoElement = await waitFor(() =>
    screen.getByRole('contentinfo')
  );

  expect(contentInfoElement).toHaveTextContent('Name is VKR');
});
