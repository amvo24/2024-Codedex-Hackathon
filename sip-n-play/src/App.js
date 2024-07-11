// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/casa';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<homePage />} /> */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
