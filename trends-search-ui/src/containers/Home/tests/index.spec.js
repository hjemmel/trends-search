import React from 'react';
import shallowWithStore from '../../redux-enzyme-swallow';
import BarChart from '../../../components/BarChart';
import Home from '../index';
import reducer from '../reducer';
import configureStore from 'redux-mock-store';

describe('<Home />', () => {
  let renderedComponent;
  let store;
  const initialState = {home: {
    loading: false,
    error: false,
    trends: []
  }};

  beforeEach(() => {
    const mockStore = configureStore();
    store = mockStore(initialState);

    renderedComponent = shallowWithStore(<Home />, store);
  });

  it('should be defined', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render the header', () => {
    expect(renderedComponent.find(BarChart)).toBeTruthy();
  });
});
