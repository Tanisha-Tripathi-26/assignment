import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UsersManagement from "./components/UsersManagement";
import RolesManagement from "./components/RolesManagement";
import PermissionsManagement from "./components/PermissionsManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UsersManagement />} />
        <Route path="/roles" element={<RolesManagement />} />
        <Route path="/permissions" element={<PermissionsManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
