import React from 'react';
import Logo from './../Logo/Logo';
import MagneticButton from './../Magnetic/Magnetic';
import MagneticHeader from './../Magnetic/MagneticHeader';

function Header() {
  return (
    <div  className='
      py-2 flex items-center justify-between px-2 md:px-12 w-full bg-transparent'>
        <Logo/>
        <div className=' rounded-full
         space-x-4 flex items-center justify-center  z-50 smooth
            py-2 px-6 w-fit'>
              {Array.from({length:3}, (_, i) =>
             <div key={i} className='menu-item-container'>
               <MagneticHeader
               title={ i===0 ?  "Works" : i===1 ? "About" : "Contact"}
               link={i===0 ?  "/works" : i===1 ? "/about" : "/contact"}
               index={i===0 ?  0 : i===1 ? 1 : 2}
               />
             </div>
              )} 
        </div>


    </div>
  )
}

export default Header;