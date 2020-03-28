import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CONST_MINUTES, CONST_XAXISDAILYDATES } from "../shared/Constants.js";

class FundProcessingPerformance extends Component {
    render() {
        const options = {
            title: {
                text: "Funds Processing Performance"
            },
            subtitle: {
                text: 'Plain'
            },
            yAxis: {
                title: {
                    text: 'Processing Time (minutes)'
                }
            },
            tooltip: {
                headerFormat: '<b>Minutes</b><br>',
                pointFormat: '{point.y}',
                shared: true,
            },
            xAxis: {
                title: 'Dates',
                categories: CONST_XAXISDAILYDATES
            },
            series: [{
                type: 'column',
                data: CONST_MINUTES,
                showInLegend: false
            }]
        };
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }
}

export default FundProcessingPerformance;