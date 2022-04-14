import React from 'react';
import WorksElement from "./WorksElement";
import CBCSlide from './Slides/CBCSlide';


function worksLanding() {

  return (



    <div id="bossy" data-scroll data-scroll-speed="0" className="w-full h-[2500px]  items-center justify-center flex py-12 bg-black xl:px-12 " >
        {/* words */}
        <div data-scroll  className="w-full h-full items-center justify-start flex flex-col">
          <div className="w-full z-50 mb-48 pt-24 ">        
                <h1 className="text-5xl mix-blend-difference font-Popp text-center -mt-6 z-50 text-white h-full">
                Recent Works ـــــــــــــــــــــــــــ
                </h1>
          
          </div>


            


            {/* 1st row */}
            <CBCSlide/>
            {/* 2nd row */}
            {/* 3rd row */}

        </div>
        {/* list */}
        {/* All Works Button */}

    </div>
  )
}

export default worksLanding;