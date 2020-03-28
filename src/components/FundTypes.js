import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getFundsTypesInfo } from "../store/GetFundTypes";

class FundTypes extends Component {
  componentDidMount() {
  }

  render() {
    const options = {
      colors: ['green',/*Active */'#ff3b3b',/*Closed */'#ff8c3b' /*Non Live*/, '#804682'],
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: "Clients"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          point: {
            events: {
              click: function () {
              }
            }
          }
        }
      },
      series: [
        {
          name: 'Count',
          colorByPoint: true,
          data: getFundsTypesInfo(),
          showInLegend: true
        }
      ]
    };
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default FundTypes;