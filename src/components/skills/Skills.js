import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import {
  faArrowPointer,
  faArrowsTurnToDots,
  faCode,
  faComments,
  faLightbulb,
  faMobile,
  faPeopleGroup,
  faPuzzlePiece,
  faServer,
  faSquarePollHorizontal,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [toggleSkills, settoggleSkills] = useState(true);

  const toggleHandlerTrue = () => {
    settoggleSkills(true);
    console.log("true" + toggleSkills);
  };

  const toggleHandlerFalse = () => {
    settoggleSkills(false);
    console.log("false" + toggleSkills);
  };
  return (
    <main className="relative w-full h-full inline-block z-0 bg-gray-900 text-light   flex-col  ">
      <div className="absolute w-[100vw]  top-[50%] -translate-y-[50%]">
        <div className=" flex justify-center gap-5   ">
          <button
            onClick={toggleHandlerTrue}
            className={`text-slate-300 border inline-block py-2 px-4 rounded-md text-sm border-slate-800 hover:border-slate-800  ${
              toggleSkills === true ? " bg-slate-800" : ""
            }`}
          >
            Coding Skills
          </button>
          <button
            onClick={toggleHandlerFalse}
            className={`text-slate-200 hover:text-slate-50 border inline-block py-2  rounded-md text-sm border-slate-800 hover:border-slate-800 px-3  ${
              toggleSkills === false ? " bg-slate-800" : ""
            }`}
          >
            Soft Skills
          </button>
        </div>

        {toggleSkills ? (
          <div className="flex justify-center xl:px-38 md:px-10 px-1  ">
            <div className="grid md:grid-rows-2 grid-rows-3 md:grid-cols-3 grid-cols-2 gap-4 p-4">
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faArrowPointer}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Frontend</div>
                    <div>Development &nbsp;&nbsp;&nbsp;&nbsp;</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden ">
                    I bring ideas to life in the browser, coding from scratch.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faCode}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Backend</div>
                    <div>Development</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden ">
                    Building Powerful architecture and and sclable logic from
                    scratch.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faServer}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Hosting &</div>
                    <div>Deployement</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    Optimum deployments and reliable hosting for webapps.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faSquarePollHorizontal}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Web</div>
                    <div>Applications</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    I bring ideas to life in the browser, coding from scratch.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>API</div>
                    <div>Development</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    I bring ideas to life in the browser, coding from scratch.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faMobile}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Mobile</div>
                    <div>Applications</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    I bring ideas to life in the browser, coding from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center xl:px-38 md:px-10 px-1">
            <div className="grid md:grid-rows-2 grid-rows-3 md:grid-cols-3 grid-cols-2 gap-4 p-4">
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faComments}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Effective</div>
                    <div>Communication</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    Effective and clear exchange of communication and idea.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Smart</div>
                    <div>Collaboration</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    Working effectively & prodictively in team Environment.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faArrowsTurnToDots}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Easy</div>
                    <div>Adaptability</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    willing to change in order to suit different conditions
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faSquarePollHorizontal}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Time</div>
                    <div>Management</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    Effeciently Organising and Priotising One task over other.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faTrophy}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Problem</div>
                    <div>Solving</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    Love to go through median and rough terains of dev realm.
                  </p>
                </div>
              </div>
              <div
                class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-4 md:p-6 space-x-0 sm:space-x-6 md:space-x-0 
                     w-full h-full md:h-[200px] md:w-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] border bg-black dark:bg-slate-800 text-white dark:text-neutral-400   hover:border-slate-200 dark:border-slate-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faLightbulb}
                  style={{ fontSize: 30, color: "white" }}
                />
                <div class="md:absolute bottom-6 left-6 mt-6 md:mt-0">
                  <h1 class="text-md font-sans font-normal lg:mt-4">
                    <div>Creative</div>
                    <div> & Inovative</div>
                  </h1>
                  <p class="text-[10px] mt-1 font-raleway text-gray-300 lg:block hidden">
                    ovserving everyone&#39;s thinking and realizing what no one has
                    thought
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Skills;
