import React from 'react';
import './App.css';
import Header from './Header';
require('dotenv').config();

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
