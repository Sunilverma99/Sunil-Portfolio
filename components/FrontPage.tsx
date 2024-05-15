"use client";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function FrontPage() {
  const resumeUrl = "https://drive.google.com/file/d/1aWluGoppzU4qLS-uMjbvj7_VcJ-URYcc/view?usp=drivesdk"; // Replace with the URL of your resume PDF file

  return (
    <div className=" py-16">
     <div className="md:flex md:justify-center md:items-center md:gap-8">
        <div className="lg:w-1/2 ">
          <div className="flex gap-2 md:flex-gap-4 px-4 pb-6">
            <h1 className="text-3xl  md:text-6xl font-mono ">Hi all, I'm Sunil</h1>
            <img
              className="w-9 h-8 md:w-16 md:h-14 animate-handMovement lg:my-6"
              src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
              alt=""
            />
          </div>
          <p className="text-1xl  md:text-2xl font-serif px-4 ">
            A passionate Full Stack Software Developer 🚀 having an experience of building Web
            and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool
            libraries and frameworks.
          </p>
          <div className="p-3 px-6 md:m-6 md:mx-12 flex gap-4">
            <a href="https://github.com/Sunilverma99">  <div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-slate-600 text-white items-center justify-center p-1 md:p-2  hover:bg-black">
              <FaGithub className="w-4 h-4 md:w-8 md:h-8" />
            </div></a>
          <a href="https://www.linkedin.com/in/sunil-verma-b7985024a/"><div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-blue-400 items-center justify-center p-1 md:p-2 hover:bg-black hover:text-white">
              <FaLinkedinIn className="w-4 h-4 md:w-8 md:h-8" />
            </div></a>
            <a href="#contact"><div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-orange-500 text-white items-center justify-center p-1 md:p-2 hover:bg-black">
              <MdOutlineEmail className="w-4 h-4 md:w-8 md:h-8" />
            </div></a>
            <a href="https://twitter.com/SunilVerma74513"><div className="rounded-full w-6 h-6 md:w-12 md:h-12 bg-gray-600 text-white items-center justify-center p-1 md:p-2 hover:bg-black">
              <FaXTwitter  className="w-4 h-4 md:w-8 md:h-8" />
            </div></a>
            
          </div>
          <div className="flex gap-4 px-5 md:px-10">
            <Link href="#contact">
            <button className="px-2 md:px-4 md:py-2 py-1 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Contact me
            </button></Link>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="px-2 md:px-4 md:py-2 py-1 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              See my resume
            </a>
          </div>
        </div>
        <div>
    <img className="rounded-full p-4  md:block" src="https://manojres.vercel.app/static/images/about.gif" alt="" />
</div>

      </div>
    </div>
  );
}

export default FrontPage;
