import React from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Blogpage_home = () => {
  return (
    <div className=" h-screen pt-[4rem] relative ">
      <div className="absolute w-screen text-center top-[50%] -translate-y-[50%] px-3 md:px-0  ">
        <h1 className="md:text-7xl text-5xl home_heading md:mb-4">
          Articles, Blogs,
        </h1>
        <h1 className="home_heading md:text-7xl text-5xl mb-4">
          Newsletters & Podcasts
        </h1>
        <p className="lg:px-[20rem] md:px-[10rem] px-[3rem]  text-sm text-gray-400 mb-4">
          Ready to learn more? Dive into a world of playful, exciting, and
          interesting experience of my personal journey in the world of Tech.
        </p>
        <span>
          <input
            className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-10 w-80 indent-2"
            type="text"
            placeholder="search key phrases, titles, headings"
          />
          <span className="h-full bg-slate-800 p-2.5 rounded-md cursor-pointer border border-slate-700 hover:border-slate-100">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Blogpage_home;
