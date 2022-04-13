import Link from 'next/link';
import React from 'react';
import MagneticButton from './Magnetic';

function MagneticHeader({title,link}) {
  return (
                  <MagneticButton
                  
                  scale={1}
                  tollerance={1.5}
                  speed={1}
                  borderRadius='30px'>
                      <h1 data-scroll className="rounded-full hover:scale-125 transition ease-in-out duration-500 z-50 bg-[#011638]/80 bg-opacity-90 backdrop-filter backdrop-blur-lg py-9 -mb-20 px-8 shadow-xl view
                       shadow-white/50 text-[#EEF0F2] font-Solata font-bold
                        hover:text-[#EEC643] hover:bg-[#011638]/90 hover:bg-opacity-100 text-xl" >
                    {title}
                      </h1>
                  </MagneticButton>
  )
}

export default MagneticHeader