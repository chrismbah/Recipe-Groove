import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Category />
        <Pages />
      </Router>
    </div>
  );
}
