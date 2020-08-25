import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// Material UI Components
import { Toolbar, Typography, Button, TextField } from '@material-ui/core';


const EmployeesToolbar = (props) => {
  const classes = useStyles();
  const { searchInput } = props;

  const renderInitialTooltip = () => {
    return (
      <>
        <Typography variant="h6" id="tableTitle">
          Employees Records
        </Typography>
        <div>
          <TextField
            variant="outlined"
            label="Search"
            size="small"
            onChange={(event => searchInput(event))}
          />
        </div>
        <div>
          <NavLink to={`/employees/profile`} className={classes.noSelection}>
            <Button variant="outlined" color="primary" >
              + Add Employee
          </Button>
          </NavLink>
        </div>
      </>
    );

  }

  return (
    <Toolbar className={classes.toolbar}>
      {renderInitialTooltip()}
    </Toolbar>
  );
}

export default EmployeesToolbar;