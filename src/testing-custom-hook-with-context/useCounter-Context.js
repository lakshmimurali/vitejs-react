import React, { useState, useContext, useCallback } from 'react';

const CounterStepContext = React.createContext(1);

export const CounterStepProvider = ({ step, children }) => (
  <CounterStepContext.Provider value={step}>
    {children}
  </CounterStepContext.Provider>
);

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const step = useContext(CounterStepContext);
  console.log(step);
  const increment = useCallback(() => setCount((x) => x + step), [step]);
  console.log(increment);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, reset };
}
