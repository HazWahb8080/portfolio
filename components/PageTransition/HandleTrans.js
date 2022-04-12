import React from 'react'
import { useRecoilState } from 'recoil';
import { TransState } from './../../atoms/TransAtom';
import { useEffect } from 'react';
import { TitleState } from './../../atoms/TitleAtom';
import { useRouter } from 'next/router';

function HandleTrans() {
    const [transition,setTransition] = useRecoilState(TransState);
    const [title,setTitle] = useRecoilState(TitleState);
    const router = useRouter();
    useEffect(()=>{
        setTransition(true)
        setTimeout(() => {
          router.push(`/${title}`)
        },1000);
    });


  return <></>
}

export default HandleTrans;