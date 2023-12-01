import React from "react";
import "./blog.css";
import Image from "next/image";
import M1 from "../../components/assets/memoji/Memoji-01.png";
import M2 from "../../components/assets/memoji/Memoji-02.png";
import M3 from "../../components/assets/memoji/Memoji-03.png";
import M4 from "../../components/assets/memoji/Memoji-04.png";
import M5 from "../../components/assets/memoji/Memoji-05.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddReview from "./AddReview";

const Reviews = () => {
  //   const [showReview, setshowReview] = useState(false);

  //   const AddReviewhandler = () => {
  //     if (showSubscription === false) {
  //       setshowReview(true);
  //     } else {
  //       setshowReview(false);
  //     }
  //   };
  return (
    <div id="Reviews" className="w-full py-12">
      <div className="py-4 lg:px-40 px-10 ">
        <div className=" h-screen w-full ml-[50%] -translate-x-[50%] xl:px-20 px-2">
          <div className="flex justify-between ">
            <h1 className="home_heading text-4xl py-4 ">Reviews</h1>
            {/* <div className="border hover:bg-slate-700 hover:text-slate-400 transition ease-in duration-100 cursor-pointer border-slate-700 rounded-lg w-10 h-10 text-center relative   text-[1.2rem] mt-4">
              <FontAwesomeIcon
                icon={faPlus}
                className=" absolute top-[50%] -translate-y-[50%] -translate-x-[50%]  "
              />
            </div> */}
            <AddReview />
          </div>
          <div className="flex flex-wrap lg:gap-8 gap-4 h-[80vh]  overflow-y-auto">
            <div className=" md:w-[30%] sm:w-[47%] w-[95%] border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100 py-6">
              <div className="text-2xl font-semibold mb-1 h-12 w-12">
                <Image src={M1} alt="avatar" />
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
                <Image src={M5} alt="avatar" />
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
                <Image src={M2} alt="avatar" />
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
                <Image src={M3} alt="avatar" />
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
                <Image src={M4} alt="avatar" />
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
      {/* <div
        className={` ${
          showReview === true ? "fixed z-20 " : "hidden -z-10"
        }   w-screen h-screen top-0 left-0  backdrop-blur-md`}
      >
        <div className="absolute p-8 bg-slate-900 rounded-lg md:w-[25rem] w-[22rem] h-[15rem] border border-slate-700 z-30 top-[30%] left-[50%] -translate-x-[50%]">
          <div className="flex justify-between">
            <div>Email Subscription</div>
            <div
              onClick={() => AddReviewhandler()}
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
      </div> */}
    </div>
  );
};

export default Reviews;
