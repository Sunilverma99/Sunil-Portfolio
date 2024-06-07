"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

function FifthPage() {
  return (
    <div id="projects" className="bg-gray-950 pt-10">
      <h1 className="text-5xl text-center font-bold p-4 text-white">Projects</h1>
      <div className="flex gap-10 flex-wrap justify-center">
      <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Dialogflow </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Experience instant connectivity with our real-time messaging app powered by Socket.IO. Know who are online and chat with them effortlessly. Enjoy secure communication with end-to-end encryption.Personalize your experience for seamless communication anytime, anywhere.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/Screenshot 2024-06-02 120853.png"
                height="600"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Website link →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://dialogflow-1-5zz1.onrender.com">
                  click here
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Blog Application
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Welcome to our blog application, where creativity meets connectivity. With intuitive design, seamless social integration, and powerful customization options, our platform empowers users to share their stories and engage with a global audience effortlessly.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src="/blog-application.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                website link →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://blog-application-o4u3.onrender.com/">
                  click here
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Real Estate Company
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Welcome to CashShift, your premier destination for real estate solutions. With our expert agents, personalized service, and a commitment to exceeding expectations, we turn your property dreams into reality.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/epicHeaven.png"
                height="600"
                width="500"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Github link →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/Sunilverma99/EpicHeaven.git">
                  click here
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Hostel Management app
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Discover our easy-to-use hostel management app designed specifically for your college. Simplify hostel tasks, from room allocation to maintenance, for both students and administrators. Say goodbye to hassle and hello to efficiency with our intuitive solution.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/Hostel Mangement app.png"
                height="600"
                width="500"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                GitHub link →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/Sunilverma99/HiveStay.git">
                  click here
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

       
      </div>
    </div>
  );
}

export default FifthPage;
