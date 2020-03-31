import _ from 'lodash';
import React, { Component } from 'react';
import { Table, Pagination } from 'semantic-ui-react'

import { getFundsDetailInformation } from "../store/GetFundsDetailInformation";
const itemsPerPage = 10;

class FundsInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            boundaryRange: 10,
            siblingRange: 5,
            totalPages: 0,
            column: null,
            data: getFundsDetailInformation(),
            filteredData: getFundsDetailInformation().slice(0, itemsPerPage),
            direction: null
        };
    }

    onChange = (e, pageInfo) => {
        if (!isNaN(pageInfo.activePage)) {
            this.setState({ activePage: Math.round(pageInfo.activePage) });
            const begin = (Math.round(pageInfo.activePage) - 1) * itemsPerPage;
            const end = begin + itemsPerPage;
            this.setState({ filteredData: this.state.data.slice(begin, end) });
        }
    };

    handleSort = (clickedColumn) => () => {
        const { column, filteredData, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                filteredData: _.sortBy(filteredData, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            filteredData: filteredData.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, direction } = this.state
        var rows = _.map(this.state.filteredData, ({ id, noOfAccounts, noOfInvestors, main2FetchUpto, mainFetchUpto, rtaLastFetchDateTime, name }) => (
            <Table.Row key={name}>
                <Table.Cell>{id}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{noOfAccounts}</Table.Cell>
                <Table.Cell>{noOfInvestors}</Table.Cell>
                <Table.Cell>{main2FetchUpto}</Table.Cell>
                <Table.Cell>{mainFetchUpto}</Table.Cell>
                <Table.Cell>{rtaLastFetchDateTime}</Table.Cell>
            </Table.Row>
        ));

        return (
            <Table sortable columns={5} compact collapsing celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell sorted={column === 'id' ? direction : null}
                            onClick={this.handleSort('id')}>FundID</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'name' ? direction : null}
                            onClick={this.handleSort('name')}>Fund</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'noOfAccounts' ? direction : null}
                            onClick={this.handleSort('noOfAccounts')}>No of Accounts</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'noOfInvestors' ? direction : null}
                            onClick={this.handleSort('noOfInvestors')}>No of Investors</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'main2FetchUpto' ? direction : null}
                            onClick={this.handleSort('main2FetchUpto')}>Main2 Fetch Upto</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'mainFetchUpto' ? direction : null}
                            onClick={this.handleSort('mainFetchUpto')}>Main Fetch Upto</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'rtaLastFetchDateTime' ? direction : null}
                            onClick={this.handleSort('rtaLastFetchDateTime')}>RTA Last Fetch DateTime</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {rows}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Pagination
                            activePage={this.state.currentPage}
                            boundaryRange={this.state.boundaryRange}
                            onPageChange={this.onChange}
                            siblingRange={this.state.siblingRange}
                            totalPages={this.state.data.length / itemsPerPage}
                        />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
}

export default FundsInformation;