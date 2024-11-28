import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About";
import TypingTest from "./components/TypingTest";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <AppWithFooterControl />
    </Router>
  );
}

function AppWithFooterControl() {
  const location = useLocation();
  
  // Check if the current path is "/start", if so, don't show the footer
  const showFooter = location.pathname !== '/start';

  return (
     
    <div>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<TypingTest/>} />
        <Route path="/about" element={<About />} />
      </Routes>

      {showFooter && <Footer />} {/* Footer will not be shown on "/start" */}
    </div>
  
  );
}

export default App;
