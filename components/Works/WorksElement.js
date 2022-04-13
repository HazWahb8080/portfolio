import React from 'react'
import MagneticButton from '../Magnetic/Magnetic';
import MagneticX from './../Magnetic/MagneticX';
import MagneticView from './../Magnetic/MagneticView';

function WorksElement({link,title,image,description,did}) {
  return (
    <div  data-scroll className=' py-4 px-6  w-full h-full items-center justify-center flex' >
        
        {/* container */}
        <div data-scroll className="flex flex-col w-full h-full conX items-start justify-start space-y-6" >
        
        {/* view */}
        <div data-scroll className="w-full flex items-end justify-end">
            <MagneticView
            title={"View"}>
            </MagneticView>
        </div>

        {/* image */}
        <div data-scroll data-scroll-speed="0.8"  className='conX w-full h-full' >
            <img className="object-cover object-center"  src="https://ucarecdn.com/1c589cf7-1b23-4d60-a8d1-a613d2be162e/apes2.webp" />
        </div>

        {/* Container of title and did  */}
        <div data-scroll className="flex-col-1 lg:flex  items-start justify-between  w-full h-full  " >
        {/* title */}
        <h1 data-scroll data-scroll-speed="0.3" className="font-Solata font-bold lg:text-4xl text-[#141414] " >
            CBC
        </h1>
        {/* did */}
        <h1 data-scroll data-scroll-speed="0.6" className="font-Solata font-bold text-sm lg:text-xl text-[#141414]" >
            Design and Development
        </h1>


        </div>
        {/* description */}
        <div className="w-full border">
            <p className=" w-full h-full px-3 py-2 break-words">
                descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptionriptionription
                

            </p>
        </div>



        </div>

    </div>
  )
}

export default WorksElement;