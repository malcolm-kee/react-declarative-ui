import React from 'react';
import ReactDOM from 'react-dom';

function Counter(props) {
  return React.createElement(
    'div',
    { className: 'count', onClick: props.onClick },
    'Count: ',
    props.count
  );
  // return (
  //   <div className="count" onClick={props.onClick}>
  //     Count: {props.count}
  //   </div>
  // );
}

let count = 0;

function renderApp() {
  ReactDOM.render(
    React.createElement(
      'div',
      {},
      React.createElement(Counter, {
        count: count,
        onClick: function() {
          count++;
          renderApp();
        }
      })
    ),
    // <div>
    // <Counter
    //   count={count}
    //   onClick={function() {
    //     count++;
    //     renderApp();
    //   }}
    // />
    // </div>,
    document.getElementById('app')
  );
}

renderApp();
