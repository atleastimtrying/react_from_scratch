var React = require('react');

module.exports = React.createClass({
  displayName: 'Input',
  move: function(event){
    this.props.onMove(event.pageX, event.pageY);
  },
  render: function(){
    return(<div className="input"
      onMouseMove={this.move}
    ></div>);
  }
});


