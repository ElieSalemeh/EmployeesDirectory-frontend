import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import EmployeesProfileComponent from './EmployeesProfile-component';

const EmployeesProfileContainer = (props) => {
    const { id } = useParams();

    // Local Employee Data
    const [employeeData, setEmployeeData] = useState();

    //Get Employee by id 
    useEffect(() => {
        if (id) {
            setEmployeeData({
                _id: '1', firstName: 'John', lastName: 'smith',
                phoneNumber: '0982222', department: 'Engineering',
                jobTitle: 'Backend Engineer', address: 'jounieh'
            });
        }
    }, [id]);

    const onDataChange = (key, value) => {
        const currentEmployee = employeeData;
        setEmployeeData({ ...currentEmployee, [key]: value });
    }

    //Create or Edit Employee
    const onSave = () => {
        // TODO: Call Edit or Save apis
    }

    return (
        <EmployeesProfileComponent
            employeeData={employeeData}
            onDataChange={onDataChange}
            onSubmit={onSave} />
    );

};

export default EmployeesProfileContainer;
