import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HomePage from "../components/Home/HomePage";
import Marqueex from "../components/Marquee/Marquee";
import Header from './../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CBCSection from '../components/works/CBCSection';
import SpotifySection from '../components/works/SpotifySection';
import LNKDNSection from '../components/works/LNKDNSection';
import Logo from './../components/Logo/Logo';
import { useRef, useState,useEffect } from "react"; 
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
import { LoaderState } from './../atoms/LoaderAtom';
import Preloader from '../components/Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';
import { TransState } from './../atoms/TransAtom';
import PageTransition from './../components/PageTransition/PageTransition';
import { OnceState } from './../atoms/OnceAtom';
import Divider from './../components/divider/Divider';
import DividerWorks from '../components/divider/DividerWorks';
import Skills from './../components/skills/Skills';




const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {
  const [loading,setLoading] = useRecoilState(LoaderState);
  const [once,setOnce] = useRecoilState(OnceState);
  const [transition,setTransition] = useRecoilState(TransState);


 
   useEffect(() => {
    if (typeof window === "undefined") return;
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {


        scroll = new locomotiveModule.default({
        el:document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
        tablet: {
              breakpoint: 0, 
            },
            mobile: {
                  smooth: true
              },
              tablet: {
                  smooth: true
              }
      });
    });

    return () => scroll.destroy();
  });




//   useEffect(()=>{
//     if(!once)
//   {
//     setTimeout(()=>{
//       setOnce(true)
//     setLoading(true)
//   },7000) //10000
// }
// },[]);







  return (
    <div  data-scroll-container
    className="bg-white target h-full w-full ">
      <Head>
        <title>Hazem Wahb - Junior Front-end Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {<AnimatedCursor
      innerSize={15}
      outerSize={8}
      color='186,0,0'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={8}
      clickables={[
        'a',
        "li",
        ".myworks",
        ".tech",
        ".feature",
        ".tech2",
        ".feature2",
        ".tech3",
        ".feature3",
        ".workel",
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
        ".view",
      ]}
      />}

      {transition && <PageTransition/> }
      
    
     <div data-scroll-section>
     <HomePage/>
     </div>
     }

       
        
         <div data-scroll-section className="lg:inline-block hidden w-full" >
         <Skills/>
         </div>
         }

        
         <div data-scroll-section className="hidden lg:flex" >
         <Divider/>
         </div>
         }

              <div  data-scroll-section >
       <CBCSection/>
       </div>
       }


              <div className={`mt-24 `} data-scroll-section >
       <SpotifySection/>
       </div>
       }
              <div className={`mt-24 `} data-scroll-section >
       <LNKDNSection/>
       </div>
       }

              <div className={``} data-scroll-section >
       <DividerWorks/>
       </div>
       }


            <div data-scroll-section>
       <Footer/>
       </div>
       }

    </div>
  )
}
