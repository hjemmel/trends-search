import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('<Header />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Header />);
  });

  it('should be defined', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render with className', () => {
    renderedComponent = shallow(<Header className='morty' />);
    expect(renderedComponent.props().className).toBe('morty');
    renderedComponent.setProps({ className: 'rick' });
    expect(renderedComponent.props().className).toBe('rick');
  });

  it('should render the header', () => {
    renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains('Trends Analyzer')).toBeTruthy();
  });
});
