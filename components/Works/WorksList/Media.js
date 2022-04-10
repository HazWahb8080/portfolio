import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';



const getDimesionObject = node=>{
  const rect = node.getBoundingClientRect();
  return {
    width:rect.width,
    height:rect.height,
  };
};


const useSize = ()=>{
  const [dimensions,setDimensions] = useState({}); 
  const [node,setNode] = useState(null); 
  const sizeRef = useCallback(node=>{
    setNode(node);
  },[]);

  useLayoutEffect(()=>{
    if(node) {
      const measure = ()=>{setDimensions(getDimesionObject(node));}
      measure();
    }

  },[node])

  return [sizeRef,dimensions];
};

export default function Media({url,active,x,y}) {
  const [sizeRef,{width,height}] = useSize();
  return (
    <div className=" z-40">
    <img ref = {sizeRef} src={url} className={`${active && " is-active"}`}
    style={{
      transform:`translate(${x-width/2}px,${y-height/2}px)`,
      transition:"all .35s cubic-bezier(.77, 0, 0.175, 1)",
    }}
    />
    </div>
  )
}
