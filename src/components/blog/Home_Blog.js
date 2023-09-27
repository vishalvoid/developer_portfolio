import React from "react";
import Data from "../../app/blog/Data.json";

const Home_Blog = () => {
  return (
    <main className="w-full h-full inline-block z-0 bg-gray-900 text-light sm:p-20 p-6 ">
      <div className="  lg:px-32 sm:px-10 px-0 flex flex-col gap-3 sm:mt-0 mt-10">
        <a href="/blog/8">
          <div className="  flex flex-row gap-5 cursor-pointer  ">
            <div className=" w-full  overflow-hidden rounded-lg p-4 hover:bg-slate-800 transition ease-in-out duration-150">
              <div className="flex flex-row justify-between pr-2 border-b mb-2 border-slate-800">
                <p className="font-serif text-gray-400  text-sm ">
                  {Data[8].date}
                </p>
                <p className="text-sm text-gray-400">
                  ~ Episode {Data[8].episode}{" "}
                </p>
              </div>
              <h1 className="text-2xl font-serif">{Data[8].title}</h1>
            </div>
          </div>
        </a>
        <a href="/blog/7">
          <div className="  flex flex-row gap-5 cursor-pointer  ">
            <div className=" w-full  overflow-hidden rounded-lg p-4 hover:bg-slate-800 transition ease-in-out duration-150">
              <div className="flex flex-row justify-between pr-2 border-b mb-2 border-slate-800">
                <p className="font-serif text-gray-400  text-sm ">
                  {Data[7].date}
                </p>
                <p className="text-sm text-gray-400">
                  ~ Episode {Data[7].episode}{" "}
                </p>
              </div>
              <h1 className="text-2xl font-serif">{Data[7].title}</h1>
            </div>
          </div>
        </a>
        <a href="/blog/6">
          <div className="  flex flex-row gap-5 cursor-pointer  ">
            <div className=" w-full  overflow-hidden rounded-lg p-4 hover:bg-slate-800 transition ease-in-out duration-150">
              <div className="flex flex-row justify-between pr-2 border-b mb-2 border-slate-800">
                <p className="font-serif text-gray-400  text-sm ">
                  {Data[6].date}
                </p>
                <p className="text-sm text-gray-400">
                  ~ Episode {Data[6].episode}{" "}
                </p>
              </div>
              <h1 className="text-2xl font-serif">{Data[6].title}</h1>
            </div>
          </div>
        </a>
        <a href="/blog/5">
          <div className="  flex flex-row gap-5 cursor-pointer  ">
            <div className=" w-full  overflow-hidden rounded-lg p-4 hover:bg-slate-800 transition ease-in-out duration-150">
              <div className="flex flex-row justify-between pr-2 border-b mb-2 border-slate-800">
                <p className="font-serif text-gray-400  text-sm ">
                  {Data[5].date}
                </p>
                <p className="text-sm text-gray-400">
                  ~ Episode {Data[5].episode}{" "}
                </p>
              </div>
              <h1 className="text-2xl font-serif">{Data[5].title}</h1>
            </div>
          </div>
        </a>

        <div className="text-center">
          <p className="mt-2 bg-slate-800 px-4 py-2 text-xs cursor-pointer hover:border-slate-100 transition ease-in duration-100 border border-slate-900 inline-block rounded-lg">
            <a href="/blog">Go to Blog Section</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home_Blog;
