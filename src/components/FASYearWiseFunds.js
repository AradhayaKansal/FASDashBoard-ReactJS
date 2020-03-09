import React, { Component } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getYearlyFundsInfo } from "../store/GetYearlyFundsInfo";

class FASYearWiseFunds extends Component {
  componentDidMount() {
  }
  render() {
    const options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Yearly Funds Progress (Stacked Chart)'
      },
      xAxis: {
        categories: ['2015', '2016', '2017', '2018', '2019', '2020']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Year Wise Funds Open/Close number'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: ( // theme
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color
            ) || 'green'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: getYearlyFundsInfo()
    }
    Highcharts.theme = {
      colors: ['#848488', '#f45b5b', '#3EA92F', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
        backgroundColor: null,
        style: {
          fontFamily: 'Signika, serif'
        }
      },
      title: {
        style: {
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
      subtitle: {
        style: {
          color: 'black'
        }
      },
      tooltip: {
        borderWidth: 0
      },
      labels: {
        style: {
          color: '#6e6e70'
        }
      },
      legend: {
        backgroundColor: '#E0E0E8',
        itemStyle: {
          fontWeight: 'bold',
          fontSize: '13px'
        }
      },
      xAxis: {
        labels: {
          style: {
            color: '#6e6e70'
          }
        }
      },
      yAxis: {
        labels: {
          style: {
            color: '#6e6e70'
          }
        }
      },
      plotOptions: {
        series: {
          shadow: true,
          cursor: 'pointer',

        },
        candlestick: {
          lineColor: '#404048'
        },
        map: {
          shadow: false
        }
      },
      // Highstock specific
      navigator: {
        xAxis: {
          gridLineColor: '#D0D0D8'
        }
      },
      rangeSelector: {
        buttonTheme: {
          fill: 'white',
          stroke: '#C0C0C8',
          'stroke-width': 1,
          states: {
            select: {
              fill: '#D0D0D8'
            }
          }
        }
      },
      scrollbar: {
        trackBorderColor: '#C0C0C8'
      }
    };
    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default FASYearWiseFunds;