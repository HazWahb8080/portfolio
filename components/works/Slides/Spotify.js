import React,{useRef,useState,useEffect} from 'react'
import WorksElement2 from '../WorksElement2';
import useHover from '@react-hook/hover';


function Spotify() {
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
    const Img1 = "https://ucarecdn.com/1c589cf7-1b23-4d60-a8d1-a613d2be162e/apes2.webp"; 


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

            <div data-scroll  className="grid md:grid-cols-3 grid-cols-2  items-start h-[2000px]  justify-start  md:px-3 w-full">

                {/* words about the project */}

                <div data-scroll className=" items-start justify-start border border-[#1ED760]/50 flex flex-col w-full h-full pt-12 ">
                  
                  
            <h1 data-scroll className="smallwords justify-start font-Popp py-2 px-5 md:col-span-1 text-[#1ED760] ">
                Spotify 
            </h1>
            <h1 data-scroll className="text-xl px-5 justify-start font-Popp pb-2 pt-6  md:col-span-1 text-[#1ED760] ">
                Spotify Clone with some additional Features 
            </h1>


            {/* techs used */}
            <div data-scroll className="w-full grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-12 mt-4 pb-4 px-3
             gap-y-2 gap-x-3 border-t border-[#1ED760]/20">
                {Array.from({length:5}, (_, i) =>
             <div data-scroll key={i}
              className='font-Popp flex justify-center xl:text-lg text-sm w-full rounded-full px-2 py-1
               border-black/80 bg-[#1ED760]/50 border text-center font-bold  text-black '
              >
                    {
                      i===0 ?  "Nextjs" :
                      i===1 ?  "Tailwind Css" :
                      i===2 ?  "Recoil" :
                      i===3 ?  "NextAuth" : 
                      i===4 ?  "SpotifyApi" : null
                    }
             </div>
              )} 
            </div>

            {/* Techs */}
            <h1 className="text-[#1ED760] font-Popp w-full px-4 py-4 text-4xl mt-12 border-y border-[#1ED760]/50 font-bold" >* Techs</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3
             ">
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef1} >Spotify Auth. JWT . Access Tokens</h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef2} >Next.js Middleware</h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef3} >Custom React Hooks</h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef4} >Debouncing</h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef5} >Working with Spotify Web Api SDK </h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef6} > Working with LottieFiles</h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef7} >Working with Lodash </h1>
              </div>
             <div data-scroll 
              className='tech2'>
            <h1 data-scroll  ref={techRef8} > 100% Responsive </h1>
              </div>
            </div>

            {/* Techs */}
            <h1 data-scroll  className="text-[#1ED760] font-Popp w-full px-4 text-4xl border-y py-4 border-[#1ED760]/50 mt-12 font-bold " >* Features</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3">
             
             <div data-scroll 
              className='feature2'>
            <h1 ref={featRef1} >- Spotify account Syncing</h1>
            </div>
             <div data-scroll 
              className='feature2'>
            <h1 ref={featRef2} >- Play Songs</h1>
            </div>
             <div data-scroll 
              className='feature2'>
            <h1 ref={featRef3} >- Control the Volume</h1>
            </div>
             <div data-scroll 
              className='feature2'>
            <h1 ref={featRef4} >- Songs and Playlists Syncing </h1>
            </div>
             <div data-scroll 
              className='feature2'>
            <h1 ref={featRef5} >- Search Functionality</h1>
            </div>
             </div>

             {/* libs */}
             <h1 data-scroll  className="text-[#1ED760] font-Popp w-full px-4 text-4xl mt-12 border-y py-4 border-[#1ED760]/50 font-bold " >* Libraries</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 ">
            <div data-scroll className='feature2 '>
            <p>@lodash</p>
            <p>@lottiefiles</p>
            </div>
            <div data-scroll className='feature2'>
            <p>@heroicons/react</p>
            <p>@tailwind-scrollbar-hide</p>
            </div>
            <div data-scroll className='feature2'>
            <p>@MUI/material-ui</p>
            <p>@spotify-web-api-node</p>
            </div>
                </div>






       </div>


            <div  data-scroll  className="mb-3 mt-12 md:col-span-2
             px-4 w-full h-full items-start justify-start flex ">
            <WorksElement2
            image=
            { ishoveringf1 ?  Img1 : ""}
            link={""}
            tittle={"Spotify"}
            subtitle=
            {" Spotify Rebuilt "}
            description={""}
            did={" Design and Development "}
            category={"FullStack"}
            />
            </div>
            </div>
            </>
  )
}

export default Spotify;