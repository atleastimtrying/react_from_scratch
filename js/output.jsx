var React = require('react');
var Graph = require('./graph');
module.exports = React.createClass({
  displayName: 'Output',
  render: function(){
    return(
      <div className="output">
        <p>x: {this.props.x}</p>
        <p>y: {this.props.y}</p>
        <p>count: {this.props.points.length}</p>
        <Graph points={this.props.points} limit="200" width="300" height="300" />
        <Graph points={this.props.points} limit="50" width="100" height="100" />
      </div>
    );
  }
});


