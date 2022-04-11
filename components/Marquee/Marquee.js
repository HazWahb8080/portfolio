import React from 'react';
import Marquee from "react-fast-marquee";


function Marqueex() {
  return (
    <div data-scroll-section className="flex flex-col items-start justify-start ">
      <div  className="font-Marc items-start flex-col justify-start flex">
        <h1 title="my skills" className="flex flex-col  py-5 px-5 self-center 
        rounded-full  text-xl my-5 mx-12 font-Marc">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-[#141414] rotate-[-120deg] self-center " 
         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
         <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
         </svg>
        </h1>
      </div>
    <div  className='text-[#141414] text-4xl space-x-4
     py-10 px-6 bg-[#EEF0F2] font-bold border-y border-[#011638]
     font-Solata'>
       <Marquee 
       pauseOnHover
       delay={0}
       speed={100}
       gradient={false}
       > 
          {"> Reactjs Nextjs TypeScript || Recoil Redux || TailWindCss Bootstrap StyledComponents Sass || Firebase CloudMongoDB SanityCms || FramerMotion GSAP MotionOne || Git || ChakraUi RedixUi NextUi || Storybook >"}
       </Marquee>  
    </div>
       </div>
  )
}

export default Marqueex;