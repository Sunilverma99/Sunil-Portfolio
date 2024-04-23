"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5"
function SixthPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className='w-full '>
      <div className='flex gap-4 text-center'>
        <div className="w-1/2 m-4 my-24  ">
        <div className=" max-w-2xl w-full  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      CONTACT WITH ME
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
      </p>
 
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Sunil" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Verma" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="sunil@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 border-fuchsia-300">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-cyan-800" placeholder="Write your message here..."></textarea>

        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Message
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
        </div>
        <div>
        <div className="flex flex-col gap-10 justify-center text-center  mx-auto">
          <div className="flex justify-center items-center text-center my-10 ">
          <img
          src={"/Sunilverma.jpeg"}
            className=" rounded-full shadow-lg w-52 h-52 object-cover"
            alt="Avatar" />
          </div>
        
            <div className="flex gap-3  items-center">
              <div className="w-16 h-16  rounded-full p-1 hover:bg-emerald-500"><MdAlternateEmail className=" w-14  h-14"/></div>
            <h1 className="text-2xl ">sv784333@gmail.com</h1>
            </div>
            <div className="flex gap-3  items-center">
              <div className="w-16 h-16  rounded-full p-3 hover:bg-emerald-500"><FaPhoneAlt className=" w-10  h-10"/></div>
            <h1 className="text-2xl ">7027299219</h1>
            </div>
            <div className="flex gap-3  items-center">
              <div className="w-16 h-16  rounded-full p-1 hover:bg-emerald-500"><IoLocationSharp  className=" w-14  h-14"/></div>
            <h1 className="text-2xl ">Fransi,Hisar,Haryana -125052</h1>
            </div>
            <div className="flex gap-16">
            <div className="w-16 h-16 bg-slate-400 rounded-full p-2 hover:bg-emerald-500"> <FaGithub className="w-12 h-12" /></div>
            <div className="w-16 h-16 bg-slate-400 rounded-full p-2 hover:bg-emerald-500"> <FaLinkedin  className="w-12 h-12" /></div>
            <div className="w-16 h-16 bg-slate-400 rounded-full p-2 hover:bg-emerald-500"> <FaXTwitter className="w-12 h-12" /></div>
            <div className="w-16 h-16 bg-slate-400 rounded-full p-2 hover:bg-emerald-500"> <IoLogoInstagram  className="w-12 h-12" /></div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default SixthPage