import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import EmployeesProfileComponent from './EmployeesProfile-component';

// Axios Instance
import axios from '../../axios-employees';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const EmployeesProfileContainer = (props) => {
  const { id } = useParams();

  // Local Employee Data
  const [employeeData, setEmployeeData] = useState();

  // Error State 
  const [error, setError] = useState(false);


  useEffect(() => {
    if (id) {
      //Get Employee by id 
      const getEmployeeData = async () => {
        try {
          const results = await axios.get(`/employeeById/${id}`);
          if (results.data?.employee) {
            setEmployeeData(results.data.employee);
          }
        } catch (error) {
          setError(true);
        };
      };
      getEmployeeData();
    }
  }, [id]);

  const onDataChange = (key, value) => {
    const currentEmployee = employeeData;
    setEmployeeData({ ...currentEmployee, [key]: value });
  }

  //Create Employee Function
  const addEmployee = async(employeeData) => {
    try {
      const result = await axios.post(`/employee`, employeeData);
      console.log(result);
    } catch (error) {
      setError(true);
    };
  }

  // Edit Employee Function 
  const editEmployee = async(employeeData) => {
    const employeeId = id;
    const employeeObj = employeeData;
    const body = {employeeId, employeeObj};
    try {
      const result = await axios.put(`/employee`, body);
      console.log(result);
    } catch (error) {
      setError(true);
    };
  }


  // Call Add or Edit Employee if id exists
  const onSave = () => {
    id ? editEmployee(employeeData) :addEmployee(employeeData);
  }


  if (!error) {
    return (
      <EmployeesProfileComponent
        employeeData={employeeData}
        onDataChange={onDataChange}
        onSubmit={onSave} />
    );
  } else {
    return (
      <ErrorComponent />
    );
  }


};

export default EmployeesProfileContainer;
