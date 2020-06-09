import React from 'react';
import { shallow } from 'enzyme';
import EmployeeProfile from './EmployeeProfile';

describe('<EmployeeProfile />', () => {
  test('renders', () => {
    const wrapper = shallow(<EmployeeProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
