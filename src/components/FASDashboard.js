// Libaries
import React, { Component } from 'react';
import { Grid, Tab, Card, Segment, Label } from 'semantic-ui-react'

// Css
import '../styles/FASDashboard.css';

// Components
import Filters from './Filters';
import FASFunds from "./FASFunds";
import FundTypes from "./FundTypes";
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
                    <Grid>
                      <Grid.Row >
                        <Grid.Column className='eight wide'>
                          <Card.Group itemsPerRow={2}>
                            <Card >
                              <Segment>
                                <Label as='a' color='blue' ribbon='left'>No of funds</Label>
                                <FASFunds></FASFunds>
                              </Segment>
                            </Card>
                            <Card >
                              <Segment>
                                <Label as='a' color='blue' ribbon='left'>No of funds - Periods Wise</Label>
                                <FundsAccountingPeriodWise></FundsAccountingPeriodWise>
                              </Segment>
                            </Card>
                          </Card.Group>
                        </Grid.Column>
                        <Grid.Column className='eight wide'>
                          <Card.Group itemsPerRow={1}>
                            <Card >
                              <Segment>
                                <Label as='a' color='blue' ribbon='left'>No of Fund Types</Label>
                                <FundTypes></FundTypes>
                              </Segment>
                            </Card>
                          </Card.Group>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

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