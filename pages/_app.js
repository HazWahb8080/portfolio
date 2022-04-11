import '../styles/globals.scss';
import { useRef, useEffect,useState } from "react";


function MyApp({ Component, pageProps }) {
   useEffect(() => {
    if (typeof window === "undefined") return;
  
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

  useEffect(()=> window.dispatchEvent(new Event('resize')), [Component]);


 
  
  return (
    <div data-scroll-container className='overlfow-hidden' >
  <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
