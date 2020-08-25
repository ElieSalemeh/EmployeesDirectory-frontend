import React from 'react';

import { shallow, mount } from 'enzyme';

// Components 
import App from './App';
import EmployeesRecordsContainer from './containers/EmployeesRecords/EmployeesRecords-container';


// Test App as a shallow wrapper 
describe('Shallow <App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render without error ', () => {
    expect(wrapper).toHaveLength(1);
  });
});


// Test App as a Mount wrapper -- in depth 
describe('Mount <App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should EmployeesRecordsContainer ', () => {
    expect(wrapper.find(EmployeesRecordsContainer)).toHaveLength(1);
  });

});