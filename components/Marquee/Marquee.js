import React from 'react';
import Marquee from "react-fast-marquee";


function Marqueex({ishovering}) {
  return (
    <div  className=" flex w-full overflow-hidden flex-col items-start 
    justify-center target bg-transparent pb-6 pt-4 z-0 ">
      
      <div data-scroll  className="font-Marc z-0 items-start flex-col justify-start flex target ">
        <h1 data-scroll title="my skills" className="flex flex-col self-center 
        rounded-full text-xl mx-12 font-Marc ">
         <svg data-scroll   xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-black rotate-[-120deg] self-center " 
         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
         <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
         </svg>
        </h1>
      </div>

    {/* marquee */}
    <div  className="flex flex-col h-full overflow-hidden items-center justify-center w-full">

    <div 
    className={`text-black text-6xl space-x-4
     py-12 z-0  bg-transparent font-medium 
     font-Solata  w-full overflow-hidden 
     ${ishovering ? "text-white" : "text-black"}`} >
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