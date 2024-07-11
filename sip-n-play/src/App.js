// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home_Page from './components/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_Page />} />
    </Routes>
  );
}



export default App;
