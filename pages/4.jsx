import React from 'react';
import ReactDOM from 'react-dom';

// to have subcomponent `Button`
// to implement a counter that can increment & decrement
function Counter(props) {
  /**
   * React.useState(initialState) => [stateValue, stateSetter]
   */

  /**
   * React.useEffect(effect, dependencies)
   */
  return (
    <div className="count" onClick={props.onClick}>
      Count: {props.count}
    </div>
  );
}

let count = 0;

function incrementAndRefresh() {
  count++;
  renderApp();
}

function renderApp() {
  ReactDOM.render(
    <div>
      <Counter count={count} onClick={incrementAndRefresh} />
    </div>,
    document.getElementById('app')
  );
}

renderApp();
