import React from 'react'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { ActiveNavState } from './../../atoms/ActiveNavAtom';

function DividerWorks() {
    const [active,setActive] = useRecoilState(ActiveNavState);
    const router = useRouter();
    function handleClick () {
        router.push("/works")
        setActive("Works")
    }

  return (
    <div className="bg-white w-full h-full mt-60 mb-60 items-center justify-center  flex  py-6 px-6" >
        <h1 
        onClick={handleClick}
         className="font-Marc font-medium myworks text-9xl h-full w-full text-center hover:scale-105 hover:text-blue-500 smooth" >
            All works
        </h1>
    </div>
  )
}

export default DividerWorks;