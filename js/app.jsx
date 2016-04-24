var React = require('react');
var Input = require('./input');
var Output = require('./output');

module.exports = React.createClass({
  displayName: 'App',
  render: function(){
    return(<div className="container">
      <Input />
      <Output x="10" y="20" />
    </div>);
  }
});

