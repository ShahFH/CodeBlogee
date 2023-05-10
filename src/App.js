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
        <Route path="./components/articles.js" element={<Articles />} />
      </Routes>
      <Articles/>
      <Footer />
    </Router>
  );
}

export default App;
