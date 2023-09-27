"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Blog_content_buttons = (params) => {
  const [showSubscription, setshowSubscription] = useState(false);
  const router = useRouter();

  var newlocation = parseInt(params.params);

  const SubscriptionHandlerOnclick = () => {
    if (showSubscription === false) {
      setshowSubscription(true);
    } else {
      setshowSubscription(false);
    }
  };

  const leftClickHandler = () => {
    if (newlocation <= 1) {
      newlocation = 8;
    } else {
      newlocation = newlocation - 1;
    }
    console.log(newlocation);
    router.push(`/blog/${newlocation}`);
  };
  const rightClickHandler = () => {
    if (newlocation >= 8) {
      newlocation = 1;
    } else {
      newlocation = newlocation + 1;
    }
    console.log(newlocation);
    router.push(`/blog/${newlocation}`);
  };

  return (
    <>
      <div className="flex justify-between py-1 text-slate-400 px-2">
        <div className="flex gap-4 ">
          <div
            onClick={() => leftClickHandler()}
            className="border hover:bg-slate-700 hover:text-slate-400 transition ease-in duration-100 cursor-pointer border-slate-700 rounded-lg w-10 h-10 text-center relative   text-[2rem] "
          >
            <FontAwesomeIcon
              icon={faCaretLeft}
              className=" absolute top-[50%] -translate-y-[50%] -translate-x-[50%]  "
            />
          </div>
          <div
            onClick={() => rightClickHandler()}
            className="border hover:bg-slate-700 hover:text-slate-400 transition ease-in duration-100 cursor-pointer border-slate-700 rounded-lg w-10 h-10 text-center relative   text-[2rem]"
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              className=" absolute top-[50%] -translate-y-[50%] -translate-x-[50%]  "
            />
          </div>
        </div>
        <div
          onClick={() => SubscriptionHandlerOnclick()}
          className="border hover:bg-slate-700 hover:text-slate-400 transition ease-in duration-100 cursor-pointer border-slate-700 rounded-lg w-10 h-10 text-center relative   text-[1.2rem]"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className=" absolute top-[50%] -translate-y-[50%] -translate-x-[50%]  "
          />
        </div>
      </div>
      <div className="flex justify-between text-slate-800 ">
        <div className=" flex gap-1 text-xs">
          {newlocation === 1 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 2 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 3 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 4 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 5 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 6 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 7 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
          {newlocation === 8 ? (
            <FontAwesomeIcon icon={faCircle} className="text-slate-400" />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </div>
        <p className="text-slate-400 text-sm"> Episode {newlocation} of 8</p>
      </div>
      <div
        className={` ${
          showSubscription === true ? "fixed z-20 " : "hidden -z-10"
        }   w-screen h-screen top-0 left-0  backdrop-blur-md`}
      >
        <div className="absolute p-8 bg-slate-900 rounded-lg md:w-[25rem] w-[22rem] h-[15rem] border border-slate-700 z-30 top-[30%] left-[50%] -translate-x-[50%]">
          <div className="flex justify-between">
            <div>Email Subscription</div>
            <div
              onClick={() => SubscriptionHandlerOnclick()}
              className="px-[8px] py-[1px] border rounded-sm cursor-pointer hover:bg-white hover:text-black"
            >
              x
            </div>
          </div>
          <p className="py-2 text-xs">
            You will get this write up and subsequent blogs and notifications to
            your email.
          </p>
          <p className="text-xs text-slate-400">Email</p>
          <div>
            <input
              className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-10 w-full indent-2"
              type="text"
              placeholder="Don't worry! Won't Spam"
            />
            <p className="text-center py-4 cursor-pointer">Subscribe</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_content_buttons;
