import React from 'react'

function Skills() {
  return (
    <div data-scroll data-scroll-speed= "0" className="pt-12 pb-60 px-6 bg-black">
        <div data-scroll className="py-3 px-3 items-center justify-center flex ">
            <div className="w-full">
            <h1 className="text-white pt-12 pb-24 items-center flex justify-center font-Marc font-normal 2xl:text-8xl text-5xl ">
                 Skills 
            <span className="text-2xl self-start text-white/50  animate-pulse ">till now!</span>
             </h1>
             {/* table of skills */}
            <div className="border border-white/10 w-full  items-start justify-start flex flex-col">
                
                {/* headings */}
                <div className="lg:flex flex-col-1 w-full justify-evenly items-center border-b border-white/10">
                    <div className="  border-white/10  con flex-col ">
                        <h1 className="text-2xl text-white font-Popp px-4 font-bold py-6 text-center">Frameworks</h1>
                    </div>
                    <div className=" border-l border-white/10 con">
                        <h1 className="text-2xl text-white con flex-col font-Popp font-bold py-4 px-4">State
                         <b className="text-xs font-normal text-white/80 self-center">Management</b></h1>
                    </div>
                    <div className=" border-l border-white/10  con ">
                        <h1 className="text-2xl text-white font-Popp px-4 font-bold py-6">Css libs</h1>
                    </div>
                    <div className=" border-white/10  border-l con ">
                        <h1 className="text-2xl text-white font-Popp px-4 font-bold py-6">Animation</h1>
                    </div>
                    <div className="border-l border-white/10  con ">
                        <h1 className="text-2xl text-white font-Popp px-4 font-bold py-6">Other</h1>
                    </div>
                    <div className="border-l border-white/10  con ">
                        <h1 className="text-2xl text-white font-Popp px-4 font-bold py-6">Learning</h1>
                    </div>
                    <div className="border-l border-white/10  con ">
                        <h1 className="text-2xl text-white font-Popp px-4 font-bold py-6">Backend</h1>
                    </div>
                </div>

                <div className="  w-full items-center justify-evenly flex">
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title"> React js </h1>
                        <h1 className="table-title"> Next js </h1>
                        <h1 className="table-title"> TypeScript </h1>
                        <h1 className="table-title border-none pb-0"> Vanilla Js </h1>
                    </div>
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title"> Recoil </h1>
                        <h1 className="table-title"> Redux </h1>
                        <h1 className="table-title"> Context Api </h1>
                        <h1 className="table-title border-none pb-0"> ـــــــــــــــــ </h1>
                    </div>
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title"> Tailwind css </h1>
                        <h1 className="table-title"> Bootstrap </h1>
                        <h1 className="table-title"> Styled Components </h1>
                        <h1 className="table-title border-none pb-0"> Sass </h1>
                    </div>
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title"> GSAP </h1>
                        <h1 className="table-title"> FramerMotion </h1>
                        <h1 className="table-title"> Motion One </h1>
                        <h1 className="table-title border-none pb-0"> ـــــــــــــــــ </h1>
                    </div>
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title"> Git </h1>
                        <h1 className="table-title"> StoryBook </h1>
                        <h1 className="table-title"> Figma </h1>
                        <h1 className="table-title border-none pb-0"> ESLint </h1>
                    </div>
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title"> Three js </h1>
                        <h1 className="table-title">Building Apis</h1>
                        <h1 className="table-title">Unit-Testing</h1>
                        <h1 className="table-title border-none pb-0">ـــــــــــــــــ</h1>
                    </div>
                    <div className="text-white  con flex-col border-r border-white/10">
                        <h1 className="table-title">Firebase </h1>
                        <h1 className="table-title"> MongoDb </h1>
                        <h1 className="table-title"> Nodejs-Express </h1>
                        <h1 className="table-title border-none pb-0"> SanityCms </h1>
                    </div>


                 </div>

            </div>

            </div>


        </div>

    </div>
  )
}

export default Skills;