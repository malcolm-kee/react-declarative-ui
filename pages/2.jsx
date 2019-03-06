import React from 'react';
import ReactDOM from 'react-dom';

function Counter(props) {
  return (
    <div className="count" onClick={props.onClick}>
      Count: {props.count}
    </div>
  );
}

ReactDOM.render(
  <Counter
    count={count}
    onClick={function() {
      console.log('clicked');
    }}
  />,
  document.getElementById('app')
);
