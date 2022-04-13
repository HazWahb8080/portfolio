import React from 'react';
import Header from './../Header/Header';
import { useState } from 'react';
import Marqueex from './../Marquee/Marquee';


function HomePage() {

  return (
    <div data-scroll className="h-screen items-center 
    flex flex-col justify-between bg-white text-black overflow-hidden "> 
    
      <Header/>
      {/* Hero */}
      <div data-scroll data-scroll-speed="-12" className="h-full  w-full
      justify-between items-center flex flex-col flex-1 pt-24
      ">
        <div className='items-center px-12  justify-center flex w-full h-full'>
        <a 
           className=' text-black text-center  text-5xl xl:text-8xl font-Marc'>
          I am Hazem W. a 22 Junior Passionate Front-end Developer Based in Egypt.
        </a>
        </div>
      <Marqueex/>
      </div>
    </div>
  )
}

export default HomePage;