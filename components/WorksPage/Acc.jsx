import React from 'react';
import {motion} from "framer-motion";


function Acc({title,subtitle , t1,t2,t3,t4,t5,t6,t7,link }) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full acc border-b border-white/20 flex  items-start justify-between">
        <div className=" my-3 py-4 px-6 flex flex-col w-[900px] items-start justify-start space-y-3 " >
            <h1 className="font-medium text-4xl font-Popp " > {title} </h1>
            <p className="font-medium text-sm font-Popp " > {subtitle} </p>
        </div>
        <div className=" w-full  items-start hidden xl:flex justify-start my-3 py-4  self-center lg:space-x-1 xl:space-x-4 " >
            <p className=" acc-tech " > {t1} </p>
            <p className=" acc-tech " > {t2} </p>
            <p className=" acc-tech " > {t3} </p>
            { t4 && <p className=" acc-tech " > {t4} </p>}
            { t5 && <p className=" acc-tech " > {t5} </p>}
        </div>

        <div className="w-[350px] items-center justify-center flex self-center my-3 py-4 px-6">
            <a target="_blank" rel="nonreferrer" href={link}
             className="w-full self-center hover:border-white hover:font-medium font-Popp smooth border-b border-white/0 
             text-center pb-3 text-xl"> See Now! </a>
        </div>

        

    </motion.div>
  )
}

export default Acc