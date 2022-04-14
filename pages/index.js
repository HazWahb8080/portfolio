import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HomePage from "../components/Home/HomePage";
import Marqueex from "../components/Marquee/Marquee";
import Header from './../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import WorksLanding from '../components/works/WorksLanding';
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



const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {
  const [loading,setLoading] = useRecoilState(LoaderState);
  const [once,setOnce] = useRecoilState(OnceState);
  const [transition,setTransition] = useRecoilState(TransState);


   useEffect(() => {
    if (typeof window === "undefined" || loading) return;
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {

        scroll = new locomotiveModule.default({
        el:document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    return () => scroll.destroy();
  });




  useEffect(()=>{
    if(!once)
  {
    setTimeout(()=>{
      setOnce(true)
    setLoading(false)
  },7000) //10000
}
},[]);







  return (
    <div  data-scroll-container 
    className="bg-white target h-full w-full ">
      <Head>
        <title>Hazem Wahb - Junior Front-end Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {loading && !once && (<Preloader/>)}

      <AnimatedCursor
      innerSize={15}
      outerSize={8}
      color='186,0,0'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={8}
      clickables={[
        'a',
        "li",
        ".tech",
        ".feature",
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
      />

      {transition && <PageTransition/> }
      
     {!loading && 
     <div data-scroll-section>
     <HomePage/>
     </div>
     }

     
     

      {!loading &&
       <div  data-scroll-section
       className="bg-black pt-12 z-50 w-full h-full rounded-t-[150px]"
       >
       <Slider/>
       </div>}
       
         {!loading && 
         <div data-scroll-section >
         <Divider/>
         </div>
         }

       {!loading &&
       <div data-scroll-section >
       <WorksLanding/>
       </div>
       }


     {!loading &&
       <div data-scroll-section>
       <Footer/>
       </div>
       }

    </div>
  )
}
