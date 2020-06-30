import React from 'react';
import { shallow } from 'enzyme';
import ViewTeamDirectory from './viewTeamDirectory';

describe('<ViewTeamDirectory />', () => {
  test('renders', () => {
    const wrapper = shallow(<ViewTeamDirectory />);
    expect(wrapper).toMatchSnapshot();
  });
});
