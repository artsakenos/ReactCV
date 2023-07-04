import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./content/Home";
import Publications from "./content/Publications";
import WorkActivities from "./content/WorkActivities";
import NavBar from "./NavBar";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/work-activities" element={<WorkActivities />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}
