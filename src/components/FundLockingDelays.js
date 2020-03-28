import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class FundLockingDelays extends Component {
    render() {
        const options = {
            colors: ['red'],
            legend: {
                enabled: 'true',
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: [
                    '1/31/2020',
                    '2/28/2020',
                    '3/31/2020',
                    '4/30/2020',
                    '5/31/2020',
                    '6/30/2020',
                    '7/29/2020'
                ],
                plotBands: [{
                    from: 4.5,
                    to: 6.5,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: {
                title: {
                    text: 'Delay (in days)'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' days'
            },
            credits: {
                enabled: true
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                },
            },
            series: [{
                name: 'Delay',
                data: [1, 3, 4, 3, 3, 5, 4],
                showInLegend: true,
            },

            ]
        };
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }
}

export default FundLockingDelays;