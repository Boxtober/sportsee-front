import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Activity from "./pages/activity/Activity.jsx";
import AverageSessions from "./pages/averageSession/AverageSession.jsx";
import Performance from "./pages/performance/Performance.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="user/:id" element={<Home />} />
        </Route>

        <Route path="/user/:id/activity" element={<Activity />} />
        <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
        <Route path="/user/:id/performance" element={<Performance />} />
      </Routes>
    </Router>
  );
}

export default App;

