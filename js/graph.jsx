var React = require('react');

module.exports = React.createClass({
  displayName: 'Graph',

  getInitialState: function(){
    return {points: []}
  },

  calculate_y: function(large_y){
    var total_height = window.innerHeight;
    var range = total_height - this.props.height;
    return (large_y/range) * this.props.height;
  },

  calculate_x: function(large_x){
    var total_width = window.innerWidth;
    var range = total_width - this.props.width;
    return (large_x/range) * this.props.width;
  },

  renderPoint: function(point){
    return(<div className="point" style={{top: this.calculate_y(point.y) + "px", left: this.calculate_x(point.x) + "px"}} />);
  },

  renderPoints: function(){
    var points = this.props.points;
    return points.slice(Math.max(points.length - this.props.limit, 1)).map(this.renderPoint);
  },

  render: function(){
    return(
      <div className="graph" style={{width: this.props.height + "px", height: this.props.width + "px"}}>
        {this.renderPoints()}
      </div>
    );
  }
});


