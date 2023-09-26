import React from "react";
import Jumping from "../../components/assets/Experiments.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Circular from "../assets/circular-img.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <main className="w-full h-screen inline-block z-0 bg-gray-900 text-light p-10">
      <div className="flex flex-col  xl:flex-row items-center justify-between w-full h-full  ">
        <div className="  xl:w-1/2 sm:w-[70%] lg:h-full sm:h-[40%] h-[40%] w-[90%]  xl:h-full   md:p-8 p-0 ">
          <div className="relative  w-full h-full  ">
            <Image
              src={Jumping}
              alt="Codevoid"
              className="absolute lg:top-[50%] top-[55%]  lg:p-10 md:p-2 p-0 -translate-y-[50%]"
            />
          </div>
        </div>

        <div className=" relative w-full  lg:w-1/2 h-[60%] xl:text-left text-center  ">
          <div className="  h-full top-[50%]  ">
            {" "}
            <div className=" absolute  w-full xl:top-[50%] sm:top-[40%] top-[30%] -translate-y-[50%]">
              <p className="text-sm font-bold text-slate-400">! Hello, I am</p>
              <h2 className="cursive-heading2 sm:text-8xl text-6xl  text-slate-200 ">
                Vishal Kr. Singh
              </h2>
              <h1 className=" mt-5  sm:text-xl text-lg font-medium ml-2 sm:text-slate-300 text-slate-400">
                Full Stack Web & App Developer
              </h1>
              <div className="flex gap-5 mt-5 ml-2 xl:justify-start justify-center">
                <div
                  onClick={() => console.log("button clicked")}
                  className="p-3 px-5 bg-slate-800 text-light rounded-lg hover:bg-slate-700 hover:text-light border-2 border-slate-400 hover:border-slate-200 cursor-pointer transition 1s ease-in"
                >
                  <h3> Resume &#128279;</h3>
                </div>
                <div className="pt-3 rounded-md cursor-pointer text-slate-400 hover:text-light">
                  <p>Contact me.</p>
                </div>
              </div>
              <div className="absolute cursor-pointer overflow-hidden sm:w-48 w-36  sm:h-48 h-36 xl:right-[8rem] lg:-right-[7rem] right-[50%] translate-x-[50%] lg:translate-x-0  xl:-bottom-[5rem] lg:bottom-[16rem] sm:-bottom-[12rem] -bottom-[10rem] brightness-50 ">
                <FontAwesomeIcon
                  className="absolute rotate-45 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
                  icon={faArrowLeft}
                  style={{ fontSize: 40, color: "white" }}
                />
                <Image
                  src={Circular}
                  className=" invert grayscale animate-spin "
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
