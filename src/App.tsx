import React from 'react';
import './App.scss';
import CounterHeady from './components/counter-heady/CounterHeady';
import CounterHeadless from './components/counter-headless/CounterHeadless';
import {
  Counter,
  CounterStacked,
  CounterLabeled,
} from './components/counter-variations/counter-variations';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Heady Component</h1>

      <CounterHeady
        decrementText="less"
        incrementText="more"
        stepAmount={20}
      ></CounterHeady>

      <hr />

      <h1>Headless Component</h1>

      <CounterHeadless>
        {({ count, increment, decrement }) => {
          return (
            <div className="counter-wrapper">
              <button onClick={() => decrement(count - 1)}>less</button>
              <span>{count}</span>
              <button onClick={() => increment(count + 1)}>more</button>
            </div>
          );
        }}
      </CounterHeadless>

      <hr />

      <h1>Headless Component Layout 1</h1>

      <CounterHeadless>
        {({ count, increment, decrement }) => {
          return (
            <div className="counter-wrapper">
              <h2>{count}</h2>
              <button onClick={() => decrement(count - 1)}>-</button>
              <button onClick={() => increment(count + 1)}>+</button>
            </div>
          );
        }}
      </CounterHeadless>

      <hr />

      <h1>Headless Component Increment Only</h1>

      <CounterHeadless>
        {({ count, increment }: any) => {
          return (
            <div className="counter-wrapper">
              <h2>{count}</h2>
              <button onClick={() => increment(count + 1)}>+</button>
            </div>
          );
        }}
      </CounterHeadless>

      <hr />

      <br />
      <br />

      <h1>Wrapped Headless Component</h1>

      <Counter />

      <hr />

      <h1>Wrapped Headless Component Stacked</h1>

      <CounterStacked />

      <hr />

      <h1>Wrapped Headless Component Stacked (W/label)</h1>

      <CounterLabeled label="Apples" />
    </div>
  );
};

export default App;
