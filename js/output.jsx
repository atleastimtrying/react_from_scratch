var React = require('react');

module.exports = React.createClass({
  displayName: 'Output',
  render: function(){
    return(
      <div className="output">
        <p>{this.props.x}</p>
        <p>{this.props.y}</p>
      </div>
    );
  }
});


