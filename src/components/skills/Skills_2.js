import React, { useState } from "react";
import Waiting from "../assets/Waiting.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faClipboardCheck,
  faGlobe,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Skills_2 = () => {
  const [counterOn, setcounterOn] = useState(false);
  console.log(counterOn);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <main className="w-full h-screen inline-block z-0 bg-gray-900 text-light p-10">
        <div className="flex lg:flex-row flex-col lg:w-9/12 w-full lg:h-5/6 h-full  m-auto lg:mt-16 mt-4 ">
          <div className=" lg:w-6/12 w-full lg:h-full h-1/2  flex justify-around items-center">
            <Image
              className="brightness-200 h-full "
              src={Waiting}
              alt="Skills_img"
            />
          </div>

          <div className=" relative lg:w-6/12 w-full h-full ">
            <div className="absolute flex justify-center lg:px-38 px:0 lg:w-full w-full   lg:top-[50%]  lg:-translate-y-[50%] lg:left-0 lg:translate-x-0 left-[50%] -translate-x-[50%] ">
              <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
                <div
                  class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[180px] md:w-[180px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
                >
                  <div className="xl:block hidden">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </div>
                  <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                    <h1 class="text-5xl  font-sans font-bold lg:mt-4">
                      <CountUp start={0} end={6} duration={2} delay={0} />
                    </h1>
                    <p class="text-sm font-normal mt-1 font-raleway text-slate-400 ">
                      Satisfied Costumers
                    </p>
                  </div>
                </div>
                <div
                  class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[180px] md:w-[180px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
                >
                  <div className="xl:block hidden">
                    <FontAwesomeIcon
                      icon={faClipboardCheck}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </div>
                  <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                    <h1 class="text-5xl  font-sans font-bold lg:mt-4">
                      <CountUp start={0} end={11} duration={2} />
                    </h1>
                    <p class="text-sm font-normal mt-1 font-raleway text-slate-400 ">
                      Projects Completed
                    </p>
                  </div>
                </div>
                <div
                  class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[180px] md:w-[180px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
                >
                  <div className="xl:block hidden">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </div>
                  <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                    <h1 class="text-5xl  font-sans font-bold lg:mt-4">
                      <CountUp start={0} end={50} duration={2} />
                    </h1>
                    <p class="text-sm font-normal mt-1 font-raleway text-slate-400 ">
                      Web Pages
                    </p>
                  </div>
                </div>
                <div
                  class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[180px] md:w-[180px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
                >
                  <div className="xl:block hidden">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </div>

                  <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                    <h1 class="text-5xl  font-sans font-bold lg:mt-4">
                      <CountUp start={0} end={2} duration={2} />
                    </h1>
                    <p class="text-sm font-normal mt-1 font-raleway text-slate-400 ">
                      Companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ScrollTrigger>
  );
};

export default Skills_2;
