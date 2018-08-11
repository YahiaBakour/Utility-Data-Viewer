import React from 'react';
import data from '.../public/utilData.json';
import {Polar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';

let years = [];
let months = [];
let bill = [];
let kwh = [];
let savings = [];


const polardata = {
  datasets: [{
    data: kwh,
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

data.map((dat) => {
    {years.push(dat.year)};
    {bill.push(dat.bill)};
    {months.push(dat.month)};
    {kwh.push(dat.kwh)};
    {savings.push(dat.savings)};
})
export default GraphingToggle2;
