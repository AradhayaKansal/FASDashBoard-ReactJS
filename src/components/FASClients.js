import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getClientsInfo } from "../store/GetClientsInfo";
import { CONST_CLIENTS_COLORS } from "../shared/Constants";

class FASClients extends Component {
    render() {
        const options = {
            colors: CONST_CLIENTS_COLORS,
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
                }
            },
            series: [
                {
                    name: 'Count',
                    colorByPoint: true,
                    data: getClientsInfo(),
                    showInLegend: true
                }]
        };
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div >
        );
    }
}

export default FASClients;