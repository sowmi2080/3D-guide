import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercise from './components/Exercise';
import Calculator from './components/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}

export default App;
