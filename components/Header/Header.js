import React from 'react';
import Logo from './../Logo/Logo';
import MagneticButton from './../Magnetic/Magnetic';
import MagneticHeader from './../Magnetic/MagneticHeader';
import { useRecoilState } from 'recoil';
import { TitleState } from './../../atoms/TitleAtom';
import HandleTrans from './../PageTransition/HandleTrans';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ActiveNavState } from './../../atoms/ActiveNavAtom';

function Header({ishovering}) {
    const [title,setTitle] = useRecoilState(TitleState);
    const [activeNav,setActiveNav] = useRecoilState(ActiveNavState);
    const [go,setGo] = useState(false);
    const router = useRouter();


    const transtoWorks = () => {
      setTitle("works")
      setActiveNav("Works")
      setGo(true)
      console.log(activeNav)
    }
    const transtoAbout = () => {
      setTitle("about")
      setActiveNav("About")
      setGo(true)
    }
    const transtoContact = () => {
      setTitle("contact")
      setActiveNav("Contact")
      setGo(true)
    }
   const transtoHome = () => {
     if(router.pathname === "/") return;
      setTitle("/")
      setGo(true)
      setActiveNav("")
    }







  return (
    <div data-scroll-section className={`flex items-center justify-between z-50 px-2 md:px-12  py-3 w-full bg-transparent} 
      `}>
        { go && <HandleTrans/>}
        <div data-scroll onClick={transtoHome} >
        <Logo/>
        </div>
        <div data-scroll className=' rounded-full
         space-x-4 flex items-center justify-center  z-50 smooth
         py-2 px-6 w-fit'>
              {Array.from({length:3}, (_, i) =>
             <div data-scroll key={i}
              className={`menu-item-container  ${router.pathname==="/works" || router.pathname==="/about" || router.pathname==="/contact" || ishovering
              ? 'text-white' : "text-black"} ${activeNav === ""}   `}
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