// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Games from './components/games';

function App() {
  return (
    <div className='App'>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu  />} />
      <Route path="/games" element={<Games />} />
    </Routes>
    </div>
  );
};

export default App;
