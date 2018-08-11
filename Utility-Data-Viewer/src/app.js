import React from 'react';
import ReactDOM from 'react-dom'; 
import Header from './components/Header.js';
import data from '../public/utilData.json';
import {HorizontalBar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Polar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';


let years = [];
let months = [];
let bill = [];
let kwh = [];
let savings = [];

const linepoints = {
  labels: months,
  datasets: [
    {
      label: 'Months (X-Axis) vs Bills (Y-Axis)',
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
      data: bill
    }
  ]
};
const piedata = {
	labels: months,
	datasets: [{
		data: kwh,
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const polardata = {
  datasets: [{
    data: bill,
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'months vs kwh' // for legend
  }],
  labels: months
};



const bar_points = {
  labels: savings, 
  datasets: [
    {
      label: 'Months(X-Axis) vs Savings(Y-Axis)',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: months
    }
  ]
};




let keycounter=0;
console.log(data);
class Extractdata extends React.Component {
  render() {
    return (
        <div>
        <h3> Data Inputted </h3>
        <ul>
          {
            data.map((dat) => {
              {years.push(dat.year)};
              {bill.push(dat.bill)};
              {months.push(dat.month)};
              {kwh.push(dat.kwh)};
              {savings.push(dat.savings)};
              return <li key={keycounter++}>{dat.year} -{dat.month} - {dat.kwh} - {dat.bill} - {dat.savings}</li>;
            })
        }
        </ul>
        </div>
    );
  }
}

class GraphingToggle2 extends React.Component {
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
        <h1 id="LineBarToggle">Scatter/Bubble Graph Toggle</h1>
        <button id = "linebarbutton" onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Mixed Graph' : 'Polar Graph'}
        </button>
        {this.state.visibility && (
          <div>
          <Pie data={piedata} />
          </div>
        )}
        {!this.state.visibility && (
          <div>
          <Polar data={polardata} />
          </div>
        )}
      </div>
    );
  }
}

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



class RunProgram extends React.Component {
    render(){
        return(
          <div>
          <div id="MainBody">
          <Header subtitle={"Community Solar - Solar for Everyone"} />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <Extractdata />
          <GraphingToggle />
          <GraphingToggle2 />
          </div>
          </div>
        )
        }
      }


ReactDOM.render(<RunProgram />, document.getElementById('app'));


