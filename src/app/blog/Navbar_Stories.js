"use client";

import {
  faBars,
  faSearch,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar_Stories = () => {
  const [nav, setnav] = useState(false);

  const Setnavhandler = () => {
    if (nav === true) {
      setnav(false);
    } else {
      setnav(true);
    }
  };

  const onClickHandler = () => {
    setnav(false);
  };

  return (
    <main className="w-screen h-full  bg-gray-900 z-50">
      <div className="fixed  w-full bg-gray-900 justify-between items-center px-8 py-4 h-[10] flex flex-row z-50">
        <div className="home_heading text-3xl">Blog</div>
        <span className="md:block hidden">
          <input
            className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-10 w-80 indent-2"
            type="text"
            placeholder="search key phrases, titles, headings"
          />
          <span className="h-10 bg-slate-800 p-[0.75rem] text-xs  rounded-md cursor-pointer border border-slate-700 hover:border-slate-100">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </span>
        <div className="lg:block hidden">
          <ul className="flex flex-row gap-4 text-gray-400 mr-4 z-50">
            <li className="hover:text-slate-300 cursor-pointer scroll-smooth">
              <a href="/blog">Blogs</a>
            </li>

            {/* <li className="hover:text-slate-300 cursor-pointer">
              <a href="/">Portfolio</a>
            </li> */}
            <li className="hover:text-slate-300 cursor-pointer">
              {" "}
              <FontAwesomeIcon icon={faSun} />
            </li>
          </ul>
        </div>
        {nav === false ? (
          <div
            onClick={() => Setnavhandler()}
            className=" w-12 h-12 rounded-full overflow-hidden p-3 lg:hidden block z-50"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 26, color: "white" }}
            />
          </div>
        ) : (
          <div
            onClick={() => Setnavhandler()}
            className=" w-12 h-12 rounded-full overflow-hidden p-3 lg:hidden block z-50"
          >
            <FontAwesomeIcon
              icon={faXmark}
              style={{ fontSize: 26, color: "white" }}
            />
          </div>
        )}

        <div
          className={`  m-2vw w-screen px-[25%] py-[20%] h-[92vh]  rounded-lg backdrop-blur-xl top-[8vh] left-0 absolute ${
            nav !== true ? "hidden" : "block"
          } `}
        >
          <div className="  w-full h-full  ">
            <ul className="flex flex-col items-center justify-center text-5xl gap-8  text-white">
              <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="/blog">
                  Blogs
                </a>
              </li>

              {/* <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="#Podcast">
                  Podcast
                </a>
              </li> */}
              {/* <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="#Reviews">
                  Reviews
                </a>
              </li> */}
              {/* <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="#Subscription">
                  Subscription
                </a>
              </li> */}
              <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="/">
                  Portfolio
                </a>
              </li>
              <span className="flex">
                <input
                  className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-10 w-80 indent-2"
                  type="text"
                  placeholder="search key phrases, titles, headings"
                />
                <span className="h-10 bg-slate-800 p-[0.75rem] text-xs  rounded-md cursor-pointer border border-slate-700 hover:border-slate-100">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar_Stories;
