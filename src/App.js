// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/content" element={<MainContent />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
