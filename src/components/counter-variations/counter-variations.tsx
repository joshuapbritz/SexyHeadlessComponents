import React, { FC } from 'react';
import CounterHeadless from '../counter-headless/CounterHeadless';
import styles from './counter-variations.module.scss';

const Counter: FC = () => {
  return (
    <CounterHeadless>
      {({ count, increment, decrement }) => {
        return (
          <div className={`${styles.counter} ${styles.standard}`}>
            <button onClick={() => decrement(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => increment(count + 1)}>+</button>
          </div>
        );
      }}
    </CounterHeadless>
  );
};

const CounterStacked: FC = () => {
  return (
    <CounterHeadless>
      {({ count, increment, decrement }) => {
        return (
          <div className={`${styles.counter} ${styles.stacked}`}>
            <h3>{count}</h3>
            <div className="actions">
              <button onClick={() => decrement(count - 1)}>-</button>
              <button onClick={() => increment(count + 1)}>+</button>
            </div>
          </div>
        );
      }}
    </CounterHeadless>
  );
};

const CounterLabeled: FC<{ label: string }> = ({ label }) => {
  return (
    <CounterHeadless>
      {({ count, increment, decrement }) => {
        return (
          <div
            className={`${styles.counter} ${styles.stacked} ${styles.label}`}
          >
            <h3>
              {label} - <strong>{count}</strong>
            </h3>
            <div className="actions">
              <button onClick={() => decrement(count - 1)}>-</button>
              <button onClick={() => increment(count + 1)}>+</button>
            </div>
          </div>
        );
      }}
    </CounterHeadless>
  );
};

export { CounterLabeled, Counter, CounterStacked };
