import { renderHook, act } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { useProfileNameAPI } from '../useAPI';

const server = setupServer(
  rest.get('/profileName', (req, res, ctx) => {
    return res(ctx.json({ name: 'VKR' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should increment', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useProfileNameAPI());

  await waitForNextUpdate();

  expect(result.current).toEqual({ name: 'VKR' });
});
