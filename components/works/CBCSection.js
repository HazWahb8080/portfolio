import React from 'react';
import WorksElement from "./WorksElement1";
import CBC from './Slides/CBC';


function CBCSection() {

  return (

// //

    <div id="bossy" data-scroll data-scroll-speed="0"  className="w-full h-[2500px] items-center justify-center flex 
    bg-black my-12 xl:px-12 pt-12 " >
        {/* words */}
        <div data-scroll  className="w-full h-full items-center justify-start flex flex-col">
          
            {/* 1st row */}
            <CBC/>
            {/* 2nd row */}
            {/* 3rd row */}

        </div>
        {/* list */}
        {/* All Works Button */}

    </div>
  )
}

export default CBCSection;