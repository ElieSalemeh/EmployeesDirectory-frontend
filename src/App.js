import React from 'react';
import './App.css';

// Routing
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";

// UI Components
import { Typography, Container, Divider } from '@material-ui/core';

import EmployeesRecordsContainer from './containers/EmployeesRecords/EmployeesRecords-container';
import EmployeesProfileContainer from './containers/EmployeesProfile/EmployeesProfile-container';


function App() {
  return (
    <Container maxWidth="xl" className="Root-Container">
      <NavLink to={`/employees`} className="Nav-Link">
        <Typography variant="h3" className="Root-Title">
          Employees Directory
        </Typography>
      </NavLink>


      <div className="Header-divider">
        <Divider />
      </div>

      <Switch>
        <Route exact path="/employees">
          <EmployeesRecordsContainer />
        </Route>
        <Route exact path="/employees/profile">
          <EmployeesProfileContainer />
        </Route>
        <Route exact path="/employees/:id/profile">
          <EmployeesProfileContainer />
        </Route>
        <Route exact path="/">
          <Redirect to="/employees" />
        </Route>
        <Route path="*">
          <Redirect to="/employees" />
        </Route>
      </Switch>

    </Container>

  );
}

export default function () {
  return (
    <Router>
      <App />
    </Router>
  );
}
