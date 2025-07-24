"use client";

import React, { useState } from "react";
import Image from "next/image";
import Astro from "../assets/Astro.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const About = () => {
  const [toggle, setToggle] = useState("false");

  const toggleHandler = () => {
    console.log(toggle);
    if (toggle === "false") {
      setToggle("true");
    } else {
      setToggle("false");
    }
  };

  return (
    <main className="w-full  h-full inline-block z-0 bg-gray-900 text-light sm:p-10 p-0">
      <div className="flex  lg:flex-row flex-col w-9/12 h-5/6  m-auto mt-12 sm:gap-8 gap-2">
        <div className="lg:w-6/12 w-full h-full  flex justify-around items-center">
          {(
            <Image
              className="brightness-200 h-fit "
              src={Astro}
              alt="about-svg"
            />
          ) || (
            <SkeletonTheme baseColor="#111828" highlightColor="#212a40">
              <Skeleton className="w-full h-full" />
            </SkeletonTheme>
          )}
        </div>
        <div className="lg:w-6/12 w-full h-full xl:p-6 p-2 flex flex-col justify-around">
          <div className="tracking-wider items-center   text-justify text-gray-300 text-xs leading-7">
            {toggle === "false" ? (
              <span>
                I am a passionate and skilled{" "}
                <span className="font-bold">Software Developer</span>{" "}
                specializing in <span className="font-bold">Mobile</span> and{" "}
                <span className="font-bold">Web Development</span> with a strong
                dedication to quality and{" "}
                <span className="font-bold">attention to detail</span>. I am
                constantly seeking new{" "}
                <span className="font-bold">challenges</span> and opportunities
                to improve my craft. I stay updated with the latest industry
                trends and best practices by attending conferences, taking
                online courses, and{" "}
                <span className="font-bold">experimenting</span> with new{" "}
                <span className="font-bold">technologies</span>. I build{" "}
                <span className="font-bold">functional</span>,{" "}
                <span className="font-bold">beautiful</span> and{" "}
                <span className="font-bold">user-friendly</span>
                designs. My commitment to innovation ensures that clients
                receive
                <span className="font-bold"> cutting-edge</span> and{" "}
                <span className="font-bold">effective solutions</span>.
              </span>
            ) : (
              <span>
                <p className="my-1 w-full">I work hard and play hard</p>
                <p className="my-1 w-full">I play games and watch series</p>
                <p className="my-1 w-full">I love reading books</p>
                <p className="my-1 w-full">I am always improving myself</p>
                <p className="my-1 w-full">I am always learning and updating</p>
                <p className="my-1 w-full">looking to meet new people</p>
                <p className="my-1 w-full">open source contributions</p>
                <p className="my-1 w-full">open source contributions</p>
              </span>
            )}

            <div className="flex justify-between mt-3 text-sm ">
              <button
                // onClick={(events) => console.log("bad")}
                className=" bg-slate-800 hover:bg-slate-700 xl:px-12 px-6 py-3 rounded-full transition duration-150 ease-in-out"
              >
                <a href="#tree">Qualification</a>
              </button>
              <button className=" border border-slate-700 hover:border-slate-600 xl:px-8 px-4 py-2 rounded-full">
                <a href="#contact">Contact</a>
              </button>
              <button
                onClick={toggleHandler}
                className=" px-4 py-2 rounded-full"
              >
                {toggle === "true" ? "   Text" : "TL;DR"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
