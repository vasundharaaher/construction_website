// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
      //<Route path="/about" element={<About />} />
      //    <Route path="/contact" element={<Contact />} />

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
