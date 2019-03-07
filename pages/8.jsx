import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

function useCounterWithAlert(threshold, step = 1, initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  function increment() {
    setCount(prevCount => prevCount + step);
  }

  function decrement() {
    setCount(prevCount => prevCount - step);
  }

  React.useEffect(() => {
    if (count > threshold) {
      window.alert('Too much!');
    }
  }, [count > threshold]);

  return {
    count,
    increment,
    decrement
  };
}

function Counter(props) {
  const { count, increment, decrement } = useCounterWithAlert(
    props.threshold,
    props.step
  );

  return (
    <div className="count">
      Count: {count}
      <div>
        <Button onClick={decrement} label="-" />
        <Button onClick={increment} label="+" />
      </div>
    </div>
  );
}

function renderApp() {
  ReactDOM.render(
    <div>
      <Counter threshold={5} step={2} />
    </div>,
    document.getElementById('app')
  );
}

renderApp();
