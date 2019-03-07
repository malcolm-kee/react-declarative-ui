import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

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
      window.alert('Too much');
    }
  }, [count > 5]);

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
      <Counter />
    </div>,
    document.getElementById('app')
  );
}

renderApp();
