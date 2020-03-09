import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getClientsInfo } from "../store/GetClientsInfo";
import ClientsDetils from "./ClientsDetils";

class FASClients extends Component {
    componentDidMount() {
    }

    render() {

        function ShowClientsDetails(x) {
            alert(x),
            <ClientsDetils><h1></h1></ClientsDetils>;
        }

        const options = {
            chart: {
                type: "pie"
            },
            title: {
                text: "Clients"
            },
            plotOptions: {
                pie: {
                    point: {
                        events: {
                            click: function () {
                                ShowClientsDetails(this.name)
                            }
                        }
                    }
                }
            },
            series: [
                {
                    data: getClientsInfo()
                }
            ]
        };
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div >
        );
    }

}

export default FASClients;