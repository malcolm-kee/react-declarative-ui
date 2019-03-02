import React from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (count > 5) {
      document.title = 'Too much!';
    } else {
      document.title = 'Add More!';
    }
  }, [count > 5]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('app'));
