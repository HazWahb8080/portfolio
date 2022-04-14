import React,{useRef,useState,useEffect} from 'react'
import WorksElement from './../WorksElement';
import useHover from '@react-hook/hover';

function CBCSlide() {
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

            <div data-scroll  className="grid md:grid-cols-3 grid-cols-2 border items-start h-[2500px]  justify-start  md:px-3 w-full">

                {/* words about the project */}

                <div data-scroll className=" items-start justify-start flex flex-col w-full h-full pt-12 ">
            <h1 data-scroll className="smallwords font-Popp py-2 px-2 md:col-span-1 text-white ">
                Cohort Based Courses Platform.
            </h1>


            {/* techs used */}
            <div data-scroll className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
                {Array.from({length:8}, (_, i) =>
             <div data-scroll key={i}
              className='font-Popp flex justify-center xl:text-lg text-sm w-full rounded-full px-2 py-1
               bg-white text-center font-extrabold text-black '
              >
                    {
                      i===0 ?  "Nextjs" :
                      i===1 ?  "Tailwind Css" :
                      i===2 ?  "Recoil" :
                      i===3 ?  "Firebase" :
                      i===4 ?  "ChakraUI" : 
                      i===5 ?  "NextAuth" :
                      i===6 ?  "Axios" :
                      i===7 ?  "FramerMotion" : null
                    }
             </div>
              )} 
            </div>

            {/* Techs */}
            <h1 className="text-white font-Popp w-full px-4 text-4xl mt-12" >* Techs</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef1} >Google and Email Passwordless Auths</h1>
              </div>
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef2} >Next.js Middleware</h1>
              </div>
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef3} >Dynamic Routing </h1>
              </div>
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef4} >SendGrid Email Functionality </h1>
              </div>
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef5} >Firebase Storage and UploadCare Integration </h1>
              </div>
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef6} >Stripe payment </h1>
              </div>
             <div data-scroll 
              className='tech'>
            <h1 data-scroll  ref={techRef7} >CRUD </h1>
              </div>
            </div>

            {/* Techs */}
            <h1 data-scroll  className="text-white font-Popp w-full px-4 text-4xl mt-12" >* Features</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
             
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef1} >- Dedicated author and Student Dashboards</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef2} >- Analytics</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef3} >- Payouts functionality</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef4} >- Announcements functionality </h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef5} >- Assignments [with feedback]</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef6} >- Emails functionality</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef7} >- Website Builder</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef8} >- upload Content [per week]</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef9} >- Community Functionality</h1>
            </div>
             </div>

             {/* libs */}
             <h1 data-scroll  className="text-white font-Popp w-full px-4 text-4xl mt-12" >* Libraries</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
                <div data-scroll 
              className='feature'>
            <h1 ></h1>
            </div>

                </div>





       </div>


            <div data-scroll  className="mb-3 mt-12 md:col-span-2
             px-4 w-full h-full items-start justify-start flex ">
            <WorksElement
            image=
            { ishoveringf1 ?  Img1 : ""}
            link={""}
            tittle={"Cohort Based Courses Platform"}
            subtitle=
            {" CBC is a new E-learning Experience developed by Gagan Biyani Udemy Co-founder at the intersection between EdTech and Creation Tools "}
            description={""}
            did={" Design and Development "}
            category={"FullStack"}
            />
            </div>
            </div>
            </>
  )
}

export default CBCSlide;