import React from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (count > 5) {
      window.alert('Too much!');
    } else {
      window.alert('Add More!');
    }
  }, [count > 5]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('app'));
