import '../styles/globals.scss';
import { useRef, useEffect,useState } from "react";


function MyApp({ Component, pageProps }) {

 
  
  return (
    <div data-scroll-container>
  <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
