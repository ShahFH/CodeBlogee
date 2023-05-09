import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/Home.js';
import Articles from './components/articles.js';
import Footer from './components/footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
