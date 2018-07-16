import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../index';

describe('<Home />', () => {
  it('should render properly', () => {
    const renderedComponent = shallow(<Home />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render the header', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent.contains('hans')).toBeTruthy();
  });
});
