"use client";
import React from "react";

function ThirdPage() {
  return (
    <div className="mx-auto bg-slate-950">
      <div className="md:flex md:gap-10 md:justify-center items-center">
        <div className="md:w-1/2 flex flex-col gap-10 p-10">
          <h1 className="text-6xl text-white">Proficiency</h1>
          <div>
            <h3 className="text-xl text-white">Frontend</h3>
            <input
              type="range"
              min="0"
              max="100"
              value="60"
              disabled
              className="range range-primary w-full"
            />
          </div>
          <div>
            <h3 className="text-xl text-white">Backend</h3>
            <input
              type="range"
              min={0}
              max="100"
              defaultValue="80"
              disabled
              className="range range-primary w-full"
            />
          </div>
          <div>
            <h3 className="text-xl text-white">Programming</h3>
            <input
              type="range"
              min={0}
              max="100"
              defaultValue="70"
              disabled
              className="range range-primary w-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-10">
          <img
            className="rounded-xl bg-emerald-900 w-full h-full"
            src="https://assets-global.website-files.com/61ebe5f773be1acd620f8208/61fa29fc9bcfb5b44f022daa_mobile-app-developer.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
