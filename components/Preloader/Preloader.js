import React,{useRef} from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LoaderState } from './../../atoms/LoaderAtom';
import PageTransition from '../PageTransition/PageTransition';
import { useState } from 'react';
import {motion,AnimatePresence} from "framer-motion";
import { nanoid } from 'nanoid';
import {gsap} from "gsap";
import autoprefixer from 'autoprefixer';





function Preloader() {
      const [loading,setLoading] = useRecoilState(LoaderState);
    //   const [trans,setTrans] = useState(false);
    const bigRef = useRef(null);
    const miniRef = useRef(null);


    const elemRef = useRef(null);
    var text = ["HELLO", "SALAM","Bonjour", "Anyoung",
     "Hola", "Guten Tag", "Namaste","konnichiwa"," Nǐn Hǎo","Hallo"];
    var counter = 0;
    useEffect(()=>{
            if(!loading) return;
            setTimeout(()=>{
                let int = setInterval(()=>{
                    elemRef.current.innerHTML = text[counter];
                    counter++;
                    if(counter >= text.length) { 
                        counter = 0;
                        setTimeout(()=>{
                            let tl  = gsap.timeline();
                            let targets = gsap.utils.toArray(".target");
                            tl.to(miniRef.current,{
                            y:"100vh",
                            duration:2.2,
                            ease: "power4.in",
                        }).to(bigRef.current,{
                            y:"100vh",
                            duration:1.8,
                             ease: "power4.in",
                             delay:-1.5,
                             opacity:0.9,
                             onComplete : () => setLoading(false)
                        }).to(targets,{
                            y:"10vh",
                            ease:"elastic",
                            delay:-0.5,
                            duration:3,
                            stagger:0.5,
                            zIndex:1
                        }).to(targets,{
                            y:0,
                            ease:"elastic",
                            duration:3,
                            delay:-2.5,
                        })
                        

                    },500)
                    clearInterval(int)
                     }
                }, 180);
            },800)
    },[]);
    
 
   


  return (
      
      <motion.div ref={bigRef}
       className="bg-[#141414] p-8  xl:p-12 z-50 h-[100vh] items-center flex justify-center w-full ">
    <motion.div ref={miniRef}
    initial={{
        scale:0,
    }}
    animate={{
        scale:1,
    }}
    transition={{
        duration:1.3,
        ease:[0.6,0.01,-0.05,0.9],
    }}


     className=" bg-[#EEF0F2] w-full h-full items-center justify-center flex"> 
        
                <motion.h1
                 ref={elemRef} className="md:text-8xl text-5xl slef-center text-[#0D21A1] font-Marc font-bold" id="preloader"
                 initial={{
                     opacity:0.5,
                     scale:0,
                 }}
                 animate={{
                     opacity:1,
                     scale:1,
                 }} 
                 transition={{
                     delay:0.5,
                     ease:[0.83, 0, 0.17, 1],
                     duration:0.5,
                 }}
                 >
                    WELCOME!
                </motion.h1>
            </motion.div>
          </motion.div> 
  )
}

export default Preloader;