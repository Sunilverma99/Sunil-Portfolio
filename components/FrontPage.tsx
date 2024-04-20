"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
function FrontPage() {
  return (
    <AuroraBackground className="h-full w-full">
    <div className='w-full h-full mx-auto py-24   '>
      <div className='flex justify-center  items-center'>
          <div className='w-1/2 mx-auto'>
            <div className='flex gap-4 px-4 '>
               <h1 className='text-6xl font-mono my-6 mx-6'>Hi all,I'm Sunil </h1>
               <img className="w-18 h-16  animate-handMovement my-6" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" alt="" />
            </div>
            <p className=' text-2xl font-serif px-4 m-6'>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
            <div className='m-6 mx-12 flex gap-4 '>
                <div className='rounded-full w-12 h-12 bg-slate-600 text-white items-center justify-center p-2 hover:bg-black'><FaGithub  className='w-8 h-8 '/></div>
                <div className='rounded-full w-12 h-12  bg-blue-400 items-center justify-center p-2 hover:bg-black  hover:text-white'><FaLinkedinIn  className='w-8 h-8 '/></div> 
                <div className='rounded-full w-12 h-12 bg-orange-500 text-white items-center justify-center p-2 hover:bg-black'><MdOutlineEmail className='w-8 h-8 '/></div>
                <div className='rounded-full w-12 h-12 bg-blue-600 text-white items-center justify-center p-2 hover:bg-black'><LuFacebook   className='w-8 h-8  '/></div>
            </div>
            <div className='flex gap-4 mx-8 py-2'>
              <button className="shadow-[0_0_0_3px_#000000_inset] bg-violet-500 hover:bg-white px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Contact Me
                </button>
                <button className="shadow-[0_0_0_3px_#000000_inset]  bg-violet-500 hover:bg-white  px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                 SEE MY RESUME
                </button>
             </div>

          </div>
          <div >
            <img className=' rounded-full' src="https://manojres.vercel.app/static/images/about.gif" alt="" />
          </div>
       </div>
    </div>
    </AuroraBackground>
  )
}

export default FrontPage