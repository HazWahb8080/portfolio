import React from 'react';
import Header from './../Header/Header';
import WorksSection from './../Works/WorksSection';
import { useState } from 'react';


function HomePage() {

  return (
    <div data-scroll-section className="homepage  pb-36">
      <Header/>
      {/* Hero */}
      <div data-scroll data-scroll-speed="0.5" className="home-container  pt-24">
        <div data-scroll data-scroll-speed="1"  className='hometext-container'>
        <a 
          data-scroll data-scroll-speed="2" className=' text-[#141414] only text-5xl xl:text-8xl font-Marc'>
          I am Hazem W. a 22 Junior Passionate Front-end Developer Based in Egypt.
        </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;