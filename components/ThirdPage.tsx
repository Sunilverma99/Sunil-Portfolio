"use client";
import React from "react";
function ThirdPage() {
  return (
    <div className=' mx-auto   '>
      <div className=' md:flex md:gap-10 md:justify-center  items-center'>
        <div className='md:w-1/2  flex flex-col gap-10 p-10'>
          <h1 className='text-6xl '>Proficiency</h1>
          <div>
            <h3 className='text-xl'>Frontend</h3>
          <input type="range" min={0} max="100" defaultValue="60" className="range range-primary w-full" />
          </div>
          <div>
            <h3 className='text-xl'>Backend</h3>
          <input type="range" min={0} max="100" defaultValue="80" className="range range-primary w-full" />
          </div>
          <div>
            <h3 className='text-xl'>Programming</h3>
          <input type="range" min={0} max="100" defaultValue="70" className="range range-primary w-full" />
          </div>

        </div>
          <div className="md:w-1/2 p-10"  >
            <img className=' rounded-xl bg-emerald-900 w-full h-full' src="https://assets-global.website-files.com/61ebe5f773be1acd620f8208/61fa29fc9bcfb5b44f022daa_mobile-app-developer.gif" alt="" />
          </div>
       </div>
    </div>

  )
}

export default ThirdPage
