"use client";
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BackgroundBeams } from "./ui/background-beams";
import { InfiniteMovingCardsDemo } from './InfinniteScroll';
function SecondPage() {
  return (
    <div id='skills' className='w-full mx-auto py-12 bg-slate-950 '>
    <div className=' md:flex md:justify-center md:align-middle  gap-4 items-center'>
        <div  className="md:w-1/2">
          <img className=' rounded-3xl' src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*yw0TnheAGN-LPneDaTlaxw.gif" alt="" />
        </div>
        <div className='md:w-1/2 p-2'>
          <h1 className=' md:text-6xl text-3xl font-light text-white'>What I do</h1>
          <p className=' text-gray-500 p-2 md:text-xl text-lg '>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
          {/* <div className='flex gap-3  flex-wrap items-center text-center justify-center my-4'>
            <div ><FaHtml5 className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><FaCss3Alt  className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><IoLogoJavascript  className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><FaReact className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><FaNode  className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><SiMongodb className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><FaAws  className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><SiFirebase className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><FaJava  className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><FaPython className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><BiLogoTypescript className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
            <div ><TbBrandNextjs className='w-16 h-16 text-gray-500 hover:text-violet-500' /></div>
          </div> */}
          <p className='my-8 text-gray-500 font-sans md:text-xl text-sm' >✨ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
          <p className='my-8 text-gray-500 font-sans md:text-xl text-sm'> ✨Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
        </div>

     </div>
     <h1 className='text-center text-white  md:text-3xl  text-2xl'>Skills</h1>
     <InfiniteMovingCardsDemo/>
     <BackgroundBeams className=' md:h-4/6 h-2/6  '  />
  </div>
  )
}

export default SecondPage