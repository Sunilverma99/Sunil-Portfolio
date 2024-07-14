"use client";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FlipWords } from "../components/ui/flip-words"
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Link from "next/link";
import Image from "next/image";

function FrontPage() {
  const resumeUrl = "https://drive.google.com/file/d/1zYnegq_zY944NtS9qCUMi6VUyh8KwwUs/view?usp=sharing";
  const words = [ "Backend", "Frontend", "MERN"]
  const words2=["Contact","Hire","Message","Email"]
  return (
    <div className="  bg-slate-950 pt-32 md:pt-0">
      <div className="md:flex md:justify-center md:items-center md:gap-8">
      <div className="lg:w-1/2">
  <div className="flex gap-2 md:gap-4 px-4 pb-6 items-center">
    <h1 className="text-3xl md:text-6xl font-serif px-4 md:px-10 text-white">
      Hi all, I'm Sunil <br/>
      <div className="flex">
      <FlipWords words={words} className="text-white text-2xl md:text-4xl font-serif" /> 
      <p className="text-white text-2xl md:text-4xl font-serif" >developer</p>
      </div>
    </h1>
    {/* Uncomment the image below if you need it */}
    {/* 
    <img
      className="w-9 h-8 md:w-16 md:h-14 animate-handMovement lg:my-6"
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
      alt=""
    /> 
    */}
  </div>

  <p className="text-xl md:text-2xl font-serif text-white px-4 md:px-10 animate-fadeInUp">
    A passionate Full Stack Software Developer having an experience of building Web
    and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool
    libraries and frameworks.
  </p>

  <div className="p-3 px-4 md:px-4 md:m-6 flex gap-4">
    <a href="https://github.com/Sunilverma99">
      <div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-slate-600 text-white flex items-center justify-center p-1 md:p-2 hover:bg-black">
        <FaGithub className="w-4 h-4 md:w-8 md:h-8" />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/sunil-verma-b7985024a/">
      <div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-blue-400 text-white flex items-center justify-center p-1 md:p-2 hover:bg-black">
        <FaLinkedinIn className="w-4 h-4 md:w-8 md:h-8" />
      </div>
    </a>
    <a href="#contact">
      <div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-orange-500 text-white flex items-center justify-center p-1 md:p-2 hover:bg-black">
        <MdOutlineEmail className="w-4 h-4 md:w-8 md:h-8" />
      </div>
    </a>
    <a href="https://twitter.com/SunilVerma74513">
      <div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-gray-600 text-white flex items-center justify-center p-1 md:p-2 hover:bg-black">
        <FaXTwitter className="w-4 h-4 md:w-8 md:h-8" />
      </div>
    </a>
  </div>
  
  <div className="flex gap-4 px-4 md:px-10">
    <Link href="#contact">
      {/* <button className="px-2 md:px-4 md:py-2 py-1 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        Contact me
      </button> */}
        <div className="flex justify-start">
  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <div className="flex">
    <FlipWords words={words2} className="text-slate-400"  /> 
    <h2>me</h2>
    </div>
  </button>
</div>  
    </Link>
    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none   focus:ring-offset-slate-50">
    See my resume
  </button>
</a>
  </div>
</div>


         <div className="pt-16">
         <LampContainer className="hidden lg:block pt-8 ">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-80 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Let's build <br/>Something <br/>Extraordinary Together.
      </motion.h1>
    </LampContainer>
         </div>

      </div>
    </div>
  );
}

export default FrontPage;
