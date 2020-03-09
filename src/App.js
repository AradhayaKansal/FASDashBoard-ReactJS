import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import FASDashboard from './components/FASDashboard';

export default () => (
  <Layout>
    <Route path='/FASDashboard' component={FASDashboard} />
  </Layout>
);
