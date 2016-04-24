var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.jsx');


var render = function(){
  ReactDOM.render(<App />, document.getElementById('display'));
};

window.addEventListener('load', render);
