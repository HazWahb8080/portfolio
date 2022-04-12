import React from 'react';
import MagneticButton from '../Magnetic/Magnetic';

function Logo() {





  return (
    <div className="target items-start justify-start flex z-30">
      <MagneticButton
        className="button-1"
        scale={1}
        tollerance={0.5}
        speed={0.5}
        borderRadius='30px'
      >
    <li className="content-item ">
					<a href="#" className="link link-leda text-[#011638] font-bold font-Marc w-[130px] text-xl " data-text="HAZEM WAHB">
						<span> Code by H </span>
					</a>
				</li>
      </MagneticButton>
    </div>
  )
}

export default Logo