import React,{useState} from 'react';
import {motion} from "framer-motion";
import { useRecoilState } from 'recoil';
import { TitleState } from '../../atoms/TitleAtom';
import HandleTrans from '../PageTransition/HandleTrans';
import { useRouter } from 'next/router';

function WorksElement2({tittle,link,description,image,did,category,subtitle}) {

            const [title,setTitle] = useRecoilState(TitleState);
            const [go,setGo] = useState(false);
            const router = useRouter();


            const transtoproject1 = () => {
            setTitle("works/cbc")
            setGo(true)
            }

            const transtoproject2 = () => {
            setTitle("works/spotifybuild")
            setGo(true)
            }

            const transtoproject3 = () => {
            setTitle("works/awwrds1")
            setGo(true)
            }

            const transtoproject4 = () => {
            setTitle("exps/gstories")
            setGo(true)
            }



    const [clicked,setClicked] = useState(false);
  return (
    <div data-scroll data-scroll-sticky data-scroll-target="#bossyX" className="space-y-4 workel
      md:px-12 w-full items-center justify-center flex-col flex z-50 ">
        { go && <HandleTrans/>}
        <div data-scroll className="w-full overflow-hidden z-50  h-full items-center justify-center">
        <motion.img
        onClick={transtoproject1}
        data-scroll
        whileHover ={{
            scale: 1.2,
             transition:{
                duration:1.5,
                ease:[0.83, 0, 0.17, 1],
            }
        }}
         src={image}/>
        </div>
        {/* title */}
        <div data-scroll className="w-full grid grid-cols-1 z-50 text-[#1ED760] xl:gap-0 gap-y-4 xl:grid-cols-4 h-full ">
            <div data-scroll  className="flex flex-col w-full col-span-3">
            <h1 data-scroll   className="text-3xl font-Solata" > {tittle} </h1>
            <h1 data-scroll   className="text-md font-Solata break-words " > {subtitle} </h1>
            </div>
            <div data-scroll  className="flex flex-col justify-start  items-start  w-full col-span-1 ">
            <h1 data-scroll  className=" font-Solata text-left">{category} ــــــ</h1>
            <h1 data-scroll  className="font-Solata font-bold text-left">{did}</h1>
            </div>
        </div>
        





    </div>
  )
}

export default WorksElement2;