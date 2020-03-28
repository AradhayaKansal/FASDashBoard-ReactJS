import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { getFundsDetailInformation } from "../store/GetFundsDetailInformation";

class FundsInformation extends Component {
    state = {
        column: null,
        data: getFundsDetailInformation(),
        direction: null,
    }

    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Table sortable columns={5} celled selectable>
                <Table.Header>
                    <Table.Row>
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
                    {_.map(data, ({ noOfAccounts, noOfInvestors, main2FetchUpto, mainFetchUpto, rtaLastFetchDateTime, name }) => (
                        <Table.Row key={name}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{noOfAccounts}</Table.Cell>
                            <Table.Cell>{noOfInvestors}</Table.Cell>
                            <Table.Cell>{main2FetchUpto}</Table.Cell>
                            <Table.Cell>{mainFetchUpto}</Table.Cell>
                            <Table.Cell>{rtaLastFetchDateTime}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
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