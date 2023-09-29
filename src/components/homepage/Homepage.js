import React from "react";
import Jumping from "../../components/assets/Experiments.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Circular from "../assets/circular-img.png";
import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Homepage = () => {
  return (
    <main className="w-full h-screen inline-block z-0 bg-gray-900 text-light p-10">
      <div className="flex flex-col  xl:flex-row items-center justify-between w-full h-full  ">
        <div className="  xl:w-1/2 sm:w-[70%] lg:h-full sm:h-[50%] h-[40%] w-[90%]  xl:h-full   md:p-8 p-0 ">
          <div className="relative  w-full h-full  ">
            {(
              <Image
                src={Jumping}
                alt="Codevoid"
                className="absolute lg:top-[50%] top-[75%]  lg:p-10 md:p-2 p-0 -translate-y-[50%]"
              />
            ) || (
              <SkeletonTheme baseColor="#111828" highlightColor="#212a40">
                <Skeleton className="w-full h-full" />
              </SkeletonTheme>
            )}
          </div>
        </div>

        <div className=" relative w-full  lg:w-1/2 h-[50%] xl:text-left text-center  ">
          <div className="  h-full top-[50%]  ">
            {" "}
            <div className=" absolute  w-full xl:top-[50%] sm:top-[40%] top-[30%] -translate-y-[50%]">
              <p className="text-sm font-light text-slate-400">Hello, I'm</p>
              <h2 className="cursive-heading2 sm:text-8xl text-6xl  text-slate-200 ">
                Vishal Kr. Singh
              </h2>
              <h1 className=" mt-5  sm:text-xl text-lg md:font-normal font-light ml-2 sm:text-slate-300 text-slate-400">
                Full Stack Web & App Developer
              </h1>
              <div className="flex gap-5 mt-5 ml-2 xl:justify-start justify-center">
                <div
                  onClick={() => console.log("button clicked")}
                  className="p-3 px-5 bg-slate-900 text-light rounded-lg hover:bg-slate-950 hover:text-light border  border-slate-400 hover:border-slate-200 cursor-pointer transition 1s ease-in"
                >
                  <Link href="./vishal_resume.pdf" target={"_blank"}>
                    Resume <FontAwesomeIcon icon={faDownload} />
                  </Link>
                </div>

                <div className="pt-3 rounded-md cursor-pointer text-slate-400 hover:text-light">
                  <a href="#contact">Contact me</a>
                </div>
              </div>
              <div className="absolute cursor-pointer overflow-hidden md:w-40 md:h-40 sm:w-32   sm:h-32 w-24 h-24 xl:right-[8rem] lg:-right-[7rem] sm:right-[6rem] right-[2rem] translate-x-[50%] lg:translate-x-0  xl:-bottom-[5rem] lg:bottom-[18rem] md:bottom-[12rem] sm:bottom-[16.5rem] bottom-[15rem]  brightness-50 md:z-0 -z-30 ">
                <FontAwesomeIcon
                  className="absolute xl:rotate-45 -rotate-45  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] md:text-[40px] sm:text-[25px]"
                  icon={faArrowLeft}
                  style={{ color: "white" }}
                />
                <Image
                  src={Circular}
                  className=" invert grayscale animate-spin "
                  alt="Hero_svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
