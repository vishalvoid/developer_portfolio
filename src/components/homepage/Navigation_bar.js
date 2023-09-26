"use client";

import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { InstagramIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import Image from "next/image";
import Instagram_icon from "../assets/instagram.svg";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      data-scroll
      href={href}
      className={`${className} relative group scroll-smooth`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light text-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navigation_bar = () => {
  const [nav, setnav] = useState(false);

  const Setnavhandler = () => {
    if (nav === true) {
      setnav(false);
    } else {
      setnav(true);
    }
  };

  const onClickHandler = () => {
    console.log("click hua hai");
    setnav(false);
  };
  return (
    <header className="fixed w-full md:px-32 px-10 py-5 text-light font-light flex items-center justify-between z-50">
      <div className="cursive-heading  cursor-pointer  sm:text-2xl text-xl font-bold">
        <a href="/">Vish.</a>
      </div>
      <nav className="lg:block hidden">
        <CustomLink href="#about" title="About" className="mx-4 " />
        <CustomLink href="#skills" title="Skills" className="mx-4" />
        <CustomLink href="#project" title="Projects" className="mx-4" />
        <CustomLink href="/blog" title="Blog &#9013;" className="ml-4" />
        <CustomLink href="#contact" title="Contact" className="ml-4" />
      </nav>

      <nav className=" items-center justify-center flex-wrap md:flex hidden">
        <a
          href="https://www.twitter.com/vishal_void"
          target={"_blank"}
          className="w-6 mr-4 transition ease-out duration-150 hover:-translate-y-0.5 "
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.github.com/vishalvoid"
          target={"_blank"}
          className="w-6 mx-4  transition ease-out duration-150 hover:-translate-y-0.5"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/vishalvoid"
          target={"_blank"}
          className="w-6 mx-4  transition ease-out duration-150 hover:-translate-y-0.5"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/vishal.void"
          target={"_blank"}
          className="w-6 ml-4  transition ease-out duration-150 hover:-translate-y-0.5"
        >
          <InstagramIcon />
        </a>
      </nav>
      {nav === false ? (
        <div onClick={() => Setnavhandler()} className="lg:hidden block">
          <FontAwesomeIcon icon={faBars} />
        </div>
      ) : (
        <div onClick={() => Setnavhandler()} className="lg:hidden block">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}

      <div
        className={`  m-2vw w-screen px-[25%] py-[20%] h-[92vh]  rounded-lg backdrop-blur-2xl top-[8vh] left-0 absolute ${
          nav !== true ? "hidden" : "block"
        } `}
      >
        <div className="  w-full h-full  ">
          <ul className="flex flex-col items-center justify-center text-5xl gap-8 cursive-heading2 tracking-wider text-white">
            <li className="cursor-pointer hover:text-slate-900 transition ease-in duration-150">
              <a onClick={() => onClickHandler()} href="#about">
                About
              </a>
            </li>

            <li className="cursor-pointer hover:text-slate-900 transition ease-in duration-150">
              <a onClick={() => onClickHandler()} href="#skills">
                Skills
              </a>
            </li>
            <li className="cursor-pointer hover:text-slate-900 transition ease-in duration-150">
              <a onClick={() => onClickHandler()} href="#project">
                Project
              </a>
            </li>
            <li className="cursor-pointer hover:text-slate-900 transition ease-in duration-150">
              <a href="/blog">Blog &#8618;</a>
            </li>
            <li className="cursor-pointer hover:text-slate-900 transition ease-in duration-150">
              <a onClick={() => onClickHandler()} href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <nav className=" items-center justify-center flex-wrap flex mt-20 ">
            <a
              href="https://www.twitter.com/vishal_void"
              target={"_blank"}
              className="w-6 mr-4 transition ease-out duration-150 hover:-translate-y-0.5 "
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com/vishalvoid"
              target={"_blank"}
              className="w-6 mx-4  transition ease-out duration-150 hover:-translate-y-0.5"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/vishalvoid"
              target={"_blank"}
              className="w-6 mx-4  transition ease-out duration-150 hover:-translate-y-0.5"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/vishal.void"
              target={"_blank"}
              className="w-7 h-4 ml-4  transition ease-out duration-150 hover:-translate-y-0.5"
            >
              <Image src={Instagram_icon} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation_bar;
