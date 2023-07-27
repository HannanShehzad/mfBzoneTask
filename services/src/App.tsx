import React from "react";
import "./App.css";
import Services from "./pages/Services";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
        </Routes>
      </Router>

      {/* <button> <Link to="/contact">contact</Link></button> */}
    </div>
  );
}

export default App;
