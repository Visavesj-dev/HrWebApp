import React from 'react';
import { shallow } from 'enzyme';
import AddEmployee from './AddEmployee';

describe('<AddEmployee />', () => {
  test('renders', () => {
    const wrapper = shallow(<AddEmployee />);
    expect(wrapper).toMatchSnapshot();
  });
});
