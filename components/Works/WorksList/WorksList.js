
import React, { useEffect, useState } from "react";
import Media from "./Media";
import Title from "./Title";
import Data from "../../../utils/Data";




// custom hook to get the mouse position on whereever move
const useMousePosition = ()=> {
  const [mouseposition,setMousePosition] = useState({x:0,y:0})

  useEffect(()=>{
    const updateMousePosition = (e)=>{
      setMousePosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",updateMousePosition);
    return ()=> window.removeEventListener("mousemove",updateMousePosition)
  },[])


  return mouseposition
}

export default function WorkList() {
  const [activeindex,setActiveIndex] = useState(-1);
  const {x,y} = useMousePosition();
  
  return (
    <div className="page-wrapper flex items-center justify-center w-full bg-[#0D21A1] ">
      <div className="project-list w-full  items-center justify-center flex flex-col z-40 h-full ">
      {Data.map(({title},index)=>(
        <Title key={title} title={title} setActiveIndex={setActiveIndex} index={index}/>
      ))}
      </div>
      <div className="project-media">
        {Data.map(({Url},index)=>{
          const isActive=index === activeindex;
          const xPos = isActive? x:0
          const yPos = isActive? y:0
          return <Media key={Url} url={Url} active={isActive} x={xPos} y={yPos} />
          })}
        </div>
      
    </div>
  );
}