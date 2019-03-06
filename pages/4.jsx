import React from 'react';
import ReactDOM from 'react-dom';

// to implement a counter that can increment & decrement
// and alert when it's increase above 5
function Counter(props) {
  return (
    <div className="count" onClick={props.onClick}>
      Count: {props.count}
    </div>
  );
}

let count = 0;

function renderApp() {
  ReactDOM.render(
    <div>
      <Counter
        count={count}
        onClick={function() {
          count++;
          renderApp();
        }}
      />
    </div>,
    document.getElementById('app')
  );
}

renderApp();
