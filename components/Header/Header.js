import React from 'react';
import Logo from './../Logo/Logo';
import MagneticButton from './../Magnetic/Magnetic';
import MagneticHeader from './../Magnetic/MagneticHeader';
import { useRecoilState } from 'recoil';
import { TitleState } from './../../atoms/TitleAtom';
import HandleTrans from './../PageTransition/HandleTrans';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Header() {
    const [title,setTitle] = useRecoilState(TitleState);
    const [go,setGo] = useState(false);
  const router = useRouter();


    const transtoWorks = () => {
      setTitle("works")
      setGo(true)
      console.log("rgrg")
    }
    const transtoAbout = () => {
      setTitle("about")
      setGo(true)
    }
    const transtoContact = () => {
      setTitle("contact")
      setGo(true)
    }
   const transtoHome = () => {
     if(router.pathname === "/") return;
      setTitle("/")
      setGo(true)
    }







  return (
    <div data-scroll-section className='
      py-2 flex items-center justify-between px-2 md:px-12 w-full bg-transparent'>
        { go && <HandleTrans/>}
        <div data-scroll onClick={transtoHome} >
        <Logo/>
        </div>
        <div data-scroll className=' rounded-full
         space-x-4 flex items-center justify-center  z-50 smooth
            py-2 px-6 w-fit'>
              {Array.from({length:3}, (_, i) =>
             <div data-scroll key={i}
              className='menu-item-container'
                onClick={()=>
                  i===0 ? transtoWorks():
                  i===1 ? transtoAbout():
                  i===2 ? transtoContact(): null 
                }
                >
               <MagneticHeader
               title={ i===0 ?  "Works" : i===1 ? "About" : "Contact"}
               index={i===0 ?  0 : i===1 ? 1 : 2}
               />
             </div>
              )} 
        </div>


    </div>
  )
}

export default Header;