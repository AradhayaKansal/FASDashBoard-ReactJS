import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class FundTypes extends Component {
  componentDidMount() {
  }

  render() {
    const options = {
      yAxis: {
        title: {
          text: 'Number of Funds'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
      series: [{
        name: 'Regular',
        data: [500, 100, 150, 50, 100, 100, 150, 50, 100, 76]
      }, {
        name: 'Capital Call',
        data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 76]
      }, {
        name: 'Umbrella',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 10, 5]
      }, {
        name: 'Modal',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    };
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default FundTypes;