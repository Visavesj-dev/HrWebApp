import React from 'react';
import { shallow } from 'enzyme';
import Organization_chart from './organization_chart';

describe('<Organization_chart />', () => {
  test('renders', () => {
    const wrapper = shallow(<Organization_chart />);
    expect(wrapper).toMatchSnapshot();
  });
});
