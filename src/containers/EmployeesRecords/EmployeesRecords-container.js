import React, { useState, useEffect } from 'react';

import EmployeesRecordComponent from './EmployeesRecords-component';


const EmployeesRecordContainer = (props) => {
	const [titleCells] = useState([
		{ id: 'firstName', label: 'First Name' },
		{ id: 'lastName', label: 'Last Name' },
		{ id: 'phoneNumber', label: 'Phone Number' },
		{ id: 'jobTitle', label: 'Job Title' },
		{ id: 'department', label: 'Department' },
		{ id: 'address', label: 'Address' },
		{ id: '', label: '' }
	]);
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const temporaryData = [
			{ _id: '1', firstName: 'John', lastName: 'smith', phoneNumber: '0982222', department: 'Engineering', jobTitle: 'Backend Engineer', address: 'jounieh' },
			{ _id: '2', firstName: 'Julia', lastName: 'smith', phoneNumber: '0982222', department: 'Engineering', jobTitle: 'Backend Engineer', address: 'jounieh' },
		];

		setRecords(temporaryData);
	}, []);


	// current page
	const [page, setPage] = useState(0);

	// rows per page
	const [pageSize, setPageSize] = useState(10);

	 const changePageHandler = (e, newPage) => {
		setPage(newPage);
	}

	const changePageSizeHandler = (event) => {
		setPageSize(+event.target.value);
		setPage(0);
	};

	const recCount = records.length;

	return (
		<EmployeesRecordComponent
			records={records}
			titleCells={titleCells}
			changePageSizeHandler={changePageSizeHandler}
			changePageHandler={changePageHandler}
			pageSize={pageSize}
			page={page}
			count = {recCount}
		/>
	);
}

export default EmployeesRecordContainer;