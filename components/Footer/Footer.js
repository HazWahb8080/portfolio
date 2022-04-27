import React from 'react';
import MagneticButton from '../Magnetic/Magnetic';
import MagneticX from './../Magnetic/MagneticX';

const imgurl = "https://ucarecdn.com/1d4eba30-dcf1-4b87-b4ad-c805b668fa1d/1633954228782.jfif";

function Footer() {
 
  return (
    <div data-scroll  className="h-full mt-24
     rounded-t-[150px] items-start pt-36 px-12 xl:pt-72 xl:px-72 pb-12 justify-start 
    flex flex-col bg-black w-full">

        <div data-scroll data-scroll-speed="3"  className=" w-full xl:w-3/4  flex flex-col items-start justify-start py-3">
          <div  className="flex w-full space-x-4">
          <img   alt="my-face" src={imgurl} className="w-24 h-24 object-cover object-center rounded-full" />
          <h1 className="font-Marc self-center font-medium xl:text-8xl lg:text-6xl text-5xl text-white">
           Let&apos;s Work
           </h1>
          </div>
           <h1  className="font-Marc font-medium xl:text-8xl lg:text-6xl text-5xl text-white ">
            together!
           </h1>
          </div>

           <div data-scroll data-scroll-speed="4"   className="border-t mt-24 items-end justify-end flex border-[#EEF0F2]/50 w-full">
          <MagneticX
          title={"Get in touch!"}
          className=
          {"btn-footer-touch btn-footer-text-touch font-Forum text-4xl font-medium text-white rounded-full py-24 -mt-32 "}
          >
          </MagneticX>
           </div>

           
           <div data-scroll data-scroll-speed="6"  className="px-5 w-full space-x-4 -mt-20  items-start justify-start lg:items-start lg:justify-start flex mb-60">
             
             {Array.from({length:2}, (_, i) => 
                <div  key={i} className="flex items-start justify-start ">
                    <MagneticX
                    title={` ${i === 0 ? "hello@hazem.codes" : "+201 552 701 12"} `}
                    className={` btn-footer-text ${i === 0 ? "btn-footer-mail" : "btn-footer-phone"} `}
                    /> 
                </div>)}
           </div>



        </div>
  )
}

export default Footer;