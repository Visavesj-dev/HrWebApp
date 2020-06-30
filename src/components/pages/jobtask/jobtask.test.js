import React from 'react';
import { shallow } from 'enzyme';
import Jobtask from './jobtask';

describe('<Jobtask />', () => {
  test('renders', () => {
    const wrapper = shallow(<Jobtask />);
    expect(wrapper).toMatchSnapshot();
  });
});
