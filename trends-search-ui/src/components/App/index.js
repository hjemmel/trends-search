import React from 'react';
import Header from '../../components/Header';
import Home from '../../containers/Home';
import './App.css';

const App = () => (
  <div className='wrapper'>
    <Header className='header' />
    <Home />
  </div>
);

export default App;
