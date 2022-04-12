import React from 'react';
import Marquee from "react-fast-marquee";


function Marqueex() {
  return (
    <div data-scroll className=" z-50  flex w-full overflow-hidden flex-col items-start justify-center target ">
      
      <div data-scroll  className="font-Marc items-start flex-col justify-start flex target ">
        <h1 data-scroll   title="my skills" className="flex flex-col self-center 
        rounded-full text-xl mx-12 font-Marc ">
         <svg data-scroll   xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-[#141414] rotate-[-120deg] self-center " 
         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
         <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
         </svg>
        </h1>
      </div>

    {/* marquee */}
    <div  data-scroll className="flex flex-col h-full  pt-24 pb-24 items-center justify-center w-full">

    <div data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" 
    className='text-[#141414] text-4xl space-x-4
     py-10   bg-[#EEF0F2] font-bold border-y border-[#141414]
     font-Solata  w-full '>
       <Marquee 
       direction='right'
       pauseOnHover
       delay={0}
       speed={120}
       gradient={false}
       > 
          {"> Reactjs Nextjs TypeScript || Recoil Redux || TailWindCss Bootstrap StyledComponents Sass || Firebase CloudMongoDB SanityCms || FramerMotion GSAP MotionOne || Git || ChakraUi RedixUi NextUi || Storybook >"}
       </Marquee>  
    </div>
      </div>
       </div>
  )
}

export default Marqueex;