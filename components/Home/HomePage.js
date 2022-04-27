import React from 'react';
import Header from './../Header/Header';
import { useState, useRef,useEffect } from 'react';
import Marqueex from './../Marquee/Marquee';
import useHover from '@react-hook/hover';
import { shuffle } from "lodash";


const bgs = [
  "bg-giphy",
  "bg-giphy1",
  "bg-giphy2",
  "bg-giphy3",
  "bg-giphy4",
  "bg-giphy5",
  "bg-giphy6",
  "bg-giphy7",
  "bg-giphy8",
  "bg-giphy9",
  "bg-giphy10",
  "bg-giphy11",
  "bg-giphy12",
  "bg-giphy13",
];






function HomePage() {
  const options = {enterDelay: 100, leaveDelay: 100};
  const hoverRef = useRef();
  const isHovering  = useHover(hoverRef,options);
  const [bg,setBg] = useState();
  useEffect(()=>{
    setBg(shuffle(bgs).pop());
  },[isHovering]);



  return (
    <div data-scroll className={  `h-screen items-center flex flex-col justify-between   overflow-hidden
    ${isHovering ? `${bg} z-50 text-white opacity-80 bg-no-repeat bg-cover bg-center` :"bg-white text-black" }`} > 
      <Header
      ishovering={isHovering}
      />
      {/* Hero */}
      <div data-scroll data-scroll-speed="-12" className="h-full  w-full
      justify-between items-center flex flex-col flex-1 pt-24
      ">
        <div className='items-center px-12  justify-center flex w-full h-full'>
        <a ref={hoverRef}
           className='text-center  text-5xl xl:text-8xl font-Marc'>
          I am Hazem W. a 22 Passionate Front-end Developer Based in Egypt.
        </a>
        </div>
      <Marqueex
      ishovering={isHovering}
      />
      </div>
    </div>
  )
}

export default HomePage;