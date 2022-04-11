// import React from 'react';
// import { useEffect, useRef } from 'react';
// import Data from '../../utils/Data';

// function Slider() {
//   const Ref = useRef(null);

// useEffect(()=>{
//   gsap.to(".container1",{
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: ".workslist-container",
//       start:"bottom top",
//       scrub:3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//       end: "+=700px",
//     },
//     x:800,
//     duration:3,
//   });

//   gsap.to(".container2",{
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: ".container1",
//       start:"top top",
//       end: "+=700px",
//       scrub:5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     },
//     x:-1500,
//     duration:5,
//   });
//     },[]);




//   return (
//     <section data-scroll-section className="containerx space-y-10 w-full bg-[#EEF0F2]  items-center justify-center py-12 ">

//       {/* toright slider */}
//     <div className="container1 slider ">
//       {Data.map(({Url},index)=>(
//       <img src={Url} key={index} className="w-full py-5 h-full rounded-xl "/>
//       ))}
//     </div>

//     {/* to left slider */}
//     <div className="container2 slider">
//       {Data.map(({Url},index)=>(
//       <img src={Url} key={index} className=" rounded-xl w-full h-full py-5"/>
//       ))}
//     </div>
//     </section>



     
//   )
// }

// export default Slider;
