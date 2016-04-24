var React = require('react');
var LineChart = require("react-chartjs").Line;
module.exports = React.createClass({
  displayName: 'Output',
  prepare_points: function(){
    var xs = [];
    var ys = [];
    var labels = [];
    this.props.points.forEach(function(p,i){
      xs.push(p.x);
      ys.push(p.y);
      labels.push(i + "");
    });
    return {
      labels: labels,
      datasets: [
        {
          label: "X coordinate",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: xs
        },
        {
          label: "Y coordinate",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: ys
        }
      ]
    }
  },
  render: function(){
    return(
      <div className="output">
        <p>x: {this.props.x}</p>
        <p>y: {this.props.y}</p>
        <p>count: {this.props.points.length}</p>
        <LineChart data={this.prepare_points()} width="300" height="250"/>
      </div>
    );
  }
});


