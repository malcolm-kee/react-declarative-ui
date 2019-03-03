import React from 'react';
import ReactDOM from 'react-dom';

function DistractionCounter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    function increment() {
      console.log('incrementing');
      setCount(prevCount => prevCount + 1);
    }

    window.addEventListener('blur', increment);

    return function() {
      window.removeEventListener('blur', increment);
    };
  }, []);

  return (
    <div>
      <p>Current distractions: {count}</p>
    </div>
  );
}

ReactDOM.render(<DistractionCounter />, document.getElementById('app'));
