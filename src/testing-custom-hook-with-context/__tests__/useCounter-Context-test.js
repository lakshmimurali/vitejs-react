import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CounterStepProvider, useCounter } from '../useCounter-Context.js';

test('should use custom step when incrementing', () => {
  const wrapper = ({ children }) => {
    console.log(children);
    return <CounterStepProvider step={2}>{children}</CounterStepProvider>;
  };
  const { result } = renderHook(() => useCounter(), {
    wrapper,
    initialProps: {
      step: 2,
    },
  });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);
});
