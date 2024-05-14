
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import Link from "next/link";

function FrontPage() {
  const resumeUrl = "https://drive.google.com/file/d/1aWluGoppzU4qLS-uMjbvj7_VcJ-URYcc/view?usp=drivesdk"; // Replace with the URL of your resume PDF file

  return (
    <div className="w-full h-full mx-auto py-24">
      <div className="flex justify-center items-center">
        <div className="w-1/2 mx-auto">
          <div className="flex gap-4 px-4">
            <h1 className="text-6xl font-mono my-6 mx-6">Hi all, I'm Sunil</h1>
            <img
              className="w-18 h-16 animate-handMovement my-6"
              src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
              alt=""
            />
          </div>
          <p className="text-2xl font-serif px-4 m-6">
            A passionate Full Stack Software Developer 🚀 having an experience of building Web
            and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool
            libraries and frameworks.
          </p>
          <div className="m-6 mx-12 flex gap-4">
            <div className="rounded-full w-12 h-12 bg-slate-600 text-white items-center justify-center p-2 hover:bg-black">
              <FaGithub className="w-8 h-8" />
            </div>
            <div className="rounded-full w-12 h-12 bg-blue-400 items-center justify-center p-2 hover:bg-black hover:text-white">
              <FaLinkedinIn className="w-8 h-8" />
            </div>
            <div className="rounded-full w-12 h-12 bg-orange-500 text-white items-center justify-center p-2 hover:bg-black">
              <MdOutlineEmail className="w-8 h-8" />
            </div>
            <div className="rounded-full w-12 h-12 bg-blue-600 text-white items-center justify-center p-2 hover:bg-black">
              <LuFacebook className="w-8 h-8" />
            </div>
          </div>
          <div className="flex gap-4 p-8 py-2">
            <Link href="#contact">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Contact me
            </button></Link>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              See my resume
            </a>
          </div>
        </div>
        <div>
          <img className="rounded-full" src="https://manojres.vercel.app/static/images/about.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
