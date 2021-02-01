import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
require('dotenv').config();

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
