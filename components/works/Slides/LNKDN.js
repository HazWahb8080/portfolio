import React,{useRef,useState,useEffect} from 'react'
import WorksElement3 from '../WorksElement3';
import useHover from '@react-hook/hover';


function LNKDN() {
    const options = {enterDelay: 100, leaveDelay: 100};
    // techs
    const techRef0 = useRef(null);
    const ishoveringt0 = useHover(techRef0,options);
    const techRef1 = useRef(null);
    const ishoveringt1 = useHover(techRef1,options);
    const techRef2 = useRef(null);
    const ishoveringt2 = useHover(techRef2,options);
    const techRef3 = useRef(null);
    const ishoveringt3 = useHover(techRef3,options);
    const techRef4 = useRef(null);
    const ishoveringt4 = useHover(techRef4,options);
    const techRef5 = useRef(null);
    const ishoveringt5 = useHover(techRef5,options);
    const techRef6 = useRef(null);
    const ishoveringt6 = useHover(techRef6,options);
    const techRef7 = useRef(null);
    const ishoveringt7 = useHover(techRef7,options);
    const techRef8 = useRef(null);
    const ishoveringt8 = useHover(techRef8,options);

    // images Techs URLs
    const Img = "https://ucarecdn.com/f3d6beec-959d-4802-83c4-032415e13b04/localhost3000home20April202.gif"; 


    // features
    const featRef1 = useRef(null);
    const ishoveringf1 = useHover(featRef1,options);
    const featRef2 = useRef(null);
    const ishoveringf2 = useHover(featRef2,options);
    const featRef3 = useRef(null);
    const ishoveringf3 = useHover(featRef3,options);
    const featRef4 = useRef(null);
    const ishoveringf4 = useHover(featRef4,options);
    const featRef5 = useRef(null);
    const ishoveringf5 = useHover(featRef5,options);
    const featRef6 = useRef(null);
    const ishoveringf6 = useHover(featRef6,options);
    const featRef7 = useRef(null);
    const ishoveringf7 = useHover(featRef7,options);
    const featRef8 = useRef(null);
    const ishoveringf8 = useHover(featRef8,options);
    const featRef9 = useRef(null);
    const ishoveringf9 = useHover(featRef9,options);
   

  return (
      <>
      
    {/* first row */}

            <div data-scroll  className="grid md:grid-cols-3 grid-cols-2  items-start h-[1500px]  justify-start  md:px-3 w-full">

                {/* words about the project */}

                <div data-scroll className=" items-start justify-start border-x border-b border-[#006097]/50 flex flex-col w-full h-full pt-12 ">
                  
                  
            <h1 data-scroll className="smallwords justify-start font-Popp py-2 px-5 md:col-span-1 text-[#006097] ">
                LinkedIn 
            </h1>
            <h1 data-scroll className="text-xl px-5 justify-start font-Popp pb-2 pt-6  md:col-span-1 text-[#006097] ">
                Linkedin Clone with some additional Features 
            </h1>


            {/* techs used */}
            <div data-scroll className="w-full grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-12 mt-4 pb-4 px-3
             gap-y-2 gap-x-3 border-t border-[#006097]/20">
                {Array.from({length:5}, (_, i) =>
             <div data-scroll key={i}
              className='font-Popp flex justify-center xl:text-lg text-sm w-full rounded-full px-2 py-1
                bg-[#006097]  text-center font-bold  text-white '
              >
                    {
                      i===0 ?  "Nextjs" :
                      i===1 ?  "MongoDB" :
                      i===2 ?  "Recoil" :
                      i===3 ?  "NextAuth" : 
                      i===4 ?  "Tailwind Css" : null
                    }
             </div>
              )} 
            </div>

            {/* Techs */}
            <h1 className="text-[#006097] font-Popp w-full px-4 py-4 text-4xl mt-12 border-y border-[#006097]/50 font-bold" >* Techs</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3
             ">
             <div data-scroll 
              className='tech3'>
            <h1 data-scroll  ref={techRef1} > Custom SignIn Page / NextAuth Google Auth</h1>
              </div>
             <div data-scroll 
              className='tech3'>
            <h1 data-scroll  ref={techRef2} >Next.js Middleware</h1>
              </div>
             <div data-scroll 
              className='tech3'>
            <h1 data-scroll  ref={techRef3} >NextAuth MongoDb Adabter</h1>
              </div>
             <div data-scroll 
              className='tech3'>
            <h1 data-scroll  ref={techRef5}>CRUD</h1>
              </div>
             <div data-scroll 
              className='tech3'>
            <h1 data-scroll  ref={techRef5}>Working with News Api</h1>
              </div>
             <div data-scroll 
              className='tech3'>
            <h1 data-scroll  ref={techRef8}>100% Responsive</h1>
              </div>
            </div>

            {/* Techs */}
            <h1 data-scroll  className="text-[#006097] font-Popp w-full px-4 text-4xl border-y py-4 border-[#006097]/50 mt-12 font-bold " >* Features</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3">
             
             <div data-scroll 
              className='feature3'>
            <h1 ref={featRef5} >- Dark / Light Mode </h1>
            </div>
             <div data-scroll 
              className='feature3'>
            <h1 ref={featRef1} >- Posts Functionality </h1>
            </div>
             <div data-scroll 
              className='feature3'>
            <h1 ref={featRef2} >- Upload - Delete Post </h1>
            </div>
             <div data-scroll 
              className='feature3'>
            <h1 ref={featRef3} >- Upload Images </h1>
            </div>
             <div data-scroll 
              className='feature3'>
            <h1 ref={featRef4} >- Like / Dislike functionality </h1>
            </div>
             </div>

             {/* libs */}
             <h1 data-scroll  className="text-[#006097] font-Popp w-full px-4 text-4xl mt-12 border-y py-4 border-[#006097]/50 font-bold " >* Libraries</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 ">
            <div data-scroll className='feature3 '>
            <p>@emotion/react</p>
            <p>@emotion/styled</p>
            </div>
            <div data-scroll className='feature3'>
            <p>@mui/icons-material</p>
            <p>@mui/material</p>
            </div>
            <div data-scroll className='feature3'>
            <p>framer-motion</p>
            <p>next-themes</p>
            </div>
            <div data-scroll className='feature3'>
            <p>timeago-react</p>
            <p>next-themes</p>
            </div>
                </div>






       </div>


            <div  data-scroll  className="mb-3 mt-12 md:col-span-2
             px-4 w-full h-full items-start justify-start flex ">
            <WorksElement3
            image=
            {Img}
            link={""}
            tittle={"LinkedIn"}
            subtitle=
            {" LinkedIn Rebuilt "}
            description={""}
            did={" Design and Development "}
            category={"FullStack"}
            />
            </div>
            </div>
            </>
  )
}

export default LNKDN;