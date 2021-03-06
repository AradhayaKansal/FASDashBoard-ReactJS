import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import '../styles/Layout.css';

export default props => (
  <div>
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </div>
);
