import React from 'react';

const imgurl = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

function Footer() {
  return (
    <div className="h-full rounded-t-[150px] mt-12 items-start pt-36 px-12 xl:pt-72 xl:px-72 pb-12 justify-start 
    flex flex-col bg-[#1C1D20] w-full">
        <div className=" w-full xl:w-3/4  flex flex-col items-start justify-start py-3">
          <div className="flex w-full space-x-4">
          <img  
          src={imgurl} className="w-24 h-24 object-cover object-center rounded-full" />
          <h1 className="font-Marc self-center font-medium xl:text-8xl lg:text-6xl text-5xl text-white">
           Let&apos;s Work
           </h1>
          </div>
           <h1 className="font-Marc font-medium xl:text-8xl lg:text-6xl text-5xl text-white ">
            together!
           </h1>
          </div>
           <div className="border-t mt-24 items-end justify-end flex border-[#EEF0F2]/50 w-full">
             <div  className="getintouch-circle-footer">
               <h1 className='font-Forum text-4xl font-medium text-white' >Get in touch!</h1>
             </div>
           </div>
           <div className="px-5 w-full space-x-4 items-center justify-center 4 lg:items-start lg:justify-start flex mb-60 mt-36">
             <button className="btn-footer">hello@hazem.codes</button>
             <button className="btn-footer">+201552701012</button>
           </div>
        </div>
  )
}

export default Footer;