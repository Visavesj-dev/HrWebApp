import React from 'react';
import { shallow } from 'enzyme';
import Document from './document'
describe('<Document />', () => {
  test('renders', () => {
    const wrapper = shallow(<Document />);
    expect(wrapper).toMatchSnapshot();
  });
});
