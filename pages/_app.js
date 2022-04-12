import '../styles/globals.scss';
import { useRef, useEffect,useState } from "react";
import { RecoilRoot, useRecoilState } from 'recoil';
import { LoaderState } from './../atoms/LoaderAtom';
import {motion,AnimatePresence} from "framer-motion";
import { useRouter } from 'next/router';




function MyApp({ Component, pageProps }) {


  return (

    <RecoilRoot>
        <Component {...pageProps}/>
      </RecoilRoot>
  )
}

export default MyApp;
