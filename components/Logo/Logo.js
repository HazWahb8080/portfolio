import React from 'react';
import MagneticButton from '../Magnetic/Magnetic';

function Logo() {





  return (
    <div  data-scroll-section className="w-full border-b items-start justify-start flex z-30 px-12 py-6 ">
      <MagneticButton
        className="button-1"
        scale={1}
        tollerance={0.5}
        speed={0.5}
        borderRadius='30px'
      >
    <li data-scroll  className="content-item ">
					<a href="#" className="link link-leda text-[#141414]  font-bold font-Marc w-[130px]" data-text="HAZEM WAHB">
						<span> Code by H </span>
					</a>
				</li>
      </MagneticButton>
    </div>
  )
}

export default Logo