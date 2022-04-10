import React from 'react';
import Marquee from "react-fast-marquee";


function Marqueex() {
  return (
    <div className='text-[#141414] text-4xl space-x-4
     py-10 px-6 bg-[#EEF0F2] font-bold border-y border-[#011638]
     font-Solata'>
       <Marquee 
       pauseOnHover
       delay={0}
       speed={100}
       gradient={false}
       > 
          {"> Reactjs Nextjs TypeScript || Recoil Redux || TailWindCss Bootstrap StyledComponents Sass || Firebase CloudMongoDB SanityCms || FramerMotion GSAP MotionOne || Git || Storybook >"}
       </Marquee>  
    </div>
  )
}

export default Marqueex;