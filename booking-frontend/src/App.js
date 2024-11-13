// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Facilities from './pages/Facilities';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route, e.g., redirect to login or dashboard */}
        <Route path="/" element={<Dashboard />} /> {/* You can choose Login or another page */}
        
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </Router>
  );
}

export default App;
