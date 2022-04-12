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
                        <Link href={link} >
                    <h1 className='nav-lnk' >{title}</h1>
                        </Link>
                  </MagneticButton>
  )
}

export default MagneticHeader