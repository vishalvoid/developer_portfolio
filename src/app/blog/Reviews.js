import React from "react";
import "./blog.css";
import Image from "next/image";
import M1 from "../../components/assets/memoji/Memoji-01.png";
import M2 from "../../components/assets/memoji/Memoji-02.png";
import M3 from "../../components/assets/memoji/Memoji-03.png";
import M4 from "../../components/assets/memoji/Memoji-04.png";
import M5 from "../../components/assets/memoji/Memoji-05.png";

const Reviews = () => {
  return (
    <div id="Reviews" className="w-full py-12">
      <div className="py-4 lg:px-40 px-10 ">
        <div className=" h-screen w-full ml-[50%] -translate-x-[50%] xl:px-20 px-2">
          <h1 className="home_heading text-4xl py-4 ">Reviews</h1>
          <div className="flex flex-wrap lg:gap-8 gap-4 h-[80vh]  overflow-y-auto">
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <div className="text-2xl font-semibold mb-1 h-12 w-12">
                <Image src={M1} />
              </div>
              <p className="text-xl  font-semibold text-slate-200  py-2  inline rounded-md ">
                Vishal Kumar Singh
              </p>
              <p className="text-xs text-slate-500 ">Full Stack Developer</p>
              <div className="overflow-hidden h-[7rem]   ">
                <p className="text-sm text-slate-400  mt-2">
                  Technology? What is it? How does it work? What can it do? What
                  can it not do? AI? ML? DL? What are these? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deserunt nisi
                  dignissimos eum aliquid culpa similique, cumque saepe placeat
                  assumenda id.
                </p>
              </div>
            </div>
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <div className="text-2xl font-semibold mb-1 h-12 w-12">
                <Image src={M5} />
              </div>
              <p className="text-xl  font-semibold text-slate-200  py-2  inline rounded-md ">
                Vishal Kumar Singh
              </p>
              <p className="text-xs text-slate-500 ">Full Stack Developer</p>
              <div className="overflow-hidden h-[7rem]   ">
                <p className="text-sm text-slate-400  mt-2">
                  Technology? What is it? How does it work? What can it do? What
                  can it not do? AI? ML? DL? What are these? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deserunt nisi
                  dignissimos eum aliquid culpa similique, cumque saepe placeat
                  assumenda id.
                </p>
              </div>
            </div>
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <div className="text-2xl font-semibold mb-1 h-12 w-12">
                <Image src={M2} />
              </div>
              <p className="text-xl  font-semibold text-slate-200  py-2  inline rounded-md ">
                Vishal Kumar Singh
              </p>
              <p className="text-xs text-slate-500 ">Full Stack Developer</p>
              <div className="overflow-hidden h-[7rem]   ">
                <p className="text-sm text-slate-400  mt-2">
                  Technology? What is it? How does it work? What can it do? What
                  can it not do? AI? ML? DL? What are these? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deserunt nisi
                  dignissimos eum aliquid culpa similique, cumque saepe placeat
                  assumenda id.
                </p>
              </div>
            </div>
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <div className="text-2xl font-semibold mb-1 h-12 w-12">
                <Image src={M3} />
              </div>
              <p className="text-xl  font-semibold text-slate-200  py-2  inline rounded-md ">
                Vishal Kumar Singh
              </p>
              <p className="text-xs text-slate-500 ">Full Stack Developer</p>
              <div className="overflow-hidden h-[7rem]   ">
                <p className="text-sm text-slate-400  mt-2">
                  Technology? What is it? How does it work? What can it do? What
                  can it not do? AI? ML? DL? What are these? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deserunt nisi
                  dignissimos eum aliquid culpa similique, cumque saepe placeat
                  assumenda id.
                </p>
              </div>
            </div>
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <div className="text-2xl font-semibold mb-1 h-12 w-12">
                <Image src={M4} />
              </div>
              <p className="text-xl  font-semibold text-slate-200  py-2  inline rounded-md ">
                Vishal Kumar Singh
              </p>
              <p className="text-xs text-slate-500 ">Full Stack Developer</p>
              <div className="overflow-hidden h-[7rem]   ">
                <p className="text-sm text-slate-400  mt-2">
                  Technology? What is it? How does it work? What can it do? What
                  can it not do? AI? ML? DL? What are these? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deserunt nisi
                  dignissimos eum aliquid culpa similique, cumque saepe placeat
                  assumenda id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
