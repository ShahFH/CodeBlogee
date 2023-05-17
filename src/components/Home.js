import React from 'react';
import '../style.css';
import bgImg from '../bgImgsvg.svg';
import Image from '../Image.jpg';

function Home() {
  return (
    <section className='Home'>
      <div className='hero container'>
      {/*<img className="bgImg" src={bgImg} alt="Background-Img" />*/}
        <div>
          <h1 className='hero-title'>Welcome to CodeBloge</h1>
          <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>  
        <div>  
        <img className='hero-image' src={Image} alt='Hero Image' />
        </div>
      </div>
      <div className='Space-div'></div>
    </section>
  );
}

export default Home;
