import React from "react";
import "./blog.css";

const Podcast = () => {
  return (
    <div id="Podcast" className="w-full py-12">
      <div className="py-4 lg:px-40 px-10 ">
        <div className=" mb-16 w-full ml-[50%] -translate-x-[50%] xl:px-20 px-2">
          <h1 className="home_heading text-4xl py-4 ">Podcast</h1>
          <div className="flex flex-wrap lg:gap-8 gap-4 max-h-[80vh]  overflow-y-auto">
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <h1 className="text-2xl font-semibold mb-2">
                Begining ? what Begining
              </h1>
              <p className="text-xs px-2 py-1  bg-slate-600 inline rounded-md ">
                Episode 1
              </p>
              <p className="text-[10px] text-justify mt-2">
                Technology? What is it? How does it work? What can it do? What
                can it not do? AI? ML? DL? What are these? What
              </p>
              <div className="text-center p-2 mt-2">
                <h1 className="bg-slate-800 p-2 rounded-full text-gray-400  border border-slate-800 cursor-pointer">
                  Coming Soon.
                </h1>
              </div>
            </div>
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <h1 className="text-2xl font-semibold mb-2">
                Begining ? what Begining
              </h1>
              <p className="text-xs px-2 py-1  bg-slate-600 inline rounded-md ">
                Episode 1
              </p>
              <p className="text-[10px] text-justify mt-2">
                Technology? What is it? How does it work? What can it do? What
                can it not do? AI? ML? DL? What are these? What
              </p>
              <div className="text-center p-2 mt-2">
                <h1 className="bg-slate-800 p-2 rounded-full text-gray-400  border border-slate-800 cursor-pointer">
                  Coming Soon.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
