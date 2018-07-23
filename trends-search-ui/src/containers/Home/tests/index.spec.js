import React from 'react';
import { shallow } from 'enzyme';
import BarChart from '../../../components/BarChart';
import Home from '../index';

describe('<Home />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Home />);
  });

  it('should be defined', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render the header', () => {
    expect(renderedComponent.find(BarChart)).toBeTruthy();
  });
});
