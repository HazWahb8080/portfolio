import React,{useRef,useState,useEffect} from 'react'
import WorksElement1 from '../WorksElement1';
import useHover from '@react-hook/hover';

function CBC() {
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

    const DefImg = "https://ucarecdn.com/fbb9840b-01f8-4452-8e7e-906f5fa2f9d4/CohortBasedCourses1.png";

    // images Techs URLs
    const AuthImg = "https://ucarecdn.com/db83b9c6-5f7e-4536-9f58-b048724a59fc/1.gif";
    const MddlImg = "https://ucarecdn.com/59afb153-6047-4bcc-a70b-4bc2004cf9d3/2.png"; 
    const MailImg = "https://ucarecdn.com/32c8b9d5-9bb4-4d39-b2b2-b185436d92fa/pika20220418T20_14_04110Z.png";
    const StripeImg = "https://ucarecdn.com/1374f740-be62-4e8e-addd-b0dbbcddc579/localhost3000coursebb18Apri.gif";
    const CrudImg = "https://ucarecdn.com/b8212f12-e3ad-4194-adaf-5043b2261215/CBC18April2022.gif";
    const RespImg = "https://ucarecdn.com/b718c526-312f-4ae3-bc84-af069bd79293/localhost3000cohort8ar5RvDwER.gif";

    // images Features URLs 
    const AnalyticsImg = "https://ucarecdn.com/eb90fa0a-e840-4a85-b4cd-15ab55d945d3/analytics.gif";
    const BuilderImg = "https://ucarecdn.com/241632e5-7ef7-4359-a27d-9f020ef063f9/builder.gif";
    const MailsImg = "https://ucarecdn.com/2db4b377-88a6-4717-aee3-ba56cf149032/mails.gif";
    const AnnsImg = "https://ucarecdn.com/ce3c2e08-db3c-44c4-b101-2236c5dbb7fd/anns.gif";
    const AsssImg = "https://ucarecdn.com/6977c241-eaa9-4cc2-afc2-1061ce5f7148/asss.gif";
    const PayoutsImg = "https://ucarecdn.com/566662b9-17d3-4e72-9935-1b91b6d1c6ff/payouts.gif";
    const CommunityImg = "https://ucarecdn.com/cf6dcfd1-b7c8-4030-b88c-e8586fa50f90/community.gif";
    const ContentImg = "https://ucarecdn.com/76c0a55e-5dfb-442c-848d-c310302574e7/content.gif";

  


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

            <div data-scroll  className="grid md:grid-cols-3 grid-cols-2  items-start h-[2500px]  justify-start  md:px-3 w-full">

                {/* words about the project */}

                <div data-scroll className=" items-start border border-white/10 justify-start flex flex-col w-full h-full pt-12 ">
                  
                  <div data-scroll className="w-full flex flex-col items-start">
            <h1 data-scroll className=" justify-end font-Popp py-2 px-4 text-green-500  ">
               Production-Ready
            </h1>
            <h1 data-scroll className="smallwords justify-start font-Popp py-2 px-2 md:col-span-1 text-white ">
                Cohort Based Courses Platform.
            </h1>
                  </div>


            {/* techs used */}
            <div data-scroll className="w-full grid grid-cols-2 pt-12 lg:grid-cols-3 xl:grid-cols-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
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
            <h1 className="text-white font-Popp w-full pt-4 px-4 border-t border-white/10 text-4xl mt-12" >* Techs</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3
             border-t border-white/20">
             <div data-scroll 
              className={` tech ${ishoveringt1 ? "text-red-600" : "text-white"}`}>
            <h1 data-scroll  ref={techRef1} >Google and Email Passwordless Auths</h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt2 ? "text-red-600" : "text-white"}`}>
            <h1 data-scroll  ref={techRef2} >Next.js Middleware</h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt3 ? "text-white" : "text-white"}`}>
            <h1 data-scroll  ref={techRef3} >Dynamic Routing </h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt4 ? "text-red-600" : "text-white"}`}>
            <h1 data-scroll  ref={techRef4} >SendGrid Email Functionality </h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt5 ? "text-white" : "text-white"}`}>
            <h1 data-scroll  ref={techRef5} >Firebase Storage and UploadCare Integration </h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt6 ? "text-red-600" : "text-white"}`}>
            <h1 data-scroll  ref={techRef6} >Stripe payment </h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt7 ? "text-red-600" : "text-white"}`}>
            <h1 data-scroll  ref={techRef7} >CRUD </h1>
              </div>
             <div data-scroll 
              className={` tech ${ishoveringt8 ? "text-red-600" : "text-white"}`}>
            <h1 data-scroll  ref={techRef8} > 100% Responsive </h1>
              </div>
            </div>

            {/* Techs */}
            <h1 data-scroll  className="text-white font-Popp w-full px-4 pt-4 border-t border-white/10 text-4xl mt-12" >* Features</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
             
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef1} >1.  Dedicated author and Student Dashboards</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef2} >2. Analytics</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef3} >3. Payouts functionality</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef4} >4. Announcements functionality </h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef5} >5. Assignments [with feedback]</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef6} >6. Emails functionality</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef7} >7. Website Builder</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef8} >8. upload Content [per week]</h1>
            </div>
             <div data-scroll 
              className='feature'>
            <h1 ref={featRef9} >9. Community Functionality</h1>
            </div>
             </div>

             {/* libs */}
             <h1 data-scroll  className="text-white font-Popp w-full px-4 pt-4 text-4xl border-t border-white/10 mt-12" >* Libraries</h1>
            <div data-scroll className="w-full flex flex-col  items-center justify-center pt-4 mt-4 pb-4 px-3 gap-y-2 gap-x-3 border-t border-white/20">
            <div data-scroll className='feature '>
            <p>@chakra-ui/icons</p>
            <p>@chakra-ui/react</p>
            </div>
            <div data-scroll className='feature'>
            <p>@headlessui/react</p>
            <p>@radix-ui/react-toast</p>
            </div>
            <div data-scroll className='feature'>
            <p>avvvatars-react</p>
            <p>@nextui-org/react</p>
            </div>
            <div data-scroll className='feature'>
            <p>@sendgrid/mail</p>
            <p>@stripe/stripe-js</p>
            </div>
            <div data-scroll className='feature'>
            <p>@uploadcare/react-widget</p>
            <p>axios</p>
            </div>
            <div data-scroll className='feature '>
            <p>date-fns</p>
            <p>js-file-download</p>
            </div>
            <div data-scroll className='feature '>
            <p>react-quill</p>
            <p>react-timeago</p>
            </div>

                </div>






       </div>


            <div  data-scroll  className="mb-3 mt-12 md:col-span-2
             px-4 w-full h-full items-start justify-start flex ">
            <WorksElement1
            image=
            { ishoveringt1 ?  AuthImg : ishoveringt2 ?  MddlImg : 
              ishoveringt4 ? MailImg : ishoveringt6 ? StripeImg :
              ishoveringt7 ? CrudImg : ishoveringt8 ? RespImg : 
              ishoveringf2 ? AnalyticsImg : ishoveringf3 ? PayoutsImg : 
              ishoveringf4 ? AnnsImg : ishoveringf5 ? AsssImg : 
              ishoveringf6 ? MailsImg : ishoveringf7 ? BuilderImg : 
              ishoveringf8 ? ContentImg : ishoveringf9 ? CommunityImg : 
              DefImg }
            link={"https://cbc-three.vercel.app/"}
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

export default CBC;