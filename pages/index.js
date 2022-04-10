import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HomePage from "../components/Home/HomePage";
import WorksSection from "../components/Works/WorksSection";
import Marqueex from "../components/Marquee/Marquee";
import Header from './../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import Logo from './../components/Logo/Logo';
import { useRef, useEffect } from "react";
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


export default function Home() {



  return (
    <div
     className="bg-[#EEF0F2] overflow-x-hidden" id="main-container">
      <Head>
        <title>Hazem Wahb - Junior Front-end Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedCursor
      innerSize={15}
      outerSize={8}
      color='0,0,0'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={8}
      clickables={[
        'a',
        "h1",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        ".menu-item-container",
        ".getintouch-circle-footer",
        ".project-item ",
      ]}
      />
      <Logo/>
      <div className="w-full items-center justify-center flex">
      <Header/>
        </div>
      <HomePage/>
      {/* Marquee */}
      <Marqueex/>
      {/* Works Slider */}
      <WorksSection/>
      {/* Slider with scroll trigger */}
      <Slider/>
      <Footer/>
    </div>
  )
}
