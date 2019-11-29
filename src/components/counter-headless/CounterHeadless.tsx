import { useState } from 'react';

interface Arguments {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

const Counter = (props: { children: (args: Arguments) => JSX.Element }) => {
  const [count, setCount] = useState(0);

  if (!props.children || typeof props.children !== 'function') return null;

  return props.children({
    count,
    increment: (value: number = 1) => setCount(value),
    decrement: (value: number = 1) => setCount(value),
  });
};

export default Counter;
