import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ActiveNavState } from "../atoms/ActiveNavAtom";
import Acc from "./../components/WorksPage/Acc";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function Work() {
  const [view, setView] = useState(false);
  const [ActiveNav, setActiveNav] = useRecoilState(ActiveNavState);
  const [activeTab, setActiveTab] = useState("");

  const router = useRouter();
  useEffect(() => {
    setView(false);
    setTimeout(() => {
      setView(true);
      setActiveNav("Works");
      setActiveTab("Full-Stack");
    }, 1700); //1700
  }, []);

  // handling the click of tabs
  const ref1 = useRef(null);
  const isActive1 = ref1.current?.innerText;
  const ref2 = useRef(null);
  const isActive2 = ref2.current?.innerText;
  const ref3 = useRef(null);
  const isActive3 = ref3.current?.innerText;

  return (
    <div
      data-scroll-container
      className="h-full w-full items-center justify-center flex"
    >
      <div className="w-full h-screen items-center justify-center flex">
        {view && (
          <AnimatedCursor
            innerSize={15}
            outerSize={8}
            color="255,255,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={8}
            clickables={[
              "a",
              "li",
              ".tech",
              ".feature",
              ".workel",
              ".content__item",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              ".menu-item-container",
              ".getintouch-circle-footer",
              ".project-item ",
              ".view",
              ".tab-works",
              ".acc",
            ]}
          />
        )}

        <div className="h-full w-full  flex flex-col items-start justify-start ">
          <div
            className={` border-b border-white/5 w-full smooth duration-500 ${
              !view ? " hidden bg-[#EEC643]" : " flex bg-transparent"
            }`}
          >
            <Header />
          </div>

          {/* transition */}
          {!view && (
            <motion.div
              initial={{
                y: "0",
                scale: 1.2,
              }}
              animate={{
                y: "110vh",
                scale: 1,
              }}
              transition={{
                ease: [0.83, 0, 0.17, 1],
                duration: 2.5,
              }}
              className="transition-container scale-125"
            >
              {router.pathname.replace("/", "")}
            </motion.div>
          )}
          {/* page */}
          {view && (
            <div className="mt-12 py-6 md:px-6 w-full flex border-b border-white/50 flex-col items-center justify-center ">
              {/* tabs */}
              <div
                className="text-white font-Popp text-sm md:text-xl  py-3 px-4 w-full
         flex items-center justify-evenly space-x-4 "
              >
                <div
                  className={` ${
                    activeTab === isActive1 ? "tab-works-active " : "tab-works"
                  } `}
                >
                  <h1
                    ref={ref1}
                    onClick={() => setActiveTab(ref1.current?.innerText)}
                  >
                    {" "}
                    Full-Stack{" "}
                  </h1>
                </div>
                <div
                  className={` ${
                    activeTab === isActive2 ? " tab-works-active " : "tab-works"
                  } `}
                >
                  <h1
                    ref={ref2}
                    onClick={() => setActiveTab(ref2.current?.innerText)}
                  >
                    {" "}
                    Mini-Awwwards{" "}
                  </h1>
                </div>
                <div
                  className={` ${
                    activeTab === isActive3 ? " tab-works-active " : "tab-works"
                  } `}
                >
                  <h1
                    ref={ref3}
                    onClick={() => setActiveTab(ref3.current?.innerText)}
                  >
                    {" "}
                    Experimentals{" "}
                  </h1>
                </div>
              </div>
            </div>
          )}
          {/* content */}
          {view && (
            <div className="w-full py-6 px-6 2xl:px-24 flex  items-center justify-center h-[2000px] scrollbar-hide overflow-y-scroll pt-12 ">
              {activeTab === isActive1 && (
                <div
                  className="w-full text-white space-y-6 "
                  style={{ backgroundColor: "black" }}
                >
                  <Acc
                    title={"Cohort-Based Courses Platform"}
                    subtitle={"Production-Ready Startup Project"}
                    link={"https://cbc-three.vercel.app/"}
                    t1={"Nextjs"}
                    t2={"Recoil"}
                    t3={"Firebase"}
                    t4={"Tailwind"}
                    t5={"Next-Auth"}
                  />

                  <Acc
                    title={"JAMstack E-commerce"}
                    subtitle={
                      "complete fullstack e-commerce website with category, checkout and vendor pages"
                    }
                    link={"https://e-commerce-xi-blush.vercel.app/"}
                    t1={"Nextjs"}
                    t2={"ContextApi"}
                    t3={"Stripe"}
                    t4={"Tailwind"}
                    t5={"Auth"}
                  />

                  <Acc
                    title={"Spotify"}
                    subtitle={
                      "spotify rebuilt with Search Functionality and re-design"
                    }
                    link={"https://spotify101.vercel.app/"}
                    t1={"Nextjs"}
                    t2={"Recoil"}
                    t3={"SpotifyApi"}
                    t4={"Tailwind"}
                    t5={"MiddleWare"}
                  />
                  <Acc
                    title={"Netflix"}
                    subtitle={"Netflix rebuilt"}
                    link={"https://netflix-clone-yt-theta.vercel.app/"}
                    t1={"TypeScript"}
                    t2={"Nextjs"}
                    t3={"Recoil"}
                    t4={"RestApi"}
                    t5={"Stripe"}
                  />
                  <Acc
                    title={"LinkedIn"}
                    subtitle={"Linkedin rebuilt with Dark/Light Mode"}
                    link={""}
                    t1={"MongoDB"}
                    t2={"Nextjs"}
                    t3={"Recoil"}
                    t4={"TailWind Css"}
                    t5={"Next-Auth"}
                  />
                </div>
              )}

              {/* mini-awwwards */}

              {activeTab === isActive2 && (
                <div
                  className="w-full text-white space-y-6 mt-32 "
                  style={{ backgroundColor: "black" }}
                >
                  <Acc
                    title={"Mini Awwwrds #1"}
                    subtitle={"awwwards website recreation"}
                    link={"https://awww1.vercel.app/"}
                    t1={"Reactjs"}
                    t2={"Locomotive Scroll"}
                    t3={"Intersection Observer"}
                    t4={"GSAP ScrollTrigger"}
                  />
                  <Acc
                    title={"Mini Awwwrds #2"}
                    subtitle={
                      "playing around with Framer Motion Animate Presence and Shared Layout"
                    }
                    link={"https://pages-anim.vercel.app/"}
                    t1={"Reactjs"}
                    t2={"Framer Motion"}
                    t3={"React Router"}
                    t4={"SASS"}
                  />
                  <Acc
                    title={"Mini Awwwrds #3"}
                    subtitle={"Google Storeis website recreation"}
                    link={"https://awww3.vercel.app/"}
                    t1={"ReactJs"}
                    t2={"GSAP ScrollTrigger"}
                    t3={"GSAP Timeline"}
                  />
                  <Acc
                    title={"Stack 3D Project"}
                    subtitle={"Vintage Random rotation and scale on hover"}
                    link={"https://stack3d.vercel.app/"}
                    t1={"Reactjs"}
                    t2={"GSAP"}
                    t3={"Lodash"}
                    t4={"SASS"}
                  />

                  <Acc
                    title={"Awwwards Layout Project"}
                    subtitle={
                      "Modern incredible Awwwards winner website recreation"
                    }
                    link={"https://layout-zeta.vercel.app/"}
                    t1={"ReactJs"}
                    t2={"Framer Motion"}
                    t3={"React-Router"}
                    t4={"Sass"}
                  />
                </div>
              )}

              {/* exprimentals */}

              {activeTab === isActive3 && (
                <div
                  className="w-full text-white space-y-6 mt-32 "
                  style={{ backgroundColor: "black" }}
                >
                  <Acc
                    title={"Mini-Amazon"}
                    subtitle={"when i was learning Redux and Stripe"}
                    link={""}
                    t1={"Reactjs"}
                    t2={"Redux"}
                    t3={"Stripe"}
                    t4={"Custom Hooks"}
                    t5={"RestApi"}
                  />
                  <Acc
                    title={"Not-Medium"}
                    subtitle={"playing around with SanityCms and TypeScript"}
                    link={"https://notmedium.vercel.app/"}
                    t1={"TypeScript"}
                    t2={"Nextjs"}
                    t3={"Sanity CMS"}
                    t4={"Next ISR"}
                  />
                  <Acc
                    title={"NFTs Drop Marketplace"}
                    subtitle={
                      "first interaction with nft stuff and i really enjoyed it"
                    }
                    link={"https://nft-s-marketplace-rho.vercel.app/"}
                    t1={"Nextjs"}
                    t2={"Sanity Cms"}
                    t3={"MetaMask-Auth"}
                    t4={"Web3 SDK"}
                    t5={"TailWind Css"}
                  />
                  <Acc
                    title={"Skew Scrolling Effect"}
                    subtitle={
                      "Modern incredible Awwwards winner website recreation Effect"
                    }
                    link={"https://skewscroll.vercel.app/"}
                    t1={"ReactJs"}
                    t2={"Locomotive Scroll"}
                    t3={"GSAP"}
                    t4={"Sass"}
                  />

                  <Acc
                    title={"TypeWriter Effect"}
                    subtitle={
                      " needed to create epic realistic typewriter effect and done with gsap in 2 lines of code "
                    }
                    link={"https://typewriter.vercel.app/"}
                    t1={"Reactjs"}
                    t2={"GSAP"}
                    t3={"CSS"}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
