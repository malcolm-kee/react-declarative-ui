import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const pathName = window.location.pathname;

require(`../pages${pathName}.jsx`);

window.React = React;
window.ReactDOM = ReactDOM;
