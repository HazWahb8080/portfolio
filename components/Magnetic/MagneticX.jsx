import React from 'react';
import MagneticButton from './Magnetic';

function MagneticX({title,className}) {
  return (
            <MagneticButton
                className={`${className}`}
                style={{backgroundColor: 'transparent'}}
                scale={1}
                tollerance={.8}
                speed={.3}
                borderRadius='50%'
              >
                <MagneticButton
                  className={`${className}`}
                  scale={4}
                  tollerance={1}
                  speed={.5}
                  borderRadius='50%'
                >
                 {title}
                </MagneticButton>
              </MagneticButton>
  )
}

export default MagneticX;