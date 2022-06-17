import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navigation from "./component/nav/Navigation";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
       
        <Home />
      </div>
    </Router>
  );
}

export default App;
