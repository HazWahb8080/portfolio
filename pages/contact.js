import React from 'react'
import { useRouter } from 'next/router';
import  dynamic  from 'next/dynamic';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import { useEffect } from 'react';
import { useState } from 'react';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function Work() {
    const [view,setView] = useState(false)

    const router = useRouter();
    useEffect(()=>{
        setView(false)
        setTimeout(()=>{
            setView(true)
        },1700) //1700
    },[]);
    


  return (
      <div data-scroll-section className="h-screen w-full items-center justify-center flex">

      { view && <AnimatedCursor
      innerSize={15}
      outerSize={8}
      color='255,255,255'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={8}
      clickables={[
        'a',
        "li",
        ".content__item",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        ".menu-item-container",
        ".getintouch-circle-footer",
        ".project-item ",
      ]}
      />}
      <div className="h-full w-full " >
          <div
          className={` smooth duration-500 ${ !view ?  " hidden bg-[#EEC643]" : " flex bg-transparent"}`} >
          <Header/>
        </div>

        {/* List of Works */}

    <motion.div
    initial={{
        y:"0",
        scale:1.2,
    }}
    animate={{
        y:"110vh",
        scale:1,
    }}
    transition={{
        ease:[0.83, 0, 0.17, 1],
        duration:2.5,
    }}
    
    className="transition-container scale-125">
        {router.pathname.replace("/","")}
    </motion.div>
         </div>
        </div>
   
  )
}

export default Work;