import React from 'react';
import MagneticButton from '../Magnetic/Magnetic';
import {useRouter} from "next/router"



function Logo() {
  const router = useRouter();





  return (
    <div data-scroll className="target items-start justify-start flex z-50">
      <MagneticButton
        className="button-1"
        scale={1}
        tollerance={0.5}
        speed={0.5}
        borderRadius='30px'
      >
    <li data-scroll className="content-item ">
					<a className={` link link-leda font-bold font-Solata w-[200px] text-[24px] 
          ${router.pathname==="/works" || router.pathname==="/about" || router.pathname==="/contact" ?  "text-white" : "text-black"}`} data-text="HAZEM WAHB">
						<span> Code by H. </span>
					</a>
				</li>
      </MagneticButton>
    </div>
  )
}

export default Logo