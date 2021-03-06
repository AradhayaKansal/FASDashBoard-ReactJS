import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getFundsInfo } from "../store/GetFundsInfo";
import { CONST_FUNDS_COLORS } from "../shared/Constants";

class FASFunds extends Component {
  render() {
    const options = {
      colors: CONST_FUNDS_COLORS,
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
          data: getFundsInfo(),
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

export default FASFunds;