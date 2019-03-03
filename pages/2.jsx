import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
  return React.createElement(
    'div',
    { className: 'card', onClick: props.onClick },
    React.createElement('h2', { className: 'card-title' }, props.title),
    React.createElement('div', { className: 'card-content' }, props.content)
  );
}

window.renderCard = function(title, content, onClick) {
  ReactDOM.render(
    React.createElement(Card, { title, content, onClick }),
    document.getElementById('app')
  );
};

// -> demo
