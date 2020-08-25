import React from 'react';

import { shallow } from 'enzyme';

// Components 
import EmployeesRecordComponent from './EmployeesRecords-component';

// Setup Shallow Wrapper to get components 
const shallowSetup = (props = {}) => {
  return shallow(<EmployeesRecordComponent {...props} />)
}
// Props to be passed 
const titleCells = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'phoneNumber', label: 'Phone Number', type: 'number' },
  { id: 'jobTitle', label: 'Job Title' },
  { id: 'department', label: 'Department' },
  { id: 'address', label: 'Address' },
  { id: 'edit', label: '' },
  { id: 'delete', label: '' },
];
const records = [
  {
    _id: '1', firstName: 'John', lastName: 'smith',
    phoneNumber: '982222', department: 'Engineering',
    jobTitle: 'Backend Engineer', address: 'jounieh'
  }
];
const rowsCount = 1; const pageSize = 10; const page = 0;

describe('<EmployeesRecordComponent />', () => {
  it('should render when props are passed', () => {
    const wrapper = shallowSetup({
      titleCells: titleCells, records: records,
      count: rowsCount, page: page, pageSize: pageSize
    });
    expect(wrapper).toHaveLength(1);
  });
});
