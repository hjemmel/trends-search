import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../index';

describe('<Header />', () => {
  it('should render properly', () => {
    const renderedComponent = shallow(<Header />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render with className', () => {
    const renderedComponent = shallow(<Header className='morty' />);
    expect(renderedComponent.props().className).toBe('morty');
    renderedComponent.setProps({ className: 'rick' });
    expect(renderedComponent.props().className).toBe('rick');
  });

  it('should render the header', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains('Trends Analyzer')).toBeTruthy();
  });
});
