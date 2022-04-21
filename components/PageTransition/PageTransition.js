import React from 'react';
import { useRecoilState } from 'recoil';
import { TransState } from '../../atoms/TransAtom';
import { useState } from 'react';
import { useEffect } from 'react';
import { TitleState } from './../../atoms/TitleAtom';
import {motion} from "framer-motion";
import { ActiveNavState } from './../../atoms/ActiveNavAtom';


function PageTransition() {
  const [transition,setTransition] = useRecoilState(TransState);
  const [title,setTitle] = useRecoilState(TitleState);
  const [activeNav,setActiveNav] = useRecoilState(ActiveNavState);

  const [time,setTime] = useState(true);

  useEffect(()=>{
    if(title !== "/") {
      setTimeout(()=>{
        setTime(false)
        setTransition(false)
      },12000);
    }
    else { 
       setTimeout(()=>{
        setTime(false)
        setTransition(false)
      },1500);
    }
  },[]);


  

  return  time ? 
  <motion.div
  initial = {{
    scale:0.5,
    opacity:0,
  }}
  animate={{
    scale:1,
    opacity:1,
    }}
    transition={{
                duration:0.8,
                ease:[0.83, 0, 0.17, 1],
            }}
   className="bg-black h-screen w-full items-center justify-center flex px-12 py-6 ">
  <motion.div 
  initial={{
    y:"-2vh",
    scale:0.7,
  }}
  animate={{
    y:"0vh",
    scale:1.2,
    transition:{
      ease:[0.83, 0, 0.17, 1],
      duration:1.5,
      delay:-3,
    }
  }}
  data-scroll-section className='transition-container bg-white  border border-black  opacity-0 scale-0 '>
    {title === "/" ? "Home" : title.includes("works/") ? `${title.replace("works/","")}` : title}
  </motion.div> 
  </motion.div>

  : <div/>


  
}

export default PageTransition;