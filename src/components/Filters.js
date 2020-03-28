import React, { Component } from 'react';
import { Grid, Dropdown } from 'semantic-ui-react'

import { getClients } from "../store/Clients";
import { getFunds } from "../store/Funds";
import { CONST_RANGE } from "../shared/Constants.js";

class Filters extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column className='six wide column'>
                    <Dropdown
                        placeholder='Select Client'
                        fluid
                        search
                        selection
                        options={getClients()}
                    />
                </Grid.Column>
                <Grid.Column className='six wide column'>
                    <Dropdown
                        placeholder='Select Funds'
                        fluid
                        search
                        selection
                        options={getFunds()}
                    />
                </Grid.Column>
                <Grid.Column className='four wide column'>
                    <Dropdown
                        placeholder='Select Range'
                        fluid
                        search
                        selection
                        options={CONST_RANGE}
                    />
                </Grid.Column>
            </Grid>)
    }

}

export default Filters;