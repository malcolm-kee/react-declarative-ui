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

  React.useEffect(() => {
    if (count > 5) {
      consoleMsg('too much');
    } else {
      consoleMsg('add more!');
    }
  }, [count > 5]);

  return (
    <div className="count">
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
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
