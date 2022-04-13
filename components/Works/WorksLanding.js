import React from 'react';
import WorksElement from './WorksElement';

function WorksLanding() {
  return (
    <div data-scroll data-scroll-speed= "0.4"   className=' lg:pt-12 lg:pb-12 items-center justify-center  flex z-50 w-full h-full'>
        <div data-scroll data-scroll-speed= "1"  className=' lg:py-6 lg:px-6 w-full h-full'>
            
            
            
            {/* Text */}
            <div data-scroll data-scroll-speed="0.6"   className="lg:px-36 px-6 border-b w-full h-full border-[#141414]/10 " >
            <h1 data-scroll  className=' font-Solata font-bold text-xl text-[#141414]  '>
                Recent Works
            </h1>
            </div>

            {/* grid */}
            <div data-scroll data-scroll-speed="0.6"  className="py-6 lg:space-y-48 space-y-6  lg:px-6 mt-12 w-full h-full" >
               
               {/*first row  */}
                <div data-scroll data-scroll-speed="0.7" className="grid space-y-6 sm:space-y-36 lg:space-y-0  grid-cols-1 lg:grid-cols-2 gap-2   w-full h-full py-10" >
                    
                    {/* first element */}
                    <div data-scroll data-scroll-speed="0.6" className="w-full h-full p-2">
                        <WorksElement/>

                    </div>

                    {/* 2nd element */}
                    <div data-scroll data-scroll-speed="-2" className=" w-full  h-full p-2">
                         <WorksElement/>
                    </div>

                </div>

                
                
                {/* 2nd row */}
                 <div data-scroll data-scroll-speed="1.3" className="grid space-y-6 sm:space-y-36 lg:space-y-0  grid-cols-1 lg:grid-cols-2 gap-2   w-full h-full py-10" >
                    


                    {/* first element */}
                    <div data-scroll data-scroll-speed="-3" className="w-full h-full p-2">
                        <WorksElement/>
                    </div>

                    {/* 2nd element */}
                    <div data-scroll data-scroll-speed="1.2" className=" w-full  h-full p-2">
                         <WorksElement/>
                    </div>
                </div>






            </div>
        </div>
    </div>
  )
}

export default WorksLanding;