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

	useEffect(() => {
		const getData = async () => {
			// Get and set employees rows count 
			try {
				const count = await axios.get('/countEmployees');
				setRowsCount(count.data.count);

				// Get and set employees Data 
				const results = await axios.get(`/allEmployees/${page}/${pageSize}`);
				if (results.data?.employees) {
					setRecords(results.data.employees);
				}
			} catch (error) {
				setError(true);
			};

		};

		getData();
	}, [page, pageSize]);


	const changePageHandler = (e, newPage) => {
		setPage(newPage);
	}

	const changePageSizeHandler = (event) => {
		setPageSize(+event.target.value);
		setPage(0);
	};

	// Add additional ids for title cells used in Employees Row Comp
	const tCellsModified = [...titleCells, {id: '', label: ''}]


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
			/>
		);
	} else {
		return (
			<ErrorComponent />
		)
	}

}

export default EmployeesRecordContainer;