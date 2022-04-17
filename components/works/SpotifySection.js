import React from 'react';
import WorksElement from "./WorksElement1";
import Spotify from './Slides/Spotify';


function SpotifySection() {

  return (

// //

    <div id="bossyX" data-scroll data-scroll-speed="0"  className="w-full h-[2500px] items-center justify-center flex py-12 
   bg-[#2941AB] my-12 xl:px-12 " >
        {/* words */}
        <div data-scroll  className="w-full h-full items-center justify-start flex flex-col">
          
            {/* 1st row */}
            <Spotify/>
            {/* 2nd row */}
            {/* 3rd row */}

        </div>
        {/* list */}
        {/* All Works Button */}

    </div>
  )
}

export default SpotifySection;