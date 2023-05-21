import React from 'react';
import '../style.css';
import bgImg from '../bgImgsvg.svg';
import Image from '../Image.jpg';

function Home() {
  return (
    <section className='Home'>
  <div className='hero container relative mx-auto my-0 min-h-full max-w-4xl md:px-5 mb-4'>
    {/*<img className="bgImg" src={bgImg} alt="Background-Img" />*/}
    <div className=''>
      <h1 className="text-white pt-10 text-8xl text-left font-bold leading-tight tracking-tight">
        Personal Blog
      </h1>
      <p className="font-normal text-xl font-[SF Mono] text-white leading-[1.7] h-auto">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
    </div>
    <div className='mt-8'>
      <img className='hero-image' src={Image} alt='Hero Image' />
    </div>
  </div>
  <div className='Space-div'></div>
</section>

  );
}

export default Home;
