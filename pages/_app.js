import '../styles/globals.scss';
import { useRef, useEffect,useState } from "react";
import { RecoilRoot, useRecoilState } from 'recoil';
import { LoaderState } from './../atoms/LoaderAtom';
import {motion,AnimatePresence} from "framer-motion";
import { useRouter } from 'next/router';




function MyApp({ Component, pageProps }) {
  const router = useRouter();

  function handleExitComplete() {
    
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

  return (

    <RecoilRoot>
      <AnimatePresence exitBeforeEnter  onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </RecoilRoot>
  )
}

export default MyApp;
