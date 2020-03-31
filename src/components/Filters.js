import React, { Component } from 'react';
import { Grid, Dropdown } from 'semantic-ui-react'

import { getClients } from "../store/Clients";
import { getFunds } from "../store/Funds";
import { CONST_RANGE } from "../shared/Constants.js";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientData: getClients(),
            fundsData: getFunds(),
            filteredFundsData: null,
        };
    }

    componentWillMount() {
        if (this.state.filteredFundsData === null)
            this.setState({ filteredFundsData: this.state.fundsData });
    }

    handleDropdownChange = (e, data) => {
        e.persist();
        this.setState({ filteredFundsData: null });
        this.setState({
            filteredFundsData: this.state.fundsData.filter(function (fData, value) {
                return fData.key === data.value;
            })
        });
    };

    render() {

        var filteredFunds = this.state.filteredFundsData;

        return (
            <Grid>
                <Grid.Column className='six wide column'>
                    <Dropdown
                        placeholder='Select Client'
                        onSearchChange={this.handleDropdownChange}
                        onChange={this.handleDropdownChange}
                        fluid
                        search
                        selection
                        options={this.state.clientData}
                    />
                </Grid.Column>
                <Grid.Column className='six wide column'>
                    <Dropdown
                        placeholder='Select Funds'
                        fluid
                        search
                        selection
                        options={filteredFunds}
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