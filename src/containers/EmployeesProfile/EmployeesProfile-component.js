import React, { useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// Material UI Components
import { Grid, Paper, TextField, Container, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const EmployeesProfileComponent = (props) => {
  const { employeeData, onDataChange, onSubmit } = props;
  const classes = useStyles();
  const history = useHistory();

  // Error Alert on submission
  const [emptyAlert, setEmptyAlert] = useState(false);

  // Temporary Cells Data
  const [titleCells] = useState([
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'phoneNumber', label: 'Phone Number', type: 'number' },
    { id: 'jobTitle', label: 'Job Title' },
    { id: 'department', label: 'Department' },
    { id: 'address', label: 'Address' },
  ]);

  // Get Values of the key properties 
  const getKeyValue = (id) => {
    return `${((employeeData && !!id) ? employeeData[id] : '') || ''}`
  }


  const onValueChange = (event, id, inputType) => {
    const regex = (inputType === 'number') ? /[^0-9]/g : '';
    let value = `${event.target.value}`.replace(regex, '');

    if (inputType === 'number') value = +value;

    onDataChange(id, value);
  }

  // Check Empty Fields 
  const inputsNotEmpty = () => {
    return !titleCells.map(({ id }) => !!getKeyValue(id)).includes(false);
  }

  const onSaveClicked = () => {
    if (inputsNotEmpty()) { 
      onSubmit();
      history.goBack();
    } else {
      setEmptyAlert(true)
      setTimeout(() => {
        setEmptyAlert(false);
      }, 1000);
    };
  }

  const renderFormFields = () => {
    return titleCells.map(({ id, label, type }) => {
      const value = getKeyValue(id);

      return (
        <TextField
          id={id}
          key={id}
          required
          fullWidth
          label={label}
          value={value}
          variant="filled"
          className={classes.textField}
          onChange={event => onValueChange(event, id, type)}
        />
      )
    });
  };

  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={12} md={6}>
          <Paper>
            <form noValidate autoComplete="off" className={classes.root}>
              {renderFormFields()}
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.buttons}>
            <Container maxWidth="xs" className={classes.btnContainer}>
              <Button variant="contained" color="primary" className={classes.btn} onClick={onSaveClicked}>
                Save Employee
                </Button>
              <NavLink to="/employees" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary" className={classes.btn}>Cancel</Button>
              </NavLink>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar open={emptyAlert}>
        <Alert severity="error">
          Please Fill Out All Fields!
        </Alert>
      </Snackbar>
    </>
  );

};

export default EmployeesProfileComponent;
