import React from 'react';
import {motion} from "framer-motion";
import { useRouter } from 'next/router';

function ShowSite({link,clss}) { //spotify lnkdn cbc
  const router = useRouter();
    return (
    <a
    href={link} target="_blank" rel='noreferrer'
    className={`w-full z-50 rounded-full 
    items-end justify-end flex`} >
        <motion.h1 
        whileHover={{y:-50, scale:1.1}}
        transition={{ duration:0.6, ease:[0.83, 0, 0.17, 1]}}
        className={`border rounded-full py-11 px-5 shadow-lg 
        -mb-16 z-50 font-Popp
        ${clss==="spotify" ? "border-[#1ED760] text-[#1ED760] hover:font-bold shadow-[#1ED760]" :
        clss==="cbc" ? "border-white text-white hover:bg-white hover:text-black  hover:font-bold hover:shadow-lg hover:shadow-white/90" :
        "text-[#006097]  shadow-[#006097]/50 font-bold hover:font-normal"}
        `}>
          show Site
        </motion.h1>
    </a>
  )
}

export default ShowSite;