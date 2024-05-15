"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


const data = [
  {
    image: "/skills/skill1-removebg-preview.png",
    skill: "React"
  },
  {
    image: "/skills/html-removebg-preview.png",
    skill: "HTML"
  },
  {
    image: "/skills/css-removebg-preview.png",
    skill: "CSS"
  },
  {
    image: "/skills/javascript-removebg-preview.png", 
    skill: "JavaScript"  
  },
  {
    image: "/skills/nodesjs-removebg-preview.png", 
    skill: "Node js"  
  } ,
  {
    image: "/skills/java-removebg-preview.png", 
    skill: "Java"  
  },
  {
    image: "/skills/firebase-removebg-preview.png", 
    skill: "Firebase"  
  } ,
  {
    image: "/skills/aws-removebg-preview.png", 
    skill: "Aws"  
  },
  {
    image: "/skills/postman-removebg-preview.png", 
    skill: "Postman"  
  },
  {
    image: "/skills/typesrcipt-removebg-preview.png", 
    skill: "Typescript"  
  } ,
  {
    image: "/skills/python-removebg-preview.png", 
    skill: "Python"  
  },
 
]
