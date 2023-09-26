import React from "react";
import Image from "next/image";
import Whoa from "../assets/Whoa.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandshake,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Link_tree = () => {
  return (
    <main className="w-full h-full inline-block z-0 bg-gray-900 text-light p-10">
      <div className="flex flex-col gap-4  xl:mt-[10rem] mt-[16rem]  w-[20rem] ml-[50%] -translate-x-[50%]">
        <div className="text-sm text-center py-3 bg-slate-600 hover:scale-110 transform ease-in-out duration-150 hover:bg-slate-950 hover:border-slate-500 cursor-pointer rounded-full border border-slate-600">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="ml-2">Send a Mail</span>{" "}
        </div>
        <div className="text-sm text-center py-3 hover:scale-110 transform ease-in-out duration-150 hover:bg-slate-950 hover:border-slate-500 cursor-pointer rounded-full border border-slate-600">
          <FontAwesomeIcon icon={faPhone} />
          <span className="ml-2">Place a call</span>{" "}
        </div>
        <div className="text-sm text-center py-3 hover:scale-110 transform ease-in-out duration-150 hover:bg-slate-950 hover:border-slate-500 cursor-pointer rounded-full border border-slate-600">
          <FontAwesomeIcon icon={faHandshake} />
          <span className="ml-2">Set a meeting</span>{" "}
        </div>
        <div className="text-sm text-center py-3 hover:scale-110 transform ease-in-out duration-150 hover:bg-slate-950 hover:border-slate-500 cursor-pointer rounded-full border border-slate-600">
          <FontAwesomeIcon icon={faUsers} />
          <span className="ml-2">Collaborate with me</span>{" "}
        </div>
      </div>
    </main>
  );
};

export default Link_tree;
