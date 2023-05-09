import React from 'react';
import '../style.css';
import bgImg from '../bgImgsvg.svg';
import Image from '../Image.jpg';

function Home() {
  return (
    <section className='Home'>
      <div className='hero'>
      <img className="bgImg" src={bgImg} alt="Background-Img" />
        <h1 className='hero-title'>CodeBloge</h1>
        <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img className='hero-image' src={Image} alt='Hero Image' />
      </div>
    </section>
  );
}

export default Home;
