"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddReview = () => {
  const [showReview, setshowReview] = useState(false);

  const AddReviewhandler = () => {
    if (showReview === false) {
      setshowReview(true);
    } else {
      setshowReview(false);
    }
  };

  console.log(showReview);

  return (
    <div>
      <div
        onClick={() => AddReviewhandler()}
        className="border hover:bg-slate-700 hover:text-slate-400 transition ease-in duration-100 cursor-pointer border-slate-700 rounded-lg w-10 h-10 text-center relative   text-[1.2rem] mt-4"
      >
        <FontAwesomeIcon
          icon={faPlus}
          className=" absolute top-[50%] -translate-y-[50%] -translate-x-[50%]  "
        />
      </div>{" "}
      <div
        className={` ${
          showReview === true ? "fixed z-20 " : "hidden -z-10"
        } w-full h-full top-0 left-0  backdrop-blur-sm z-10`}
      >
        <div className="absolute p-8 bg-slate-900 rounded-lg md:w-[25rem] w-[22rem] h-[18rem] border border-slate-700 z-30 top-[15%] left-[50%] -translate-x-[50%]">
          <div className="flex justify-between">
            <div>leave a message</div>

            <div
              onClick={() => AddReviewhandler()}
              className="px-[8px] py-[1px] border rounded-sm cursor-pointer hover:bg-white hover:text-black"
            >
              x
            </div>
          </div>
          <p className="py-2 text-xs">
            “We all need people who will give us feedback. That’s how we
            improve.”
          </p>
          <div className="flex gap-2 flex-col">
            <div className="flex ">
              <input
                className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-8 w-full indent-2"
                type="text"
                placeholder="Name : Jane Doe"
              />
              <input
                className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-8 w-full indent-2"
                type="text"
                placeholder="Posiion : Developer"
              />
            </div>
            <textarea
              className="border text-xs rounded-md border-slate-700 mr-2 bg-slate-900 h-16 w-full indent-2 p-2"
              type="text"
              placeholder="Message"
              cols="30"
              rows="10"
            />
            <p className="text-center py-4 cursor-pointer">Send</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
