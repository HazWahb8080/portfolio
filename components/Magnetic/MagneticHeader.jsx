import Link from 'next/link';
import React from 'react';
import MagneticButton from './Magnetic';
import { useRecoilState } from 'recoil';
import { ActiveNavState } from './../../atoms/ActiveNavAtom';


function MagneticHeader({title,link,active,index}) {
  const [activeNav,setActiveNav] = useRecoilState(ActiveNavState);
  return (
                  <MagneticButton
                  className="button-1"
                  scale={1}
                  tollerance={0.5}
                  speed={0.5}
                  borderRadius='30px'
                    >
                    <h1 className={`text-xl font-bold font-Solata
                     ${activeNav=== title ? "active-nav" : ""}`} >{title}</h1>
                  </MagneticButton>
  )
}

export default MagneticHeader