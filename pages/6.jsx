import React from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

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
    </div>,
    document.getElementById('app')
  );
}

renderApp();
