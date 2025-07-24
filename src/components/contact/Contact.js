import React from "react";
import Image from "next/image";
import Whoa from "../assets/Whoa.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Contact = () => {
  return (
    <main className="w-full h-full inline-block z-0 bg-gray-900 text-light p-10">
      <div className="flex xl:w-9/12 lg:w-12/12 h-5/6  m-auto  mt-12 gap-8 lg:flex-row flex-col">
        <div className="lg:w-6/12 w-full lg:h-full h-3/6  flex  justify-around items-center">
          {(
            <Image
              className="brightness-200 lg:h-fit h-full "
              src={Whoa}
              alt="contact-svg"
            />
          ) || (
            <SkeletonTheme baseColor="#111828" highlightColor="#212a40">
              <Skeleton className="w-full h-full" />
            </SkeletonTheme>
          )}
        </div>
        <div className="lg:w-6/12 w-full lg:h-full h-3/6  p-6 flex flex-col justify-around ">
          <div className="tracking-wider items-center  text-justify text-gray-300 text-xs leading-7">
            <h1 className="text-sm">It&#39;s easy, Fill the form.</h1>
            <form action="" className="w-full">
              <label htmlFor="name">
                <p>Name</p>
              </label>
              <input
                className="w-full bg-slate-900 border border-slate-700 rounded-md indent-2 p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                aria-label="Your name"
              />
              <label htmlFor="email">
                <p>Email</p>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-slate-900 border border-slate-700 rounded-md indent-2 p-2"
                placeholder="your.email@example.com"
                aria-label="Your email address"
              />
              <label htmlFor="message">
                <p>Message</p>
              </label>
              <textarea
                className="w-full bg-slate-900 border border-slate-700 rounded-md indent-2 p-2"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Your message here..."
                aria-label="Your message"
              ></textarea>
            </form>
            <button 
              type="submit"
              className="px-6 py-1 border border-slate-700 rounded-md hover:bg-slate-800 hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
