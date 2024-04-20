"use client";
import React from "react";
function ThirdPage() {
  return (
    <div className='w-full h-full mx-auto py-24   '>
      <div className='flex gap-10 justify-center  items-center'>
        <div className='w-1/2 flex flex-col gap-10 p-10'>
          <h1 className='text-6xl '>Proficiency</h1>
          <div>
            <h3 className='text-xl'>Frontend</h3>
          <input type="range" min={0} max="100" value="60" className="range range-primary w-full" />
          </div>
          <div>
            <h3 className='text-xl'>Backend</h3>
          <input type="range" min={0} max="100" value="80" className="range range-primary w-full" />
          </div>
          <div>
            <h3 className='text-xl'>Programming</h3>
          <input type="range" min={0} max="100" value="70" className="range range-primary w-full" />
          </div>

        </div>
          <div  >
            <img className=' rounded-full bg-emerald-900' src="https://assets-global.website-files.com/61ebe5f773be1acd620f8208/61f2a3e9991e875b765b8f2a_23491-robot-process-automation.gif" alt="" />
          </div>
       </div>
    </div>

  )
}

export default ThirdPage