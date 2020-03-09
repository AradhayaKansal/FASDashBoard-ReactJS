import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getFundsInfo } from "../store/GetFundsInfo";

class FASFunds extends Component {
    componentDidMount() {
    }

    render() {
        const options = {
            chart: {
              type: "pie"
            },
            title: {
              text: "Funds"
            },
            series: [
              {
                data: getFundsInfo()
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