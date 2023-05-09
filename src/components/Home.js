import React from 'react';
import '../style.css';

function Home() {
  return (
    <section className='Home'>
      <div className='hero'>
        <h1 className='hero-title'>Welcome to My Website</h1>
        <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img className='hero-image' src='your-image-url.jpg' alt='Hero Image' />
      </div>
    </section>
  );
}

export default Home;
