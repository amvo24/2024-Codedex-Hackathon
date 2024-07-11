// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import homePage from './components/home';

function App() {
  return (
    <Routes>
      <Route path="/" component={<homePage />} />
    </Routes>
  );
}

export default App;