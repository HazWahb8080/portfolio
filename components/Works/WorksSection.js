import React from 'react';

function WorksSection() {
  return (
    <div className='pt-36 pb-36 bg-[#0D21A1] h-screen w-full px-12'>
      <div className='items-start justify-start flex py-6 group border px-6 h-full w-full'>
        <h1 className="xl:text-8xl lg:text-7xl w-3/4 text-5xl font-Marc text-[#EEF0F2] " >Recent Work</h1>
        {/* side words */}
        <div className='w-1/4 items-end lg:inline-flex  flex-col hidden justify-end'>
          <svg xmlns="http://www.w3.org/2000/svg" className="  h-12 w-12 stroke-[#EEF0F2]/90
           rotate-[310deg] group-hover:rotate-[360deg] smooth " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          <h1 className='font-Solata font-bold text-2xl text-[#EEC643] break-words '>The combination of my passion for design, code &
           interaction positions me in a
          unique place in the web dev world.</h1>
        </div>
      </div>
      

    </div>
  )
}

export default WorksSection;