import React from 'react';
import { useRecoilState } from 'recoil';
import { TransState } from '../../atoms/TransAtom';
import { useState } from 'react';
import { useEffect } from 'react';
import { TitleState } from './../../atoms/TitleAtom';
import {motion} from "framer-motion";


function PageTransition() {
  const [transition,setTransition] = useRecoilState(TransState);
  const [title,setTitle] = useRecoilState(TitleState);

  const [time,setTime] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setTime(false)
      setTransition(false)
    },12000);
  },[])


  

  return  time ? 
  <div className="bg-[#141414] h-screen w-full items-center justify-center flex px-12 py-6 ">
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
  data-scroll-section className='transition-container opacity-0 scale-0 '>
    {title}
  </motion.div> 
  </div>
  : <div/>


  
}

export default PageTransition;