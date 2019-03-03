import React from 'react';
import ReactDOM from 'react-dom';

function useCounterWithAlert(alertWhen, initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  React.useEffect(() => {
    if (count > alertWhen) {
      window.alert('Too much!');
    } else {
      window.alert('Add More!');
    }
  }, [count > alertWhen]);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  return {
    count,
    increment,
    decrement
  };
}

function Counter() {
  const { count, increment, decrement } = useCounterWithAlert(5, 2);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('app'));
