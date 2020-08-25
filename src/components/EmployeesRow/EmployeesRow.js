import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { useStyles } from './styles';

// Material UI Components
import { TableRow, TableCell, IconButton, Tooltip } from '@material-ui/core';

// Material UI Icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const EmployeesRow = (props) => {
  const { employeeRec, titleCells, onDelete } = props;
  const classes = useStyles();
  let icon = false;

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
  const renderDeleteIcon = (employeeRecId) => {
    return (
      <Tooltip key={`${employeeRecId}_delete`} title="Delete">
        <IconButton className={classes.editBtn} onClick={() => onDelete(employeeRecId)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    );
  }

  // Add title cells and return edit and delete at the end of the row 
  const returnField = (employeeRec, field) => {
    if (field.id === 'edit') {
      icon = true;
      return renderEditIcon(employeeRec._id)
    } else if (field.id === 'delete') {
      icon = true
      return renderDeleteIcon(employeeRec._id)
    } else {
      icon = false;
      return employeeRec[field.id]
    }
  }

  return (
    <TableRow className={classes.hover}>
      {titleCells.map((field) => (
        <TableCell key={`${employeeRec._id}_${field.id}`} align={icon ? "center" : "left"}>
          {returnField(employeeRec, field)}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default EmployeesRow;