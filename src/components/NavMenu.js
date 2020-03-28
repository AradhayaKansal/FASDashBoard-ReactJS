import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import '../styles/NavMenu.css';

export default class MenuExampleStackable extends Component {
  state = {}
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='mini' color='007acc' inverted>
        <Menu.Item >
          <img alt='' src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item
          name='dashboard'
          header
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
          as={Link}
          to="/FASDashboard">
          FAS Statistics
        </Menu.Item>
      </Menu>
    )
  }
}