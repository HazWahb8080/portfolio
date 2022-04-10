import React from 'react'

function Title({title,setActiveIndex,index}) {
  return (
    <div className='project-item w-full border-b border-dotted border-[#EEF0F2]/50 mt-3 mb-12' onMouseEnter={()=>setActiveIndex(index)} onMouseLeave={()=>setActiveIndex(-1)}>
        <h3 className='project-title w-full text-5xl font-Marc text-[#EEF0F2] '>
            <h1>{title}</h1>
        </h3>
    </div>
  )
}

export default Title