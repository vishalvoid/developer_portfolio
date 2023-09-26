import React from "react";
import Image from "next/image";
import Gamestation from "../assets/Gamestation.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <main className="w-full h-full inline-block z-0 bg-gray-900 text-light xl:p-10 p-0">
      <div className="flex w-9/12 h-5/6  m-auto mt-16  xl:flex-row flex-col gap-2 md:gap-0">
        <div className="xl:w-6/12 xl:h-full h-3/6  flex justify-around items-center xl:hidden">
          <Image
            className="brightness-200 h-full w-full  "
            src={Gamestation}
            alt="Experience_img"
          />
        </div>
        <div className="xl:w-6/12 xl:h-full h-3/6 ">
          <div className="flex justify-center   border-l border-slate-700 h-full flex-col ">
            <div className="w-full h-2/6 flex ">
              <div className="w-10 h-10  overflow-hidden p-2 rounded-full -translate-x-[50%] -translate-y-1 bg-slate-800  ">
                <FontAwesomeIcon
                  className="h-full w-full  "
                  icon={faUser}
                  style={{ fontSize: 15, color: "white" }}
                />
              </div>
              <div className="border h-5/6 w-full rounded-lg border-slate-700 p-4 flex flex-col gap-1 overflow-auto">
                <div className="flex justify-between">
                  <div className="text-md text-slate-200">PSS Technologies</div>
                  <div className="text-xs text-slate-400 font-sans mt-1">
                    09.23 - Present
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  Web Developer Intern ( fullstack )
                </div>
                <ul>
                  <li className="text-[10px] text-slate-500 sm:block hidden">
                    Implemented full stack chat application which stores real
                    time data in mongoDB database. along with realtime
                    communication with socket.io
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-2/6 flex direction-cols">
              <div className="w-10 h-10  overflow-hidden p-2 rounded-full -translate-x-[50%] -translate-y-1 bg-slate-800  ">
                <FontAwesomeIcon
                  className="w-full h-full "
                  icon={faUser}
                  style={{ fontSize: 15, color: "white" }}
                />
              </div>
              <div className="border h-5/6 w-full rounded-lg overflow-auto border-slate-700 p-4 flex flex-col gap-1">
                <div className="flex justify-between">
                  <div className="text-md text-slate-200">Codemix</div>
                  <div className="text-xs text-slate-400 font-sans mt-1">
                    04.23 - 08.23
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  Web Developer Intern ( fullstack )
                </div>
                <ul>
                  <li className="text-[10px] text-slate-500 sm:block hidden">
                    Developed a GeoLocation app & Designed an authentication
                    system for HR management and service applications with
                    hierarchical user creation and real-time monitoring.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-2/6 flex direction-cols">
              <div className="w-10 h-10  overflow-hidden p-2 rounded-full -translate-x-[50%] -translate-y-1 bg-slate-800  ">
                <FontAwesomeIcon
                  className="w-full h-full "
                  icon={faUser}
                  style={{ fontSize: 15, color: "white" }}
                />
              </div>
              <div className="border h-5/6 w-full rounded-lg overflow-auto border-slate-700 p-4 flex flex-col gap-1">
                <div className="flex justify-between">
                  <div className="text-md text-slate-200">JP Foundation</div>
                  <div className="text-xs text-slate-400 font-sans mt-1">
                    11.22 - 03.23
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  Frontend Developer ( Freelance )
                </div>
                <ul>
                  <li className="text-[10px] text-slate-500 sm:block hidden">
                    Created and simple but beautifull website for a NGO
                    Jayaprakash Narayan Foundation (central govt. undertaking)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-6/12 xl:h-full h-3/6   justify-around items-center xl:flex hidden">
          <Image
            className="brightness-200 h-full w-full "
            src={Gamestation}
            alt="Expericnce_h_img"
          />
        </div>
      </div>
    </main>
  );
};

export default Experience;
