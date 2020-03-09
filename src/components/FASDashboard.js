import React, { Component } from 'react';
import '../styles/FASDashboard.css';
import FASClients from "./FASClients";
import FASFunds from "./FASFunds";
import FASYearWiseFunds from './FASYearWiseFunds';

class FASDashboard extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div class="">
        <div class="row">
          <div class="col-sm-6">
            <FASClients></FASClients>
          </div>
          <div class="col-sm-6">
            <FASFunds></FASFunds>
          </div>
        </div>
        <div class="row top-buffer">
          <div class="col">
            <FASYearWiseFunds></FASYearWiseFunds>
          </div>
        </div>
      </div>
    );
  }
}

export default FASDashboard;