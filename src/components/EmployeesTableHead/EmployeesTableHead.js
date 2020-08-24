import React from 'react';

//  Material UI Components
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const EmployeesTableHead = (props) => {
  const {titleCells} = props;

  return (
    <TableHead>
      <TableRow>
        {titleCells.map(titleCell => (
          <TableCell key={titleCell.id} style={{fontWeight: 'bold'}}>{titleCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default EmployeesTableHead;