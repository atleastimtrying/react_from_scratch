var React = require('react');
var Input = require('./input');
var Output = require('./output');

module.exports = React.createClass({
  displayName: 'App',
  getInitialState: function(){
    return({ x: 0, y: 0, points:[]});
  },
  move: function(x, y){
    this.setState({
      x: x,
      y: y,
      points: this.state.points.concat([{x: x, y: y}])
    });
  },
  render: function(){
    return(<div className="container">
      <Input onMove={this.move} />
      <Output x={this.state.x} y={this.state.y} points={this.state.points} />
    </div>);
  }
});

