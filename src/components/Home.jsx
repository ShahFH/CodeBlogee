import React from 'react';
import '../style.css';
import bgImg from '../bgImgsvg.svg';
import Image from '../Image.jpg';

function Home() {
  return (
    <section className='Home'>
  <div className='hero container relative mx-auto my-0 min-h-full max-w-4xl md:px-5 mb-4 px-14'>
    {/*<img className="bgImg" src={bgImg} alt="Background-Img" />*/}

    <div className='px-4 mx-auto max-w-8xl lg:px-4 lg:text-center'>
      <h1 className="text-white mt-8 text-4xl font-bold lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-48 lg:mb-7">
        Welcome to CoBloge
      </h1>
      <p className=" text-white mt-10 mb-4 text-lg font-normal lg:text-center lg:text-xl xl:px-60">
      Join me on CoBloge,👋 where I share my personal experiences, insights, and adventures as a software developer.
      Let's embark on this journey together and elevate our skills in the ever-evolving realm of technology.
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
