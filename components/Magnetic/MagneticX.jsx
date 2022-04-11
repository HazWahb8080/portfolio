import React from 'react';
import MagneticButton from './Magnetic';

function MagneticX({title,className}) {
  return (
            <MagneticButton
                className={`${className}`}
                style={{backgroundColor: 'transparent'}}
                scale={1}
                tollerance={1}
                speed={.2}
                borderRadius='50%'
              >
                <MagneticButton
                  className={`${className}`}
                  scale={2}
                  tollerance={1.3}
                  speed={.7}
                  borderRadius='50%'
                >
                 {title}
                </MagneticButton>
              </MagneticButton>
  )
}

export default MagneticX;