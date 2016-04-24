var React = require('react');
var Input = require('./input');

module.exports = React.createClass({
  displayName: 'App',
  render: function(){
    return(<div className="container">
      <Input />
    </div>);
  }
});

