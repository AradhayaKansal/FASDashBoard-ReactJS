// Libaries
import React, { Component } from 'react';
import { Grid, Tab, Card, Segment, Label, Header } from 'semantic-ui-react'

// Css
import '../styles/FASDashboard.css';

// Components
import Filters from './Filters';
import FASFunds from "./FASFunds";
import FundTypes from "./FundTypes";
import FASClients from "./FASClients";
import FundsInformation from './FundsInformation';
import FundLockingDelays from './FundLockingDelays';
import FundsAccountingPeriodWise from './FundsAccountingPeriodWise';
import FundProcessingPerformance from './FundProcessingPerformance';

// FAS Dashboard Class
class FASDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row >
          <Grid.Column className='wide'>
            <Filters></Filters>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column className='wide'>
            <Tab panes={[
              {
                menuItem: 'Population Stats',
                render: () =>
                  <Tab.Pane color='#e8e8e8'>
                    <Card.Group itemsPerRow={4}>
                      <Card >
                        <Segment>
                          <span>No of Clients</span>
                          <FASClients></FASClients>
                        </Segment>
                      </Card>
                      <Card >
                        <Segment>
                          <div>
                            <span>No of Funds</span>
                          </div>
                          <FASFunds></FASFunds>
                        </Segment>
                      </Card>
                      <Card>
                        <Segment>
                          <div>
                            <span>No of different types of Funds</span>
                          </div>
                          <FundTypes></FundTypes>
                        </Segment>
                      </Card>
                      <Card >
                        <Segment>
                          <div>
                            <span>No of funds based on different accounting periods</span>
                          </div>
                          <FundsAccountingPeriodWise></FundsAccountingPeriodWise>
                        </Segment>
                      </Card>
                    </Card.Group>
                    <Segment.Group raised>
                      <Segment>
                        <Label as='a' color='blue' ribbon='left'>Detail Information</Label>
                        <FundsInformation></FundsInformation>
                      </Segment>
                    </Segment.Group>
                  </Tab.Pane>,
              },
              {
                menuItem: 'Performance Stats',
                render: () =>
                  <Tab.Pane>
                    <Card.Group itemsPerRow={2}>
                      <Card >
                        <Segment.Group raised>
                          <Segment>
                            <Label as='a' color='blue' ribbon='left'>Crown Latigo - Processing Performance</Label>
                            <FundProcessingPerformance></FundProcessingPerformance>
                          </Segment>
                        </Segment.Group>
                      </Card>
                      <Card >
                        <Segment.Group raised>
                          <Segment>
                            <Label as='a' color='blue' ribbon='left'>Crown Latigo - Monthly Locking Delays</Label>
                            <FundLockingDelays></FundLockingDelays>
                          </Segment>
                        </Segment.Group>
                      </Card>
                    </Card.Group>
                  </Tab.Pane>
              },
            ]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FASDashboard;