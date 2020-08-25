import React, { useState, useEffect } from 'react';

// Axios Instance
import axios from '../../axios-employees';

// Components 
import EmployeesRecordComponent from './EmployeesRecords-component';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

// Title Cells data
import { titleCells } from '../../titleCells';


const EmployeesRecordContainer = (props) => {

	// Employees Records 
	const [records, setRecords] = useState([]);

	// current page
	const [page, setPage] = useState(0);

	// rows per page
	const [pageSize, setPageSize] = useState(10);

	// Rows Count 
	const [rowsCount, setRowsCount] = useState(0);

	// Error State 
	const [error, setError] = useState(false);

	// Get and set employees rows count 
	const getData = async () => {
		try {
			const count = await axios.get('/countEmployees');
			if (count.data?.count) {
				setRowsCount(count.data.count);
			}

			// Get and set employees Data 
			const results = await axios.get(`/allEmployees/${page}/${pageSize}`);
			if (results.data?.employees) {
				setRecords(results.data.employees);
			}
		} catch (error) {
			setError(true);
		};
	};

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, pageSize]);


	const changePageHandler = (e, newPage) => {
		setPage(newPage);
	}

	const changePageSizeHandler = (event) => {
		setPageSize(+event.target.value);
		setPage(0);
	};

	// Add additional ids for title cells used in Employees Row Component
	const tCellsModified = [...titleCells, { id: 'edit', label: '' }, { id: 'delete', label: '' }]

	// Delete Employee when delete icon is clicked 
	const deleteEmployee = async (employeeId) => {
		try {
			const deleted = await axios.delete(`/employee/${employeeId}`);
			if (deleted.status === 200) {
				// Update employee records after delete
				getData();
			}
		} catch (error) {
			setError(true);
		};
	}

	// Get Records on Search
	const onSearch = async (event) => {
		let value = '';
		if (event.target.value) {
			value = event.target.value;
			try {
				const results = await axios.get(`/searchEmployees/${value}`);
				if (results.data?.results) {
					setRecords(results.data.results);
				}
			} catch (error) {
				setError(true);
			};
		}else {
			// if Search is empty get data again
			getData();
		}
	}

	if (!error) {
		return (
			<EmployeesRecordComponent
				records={records}
				titleCells={tCellsModified}
				changePageSizeHandler={changePageSizeHandler}
				changePageHandler={changePageHandler}
				pageSize={pageSize}
				page={page}
				count={rowsCount}
				deleteEmployee={deleteEmployee}
				onSearch={onSearch}
			/>
		);
	} else {
		return (
			<ErrorComponent />
		)
	}

}

export default EmployeesRecordContainer;