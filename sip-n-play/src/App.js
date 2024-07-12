// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/casa';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  );
}

export default App;
