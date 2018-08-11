import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import { setFlagsFromString } from 'v8';

let years = [];
let months = [];
let bill = [];
let kwh = [];
let savings = [];

const linepoints (fst,second) => {
  labels: fst;
  datasets: [
    {
      label: 'Months (X-Axis) vs bills (Y-Axis)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: second
    }
  ]
};

const bar_points (fst,scnd) => {
  labels: fst; 
  datasets: [
    {
      label: 'Months(X-Axis) vs Savings(Y-Axis)',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: scnd
    }
  ]
};






class GraphingToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1 id="LineBarToggle">Line/Bar Graph Toggle</h1>
        <button id = "linebarbutton" onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Bar Graph' : 'Line Graph'}
        </button>
        {this.state.visibility && (
          <div>
          <Line data={linepoints} />
          </div>
        )}
        {!this.state.visibility && (
          <div>
          <HorizontalBar  data={bar_points}/>
          </div>
        )}
      </div>
    );
  }
}

export default GraphingToggle;
