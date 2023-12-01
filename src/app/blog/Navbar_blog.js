"use client";

import { faBars, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar_blog = () => {
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
    <main className="w-screen h-full bg-gray-900 z-50">
      <div className="fixed  w-full bg-gray-900 justify-between items-center px-8 h-[10vh] flex flex-row z-50">
        <div className="home_heading text-3xl">
          Vish. <span className="font-sans font-thin"> (Blog Secion)</span>
        </div>
        <div className="lg:block hidden">
          <ul className="flex flex-row gap-4 text-gray-400 mr-4 z-50">
            <li className="hover:text-slate-300 cursor-pointer scroll-smooth">
              <a href="#Blogs">Blog</a>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <a href="#Podcast">Podcast</a>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              {" "}
              <a href="#Reviews">Reviews</a>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <a href="#Subscription">Subscription</a>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <a href="/">Portfolio</a>
            </li>
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
                <a onClick={() => onClickHandler()} href="#Blogs">
                  Blog
                </a>
              </li>

              <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="#Podcast">
                  Podcast
                </a>
              </li>
              <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="#Reviews">
                  Reviews
                </a>
              </li>
              <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="#Subscription">
                  Subscription
                </a>
              </li>
              <li className="cursor-pointer hover:text-slate-400 transition home_heading ease-in duration-150">
                <a onClick={() => onClickHandler()} href="/">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar_blog;
