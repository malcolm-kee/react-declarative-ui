import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <h2 className="card-title">{props.title}</h2>
      <div className="card-content">{props.content}</div>
    </div>
  );
}

window.renderCard = function(title, content, onClick) {
  ReactDOM.render(
    <Card title={title} content={content} onClick={onClick} />,
    document.getElementById('app')
  );
};

// -> demo
