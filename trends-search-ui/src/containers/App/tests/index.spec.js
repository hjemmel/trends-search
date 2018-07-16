import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../../../components/Header';
import Home from '../../../containers/Home';
import App from '../index';

describe('<App />', () => {
  it('should render properly', () => {
    const renderedComponent = shallow(<App />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toBe(1);
  });

  it('should render the home', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Home).length).toBe(1);
  });
});
