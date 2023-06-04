import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Articles from './components/Articles.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import PostDetail from './components/postDetails.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path='/about' element={<About />} />
        <Route path='/postDetail' element={<PostDetail/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
