import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import BlogData from "./Data.json";
import Blog_content_buttons from "./Blog_content_button";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import Img1 from "../../components/assets/blog_img/1.svg";
import Img2 from "../../components/assets/blog_img/2.svg";
import Img3 from "../../components/assets/blog_img/3.svg";
import Img4 from "../../components/assets/blog_img/4.svg";
import Img5 from "../../components/assets/blog_img/5.svg";
import Img6 from "../../components/assets/blog_img/6.svg";
import Img7 from "../../components/assets/blog_img/7.svg";
import Img8 from "../../components/assets/blog_img/8.svg";
import Img9 from "../../components/assets/blog_img/9.svg";
import Img10 from "../../components/assets/blog_img/10.svg";
import Img11 from "../../components/assets/blog_img/11.svg";
import Img12 from "../../components/assets/blog_img/12.svg";
import Img13 from "../../components/assets/blog_img/13.svg";
import Img14 from "../../components/assets/blog_img/14.svg";
import Img15 from "../../components/assets/blog_img/15.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Head from "next/head";

const Blog_content = (params) => {
  const page = parseInt(params.params);
  var number = 2;
  if (typeof page === "number" && page <= 8 && page > 0) {
    number = page;
  } else {
    return notFound();
  }

  const imagesObject = {
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
  };

  return (
    <>
      <Head>
        <title>{BlogData[number].title}</title>
        <meta name="description">{BlogData[number].data.slice(0, 300)}</meta>
      </Head>
      <main id="ep" className="relative ">
        <div className="  pt-[5rem] relative  2xl:px-[26rem] xl:px-[22rem] lg:px-[15rem] md:px-[8rem] sm:px-[6rem] px-[2rem]">
          <div className="h-full w-full flex flex-col gap-2 ">
            <div className="py-2 h-[18rem] border-slate-700 rounded-lg border overflow-hidden object-cover">
              {(
                <Image
                  src={imagesObject[`${BlogData[number].img}`]}
                  alt="blog_img"
                  className="w-full h-full"
                />
              ) || (
                <SkeletonTheme baseColor="#111828" highlightColor="#212a40">
                  <Skeleton className="w-full h-full" />
                </SkeletonTheme>
              )}
            </div>
            <h1 className="text-3xl mt-2 pb-0 font-semibold tracking-wide text-slate-200">
              {BlogData[number].title}
            </h1>
            <div className="text-sm text-slate-300 rounded-lg ">
              <p className="inline bg-slate-700 px-3 py-1 rounded-md">
                {" "}
                Episode {BlogData[number].episode}
              </p>
            </div>
            <div className="flex font-serif text-xs text-slate-300 pt-3  justify-between ">
              <p>
                <FontAwesomeIcon icon={faUser} className="pr-2" />{" "}
                {BlogData[number].views}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="pr-2" />{" "}
                {BlogData[number].time} Minutes
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendar} className="pr-2" />{" "}
                {BlogData[number].date}
              </p>
            </div>
            <p className="text-justify font-sans leading-6 font-light text-sm text-gray-400 py-6 border-y  border-slate-700">
              {parse(BlogData[number].data) || (
                <SkeletonTheme baseColor="#111828" highlightColor="#212a40">
                  <Skeleton className="w-full h-full" />
                </SkeletonTheme>
              )}
            </p>
            <Blog_content_buttons params={number} />
            <div className="flex items-center justify-center py-4 pl-6">
              <a href="https://instagram.com/vishal.void">
                <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-white pr-8 hover:text-xl py-3.5">
                  <div className="text-white bg-slate-300 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="https://twitter.com/vishal_void">
                <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-white pr-8 hover:text-xl py-3.5">
                  <div className="text-white bg-slate-300 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="https://linkedin.com/in/vishalvoid">
                <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-white pr-8 hover:text-xl py-3.5">
                  <div className="text-white bg-slate-300 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="https://github.com/vishalvoid">
                <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-white pr-8 hover:text-xl py-3.5">
                  <div className="text-white bg-slate-300 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="https://t.me/vishalvoid">
                <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-white pr-8 hover:text-xl py-3.5">
                  <div className="text-white bg-slate-300 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 496 512"
                    >
                      <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog_content;
