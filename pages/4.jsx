import React from 'react';
import ReactDOM from 'react-dom';

// to implement a counter that can increment & decrement
function Adder(props) {
  return (
    <div className="count" onClick={props.onClick}>
      Count: {props.count}
    </div>
  );
}

let count = 0;

function renderApp() {
  ReactDOM.render(
    <Adder
      count={count}
      onClick={function() {
        count++;
        renderApp();
      }}
    />,
    document.getElementById('app')
  );
}

renderApp();
