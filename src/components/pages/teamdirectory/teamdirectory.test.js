import React from 'react';
import { shallow } from 'enzyme';
import Teamdirectory from './teamdirectory';

describe('<Teamdirectory />', () => {
  test('renders', () => {
    const wrapper = shallow(<Teamdirectory />);
    expect(wrapper).toMatchSnapshot();
  });
});
