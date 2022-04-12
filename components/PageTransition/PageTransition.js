import React from 'react';
import gsap from "gsap";
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LoaderState } from './../../atoms/LoaderAtom';
import { useRef } from 'react';

function PageTransition() {
const [loading,setLoading] = useRecoilState(LoaderState);

const pathRef = useRef(null)
const svgRef = useRef(null)



const win = {
  w: window.innerWidth,
  h: window.innerHeight
}
const leftTop = {
  x: 0,
  y: 0
}
const midTop = {
  x: win.w / 2,
  y: 0
}
const rightTop = {
  x: win.w,
  y: 0
}
let d = ''
let active = false

const animate = () => {
    if(loading) return;
  d = `
    M ${win.w}, 0
    L 0, 0
    L ${leftTop.x} ${leftTop.y}
    Q ${midTop.x} ${midTop.y}
    ${rightTop.x} ${rightTop.y}
    `
  
  pathRef.current.setAttribute('d', d)
  requestAnimationFrame(animate)
}
animate()



if (!loading) { 
    const animatee = () => { 
        active = !active
        
        gsap.to([leftTop, rightTop], {
          y: active ? win.h : 0,
          ease: 'power3.out',
        })
        
        gsap.to(midTop, {
          y: active ? win.h : 0,
          ease: 'power3.out',
          delay: .1
        })
    }
    
}



const handleResize = () => {
  win.w = window.innerWidth 
  win.h = window.innerHeight
  svgRef.current.setAttribute('width', win.w)
  svgRef.current.setAttribute('height', win.h)
  midTop.x = win.w / 2
  rightTop.x = win.w
}
handleResize()
window.addEventListener('resize', handleResize)






  return (
   <svg ref={svgRef} className="svg" id="svg">
   <path ref={pathRef} id="pat" fill="none"/>
</svg>
  )
}

export default PageTransition;