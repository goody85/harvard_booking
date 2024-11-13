// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Facilities from "./pages/Facilities";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route, e.g., redirect to login or dashboard */}
        <Route path="/" element={<Dashboard />} />{" "}
        {/* You can choose Login or another page */}
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/facilities"
          element={
            <PrivateRoute>
              <Facilities />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
