import React from 'react';
import ReactDOM from 'react-dom';

function useCounterWithAlert(alertThreshold, initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  React.useEffect(() => {
    if (count > alertThreshold) {
      window.alert('too much');
    } else {
      window.alert('add more!');
    }
  }, [count > alertThreshold]);

  return {
    count,
    increment,
    decrement
  };
}

function Counter() {
  const { count, increment, decrement } = useCounterWithAlert(5);

  return (
    <div className="count">
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function renderApp() {
  ReactDOM.render(<Counter />, document.getElementById('app'));
}

renderApp();
