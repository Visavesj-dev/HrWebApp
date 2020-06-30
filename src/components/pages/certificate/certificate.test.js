import React from 'react';
import { shallow } from 'enzyme';
import Certificate from './certificate';

describe('<Certificate />', () => {
  test('renders', () => {
    const wrapper = shallow(<Certificate />);
    expect(wrapper).toMatchSnapshot();
  });
});
