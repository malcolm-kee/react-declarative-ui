import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import serialize from 'form-serialize';

function Card(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <div className="card-content">{props.content}</div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

window.renderApp = function(name, details) {
  ReactDOM.render(
    <Card title={name} content={details} />,
    document.getElementById('app')
  );
};
