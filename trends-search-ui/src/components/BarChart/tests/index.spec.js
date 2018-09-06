import React from 'react';
import { shallow } from 'enzyme';

import BarChart from '../index';

describe('<BarChart />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<BarChart />);
  });

  it('should be defined', () => {
    expect(renderedComponent).toBeDefined();
  });
});
