import * as React from "react";

import "./App.css";

import { Route, Router, Routes } from "react-router";
import Main from "./pages/Main";
import CurrentApps from "./pages/CurrentApps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apps" element={<CurrentApps />} />
      </Routes>
    </Router>
  );
}

export default App;
