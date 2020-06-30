import React from 'react';
import { shallow } from 'enzyme';
import Document from './Document';

describe('<Document />', () => {
  test('renders', () => {
    const wrapper = shallow(<Document />);
    expect(wrapper).toMatchSnapshot();
  });
});
