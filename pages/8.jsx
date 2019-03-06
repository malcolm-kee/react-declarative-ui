import React from 'react';
import ReactDOM from 'react-dom';

function useIncrementer(step = 1, initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  function increment() {
    setCount(prevCount => prevCount + step);
  }

  function decrement() {
    setCount(prevCount => prevCount - step);
  }

  return {
    count,
    increment,
    decrement
  };
}

function Counter() {
  const { count, increment, decrement } = useIncrementer();

  return (
    <div className="count">
      Count: {count}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

function BigCounter() {
  const { count, increment, decrement } = useIncrementer(2, 100);

  return (
    <div className="count">
      Count: {count}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

function renderApp() {
  ReactDOM.render(
    <div>
      <Counter />
      <BigCounter />
    </div>,
    document.getElementById('app')
  );
}

renderApp();
