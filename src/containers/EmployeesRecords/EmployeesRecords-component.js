import React from 'react';

// Material UI Components
import { Table, TableBody, Paper, TableContainer, TablePagination } from '@material-ui/core';

// Components
import EmployeesRow from '../../components/EmployeesRow/EmployeesRow';
import EmployeesTableHead from '../../components/EmployeesTableHead/EmployeesTableHead';
import EmployeesToolbar from '../../components/EmployeesToolbar/EmployeesToolbar';



const EmployeesRecordsComponent = (props) => {
  const { titleCells, records, count, page, pageSize,
    changePageHandler, changePageSizeHandler,
    deleteEmployee, onSearch } = props;


  const renderTableBody = () => {
    return (
      <TableBody>
        {records.map(employeeRec => (
          <EmployeesRow
            titleCells={titleCells}
            key={employeeRec._id}
            employeeRec={employeeRec}
            onDelete={deleteEmployee}
          />
        ))}
      </TableBody>
    );
  }

  const renderTablePagination = () => {
    return (
      <TablePagination
        component="div"
        count={count}
        rowsPerPage={pageSize}
        onChangePage={changePageHandler}
        onChangeRowsPerPage={changePageSizeHandler}
        rowsPerPageOptions={[10, 25, 50]}
        page={page}
      />
    );
  }

  return (
    <Paper>
      <EmployeesToolbar searchInput={onSearch} />
      <TableContainer>
        <Table>
          <EmployeesTableHead titleCells={titleCells} />
          {renderTableBody()}
        </Table>
      </TableContainer>
      {renderTablePagination()}
    </Paper>
  );

};

export default EmployeesRecordsComponent;