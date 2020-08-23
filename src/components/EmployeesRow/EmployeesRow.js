import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// Material UI Components
import { TableRow, TableCell, IconButton, Tooltip } from '@material-ui/core';

// Material UI Icons
import EditIcon from '@material-ui/icons/Edit';

const EmployeesRow = (props) => {
  const { employeeRec, titleCells } = props;
  const classes = useStyles();

  const renderEditIcon = (employeeRecId) => {
    return (
      <NavLink to={`/employees/${employeeRecId}/profile`}>
        <Tooltip key={`${employeeRecId}_edit`} title="Edit">
          <IconButton className={classes.editBtn}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </NavLink>
    );
  }

  //TODO: Add Delete Icon 

  return (
    <TableRow className={classes.hover}>
      {titleCells.map((field) => (
        <TableCell key={`${employeeRec._id}_${field.id || 'edit'} `} align={field.id ? "left" : "center"}>
          {/* Add TitleCells and Edit Icon at the end of the row */}
          {field.id ? employeeRec[field.id] : renderEditIcon(employeeRec._id)}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default EmployeesRow;