import React from 'react';
import { shallow } from 'enzyme';
import ViewCertificate from './viewCertificate';

describe('<ViewCertificate />', () => {
  test('renders', () => {
    const wrapper = shallow(<ViewCertificate />);
    expect(wrapper).toMatchSnapshot();
  });
});
