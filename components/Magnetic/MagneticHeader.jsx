import Link from 'next/link';
import React from 'react';
import MagneticButton from './Magnetic';

function MagneticHeader({title,link,active,index}) {
  return (
                  <MagneticButton
                  className="button-1"
                  scale={1}
                  tollerance={0.5}
                  speed={0.5}
                  borderRadius='30px'
                    >
                    <h1 className=' text-xl font-bold font-Solata ' >{title}</h1>
                  </MagneticButton>
  )
}

export default MagneticHeader