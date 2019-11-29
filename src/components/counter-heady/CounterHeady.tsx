import React, { FC, useState } from 'react';

interface Props {
  decrementText?: string;
  incrementText?: string;
  stepAmount?: number;
}

const Counter: FC<Props> = (props: Props) => {
  const [count, setCount] = useState(0);

  const { decrementText = '-', incrementText = '+', stepAmount = 1 } = props;

  return (
    <div className="counter-wrapper">
      <button onClick={() => setCount(count - stepAmount)}>
        {decrementText}
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + stepAmount)}>
        {incrementText}
      </button>
    </div>
  );
};

export default Counter;
