import React from 'react';
import WorksElement from "./WorksElement";

function worksLanding() {
  return (
    <div data-scroll-section className="w-full h-full   items-center justify-center flex my-12 py-12 xl:px-12 " >
        {/* words */}
        <div data-scroll data-scroll-speed="1" className="w-full h-full items-center justify-start flex flex-col ">
            <h1 data-scroll className="smallwords">
                Passionate, indeed!
            </h1>

            <div data-scroll data-scroll-speed="0.8" className="mb-3 mt-12 
             px-4 w-full h-full items-center justify-center flex">
            <WorksElement
            image={"https://ucarecdn.com/1c589cf7-1b23-4d60-a8d1-a613d2be162e/apes2.webp"}
            link={""}
            tittle={"Cohort Based Courses Platform"}
            subtitle=
            {" CBC is a new E-learning Experience developed by Gagan Biyani Udemy Co-founder at the intersection between EdTech and Creation Tools "}
            description={""}
            did={" Design and Development "}
            category={"FullStack"}
            />
            </div>

            <h1 data-scroll className="smallwords">
                Creative, I hope.
            </h1>
            <div data-scroll data-scroll-speed="0.8" className="mb-3 mt-12 
             px-4 w-full h-full items-center justify-center flex">
            <WorksElement
            image={"https://ucarecdn.com/1c589cf7-1b23-4d60-a8d1-a613d2be162e/apes2.webp"}
            link={""}
            tittle={"Cohort Based Courses Platform"}
            subtitle=
            {" CBC is a new E-learning Experience developed by Gagan Biyani Udemy Co-founder "}
            description={""}
            did={" Design and Development "}
            category={"FullStack"}
            />
            </div>


             <h1 data-scroll className="smallwords">
                Always Learning, No doubt!
            </h1>
            <div data-scroll data-scroll-speed="0.8" className="mb-3 mt-12 
             px-4 w-full h-full items-center justify-center flex">
            <WorksElement
            image={"https://ucarecdn.com/1c589cf7-1b23-4d60-a8d1-a613d2be162e/apes2.webp"}
            link={""}
            tittle={"Cohort Based Courses Platform"}
            subtitle=
            {" CBC is a new E-learning Experience developed by Gagan Biyani Udemy Co-founder "}
            description={""}
            did={" Design and Development "}
            category={"FullStack"}
            />
            </div>


        </div>
        {/* list */}
        {/* All Works Button */}

    </div>
  )
}

export default worksLanding;