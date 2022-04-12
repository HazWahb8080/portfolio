import React from 'react'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { TitleState } from './../atoms/TitleAtom';
import  dynamic  from 'next/dynamic';
import { motion } from 'framer-motion';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false

});

function About() {

    const [title,setTitle] = useRecoilState(TitleState);
    


  return (
      <div className="h-screen w-full items-center justify-center flex">
        <AnimatedCursor
      innerSize={15}
      outerSize={8}
      color='0,0,0'
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
      />
    <motion.div
    initial={{
        y:"0",
        scale:1.2,
    }}
    animate={{
        y:"100vh",
        scale:1,
    }}
    transition={{
        ease:[0.83, 0, 0.17, 1],
        duration:2.5,
    }}

     className="transition-container scale-125">
        {title}
    </motion.div>
      </div>
   
  )
}

export default About;