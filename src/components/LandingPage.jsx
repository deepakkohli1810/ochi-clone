import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-700 pt-1 '>
    <div className="textstructure mt-40 px-10">
        {["We Create","Eye Opening", "Presentations"].map((item,index)=>{
            return  <div className="masker ">
            <h1 className='uppercase text-white font-medium  leading-[6vw] tracking-tighter text-[7vw] font-[" Founders Grotesk X "] '>
                {item}
            </h1>
        </div> })}
    </div>
    <div className='border-t-[1px]  border-zinc-600 mt-32 text-white flex justify-between items-center py-3 px-14'>
    {["For public and private companies" , "From the first pitch to IPO"].map((item,index)=>{
    return <p className='text-l tracking-tighter font-MD leading-none'>
        {item}
     </p>
    })}
    <div className="start flex  items-center gap-5  ">
        <div className='px-5  py-1 border-[2px] border-zinc-400 rounded-full font-MD text-sm capitalize '>START THE PROJECT </div>
        <div className=' text-l py-2 px-2 border-[1px]  border-zinc-400 rounded-full '>
        <GoArrowUpRight />
        </div>
    </div>
    </div>
    </div>
  )
}

export default LandingPage
