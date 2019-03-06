import React from 'react';
import ReactDOM from 'react-dom';

function Counter(props) {
  /**
   * `React.createElement(type, attribute, ...children)`
   */
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

function incrementAndRefresh() {
  count++;
  renderApp();
}

function renderApp() {
  /**
   * ReactDOM.render(what, where)
   */
  ReactDOM.render(
    React.createElement(
      'div',
      {},
      React.createElement(Counter, {
        count: count,
        onClick: incrementAndRefresh
      })
    ),
    // <div>
    // <Counter
    //   count={count}
    //   onClick={incrementAndRefresh}
    // />
    // </div>,
    document.getElementById('app')
  );
}

renderApp();
