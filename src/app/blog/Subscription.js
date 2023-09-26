import React from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Subscription = () => {
  return (
    <div id="Subscription" className=" relative w-screen h-[100vh] ">
      <div className="absolute w-full text-center top-[50%] -translate-y-[50%]">
        <h1 className="home_heading text-5xl mb-4">Do you want more ?</h1>
        <p className="px-[2rem]  text-sm text-gray-400 mb-4">
          Ready to learn more? Dive into a world of playful, exciting, and
          interesting experience of my personal journey in the world of Tech.
        </p>
        <span className="text-center">
          <input
            className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-12 w-80 indent-2"
            type="text"
            placeholder="Email-Id"
          />
          <p className="h-full w-40 bg-slate-800 p-2.5 ml-[50%] mt-4 -translate-x-[50%] rounded-md cursor-pointer border border-slate-700 hover:border-slate-100">
            <FontAwesomeIcon icon={faSearch} /> &nbsp; Subscribe
          </p>
        </span>
      </div>
    </div>
  );
};

export default Subscription;
