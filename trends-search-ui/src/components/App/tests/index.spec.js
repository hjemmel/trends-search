import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../components/Header';
import Home from '../../../containers/Home';
import App from '../index';

describe('<App />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Header />);
  });

  it('should be defined', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render the header', () => {
    renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toBe(1);
  });

  it('should render the home', () => {
    renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Home).length).toBe(1);
  });
});
