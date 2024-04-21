"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
 
function FourthPage() {
  return (
    <TracingBeam className="px-6 mt-4">
    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
       <h1 className=" text-6xl m-4 ">Education</h1>
       <div className="flex gap-3 m-6">
          <div className="">
            <img className="rounded-3xl" src="data:image/jpeg;base64,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" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Indian Institute of Information Technology(IIIT) Una, Himachal Pradesh</h1>
            <h3 className="text-xl font-serif">Bachelor of Technology in Electronic and Communication </h3>
            <h4 className=" text-gray-500 text-sm">November 2022 - June 2026</h4>
            <p className="">Ranked top 10% in the program. Took courses about Software Engineering, Web development, Operating Systems, ...</p>
             <ul className=" list-disc px-10">
              <li>Volunteer in Astral Club. </li>
              <li>Member of college kabaddi team.</li>
             </ul>
          </div>
       </div>
       <div className="flex gap-3 m-6">
          <div className="">
            <img className="rounded-3xl w-36 h-32" src="https://content.jdmagicbox.com/comp/hissar/n2/9999p1662.1662.221020230023.c6n2/catalogue/government-senior-secondary-school-bass-hissar-schools-zuxzayrmwk.jpg" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Goverment Senior Secondary School,Hisar</h1>
            <h3 className="text-xl font-serif"> 12th</h3>
            <h4 className=" text-gray-500 text-sm">May 2020 - March 2024</h4>
            <p className="">Ranked top 2% in the class. Particpate in cultural program and sports.</p>
             <ul className=" list-disc px-10">
              <li>Captain of school kabaddi team. </li>
             </ul>
          </div>
       </div>
    </div>
  </TracingBeam>
  )
}

 


export default FourthPage