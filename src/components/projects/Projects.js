import {
  faArrowRight,
  faBuildingNgo,
  faComputerMouse,
  faHashtag,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Dravin1 from "../assets/Dravin-main.png";
import Dravin2 from "../assets/dravin-2.png";
import Dravin3 from "../assets/dravin-3.png";
import { useState } from "react";
import JP1 from "../assets/jp-1.png";
import JP2 from "../assets/jp-2.png";
import JP3 from "../assets/jp-3.png";
import VT1 from "../assets/vt-1.png";
import VT2 from "../assets/vt-2.png";
import VT3 from "../assets/vt-3.png";
import P1 from "../assets/p-1.png";
import P2 from "../assets/p-2.png";
import P3 from "../assets/p-3.png";

const Projects = () => {
  const [Open, setOpen] = useState(false);
  const [selected, setselected] = useState(0);
  const [showMore, setShowMore] = useState(true);

  const openProjectHandler = (num) => {
    setOpen(true);
    setselected(num);
  };
  const closeProjectHandler = () => {
    setOpen(false);
  };

  const changeProjectHandler = (num) => {
    setselected(num);
  };

  const showMoreHandler = () => {
    console.log(showMore);
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    <main className="w-full  h-full inline-block z-0 bg-gray-900 text-light md:p-14 p-8  flex-col  ">
      {Open !== true ? (
        <div>
          <div className="    2xl:mt-16 md:mt-12 mt-10 pt-16 sm:pt-0  2xl:px-60 xl:px-24 md:px-10 px-2 ">
            <div className=" h-full flex flex-wrap sm:gap-0 gap-5">
              <div
                onClick={() => openProjectHandler(1)}
                className="lg:w-4/12 md:w-1/2 w-full sm:h-3/6  sm:py-5 sm:px-4  sm:mt-0 "
              >
                <div className="border overflow-hidden sm:border-slate-800 border-slate-600 hover:border-purple-200 transition ease-out duration-150 h-full rounded-xl p-6 sm:bg-slate-950 bg-slate-800 cursor-pointer">
                  <div className="text-xl font-bold text-slate-300 mb-1">
                    Dravin
                  </div>
                  <div className="text-xs text-slate-400 mb-2">
                    Social Media WebApp
                  </div>
                  <div className="text-[10px] text-slate-400 md:block hidden ">
                    MERN Stack based Social Media Webapp. to make friends,
                    upload photos, like, comment one to one Chatting & much
                    more...
                  </div>

                  <p className=" text-[12px] text-slate-400 mt-2 mr-2 sm:block hidden">
                    View &nbsp;
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 10, color: "white" }}
                    />
                  </p>
                </div>
              </div>

              <div
                onClick={() => openProjectHandler(2)}
                className="lg:w-4/12 md:w-1/2 w-full sm:h-3/6  sm:py-5 sm:px-4 mt-2 sm:mt-0 "
              >
                <div className="border overflow-hidden sm:border-slate-800 border-slate-600 hover:border-yellow-200 transition ease-out duration-150 h-full rounded-xl p-6 sm:bg-slate-950 bg-slate-800 cursor-pointer">
                  <h2 className="text-xl font-bold text-slate-300 mb-1">
                    JP Foundation
                  </h2>
                  <h2 className="text-xs text-slate-400 mb-2">NGO Website</h2>
                  <p className="text-[10px] text-slate-400 md:block hidden">
                    Beautifull Looking website built over the basic power of
                    html css and js. also included payment gateway to reveive
                    donations...
                  </p>

                  <p className=" text-[12px] text-slate-400 mt-2 mr-2 sm:block hidden">
                    View &nbsp;
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 10, color: "white" }}
                    />
                  </p>
                </div>
              </div>
              <div
                onClick={() => openProjectHandler(3)}
                className="lg:w-4/12 md:w-1/2 w-full sm:h-3/6  sm:py-5 sm:px-4 mt-2 sm:mt-0 "
              >
                <div className="border overflow-hidden sm:border-slate-800 border-slate-600  hover:border-red-200 transition ease-out duration-150 h-full rounded-xl p-6 sm:bg-slate-950 bg-slate-800 cursor-pointer">
                  <h2 className="text-xl font-bold text-slate-300 mb-1">
                    Void Tables
                  </h2>
                  <h2 className="text-xs text-slate-400 mb-2">
                    Restraunt Booking WebApp
                  </h2>
                  <p className="text-[10px] text-slate-400 md:block hidden">
                    A Website to reserve tables in restraunt by choosing the
                    best one for you. in real time. after watching the dish and
                    price along with it.
                  </p>

                  <p className=" text-[12px]   text-slate-400 mt-2 mr-2 sm:block hidden">
                    View &nbsp;
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 10, color: "white" }}
                    />
                  </p>
                </div>
              </div>

              <div
                onClick={() => openProjectHandler(4)}
                className="lg:w-4/12 md:w-1/2 w-full sm:h-3/6  sm:py-5 sm:px-4 mt-2 sm:mt-0 "
              >
                <div className="border overflow-hidden sm:border-slate-800 border-slate-600  hover:border-slate-200 transition ease-out duration-150 h-full rounded-xl p-6 sm:bg-slate-950 bg-slate-800 cursor-pointer">
                  <h3 className="text-2xl font-bold text-slate-300 mb-1">
                    Portfolio
                  </h3>
                  <h4 className="text-xs text-slate-400 mb-2">
                    Personal Website
                  </h4>
                  <p className="text-[10px] text-slate-400 md:block hidden">
                    A portfolio to showcase your talent is must. here it is
                    created beautifully using some latest tech stacks. Next Js
                  </p>

                  <p className=" text-[12px] text-slate-400 mt-2 mr-2 sm:block hidden">
                    View &nbsp;
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 10, color: "white" }}
                    />
                  </p>
                </div>
              </div>
              <div className="lg:w-4/12 sm:block hidden  sm:w-1/2 w-full sm:h-3/6  sm:py-5 sm:px-4 mt-2 sm:mt-0 ">
                <div className="border overflow-hidden border-slate-800  transition ease-out duration-150 h-full rounded-xl p-6 sm:bg-slate-950 bg-slate-800 cursor-pointer">
                  <h3 className="text-2xl font-bold text-slate-300 mb-1">
                    Batak
                  </h3>
                  <h3 className="text-xs text-slate-400 mb-2">
                    Hangout Space WebApp
                  </h3>
                  <p className="text-[10px] text-slate-400 md:block hidden">
                    A place where a group of people can come and hangout. via
                    video and audio and along with this there will be group
                    feature
                  </p>

                  <p className=" text-[12px] text-red-400 mt-2 mr-2">
                    <span>In Development</span> &nbsp;
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 10, color: "white" }}
                    />
                  </p>
                </div>
              </div>
              <div
                onClick={() => showMoreHandler()}
                className="lg:w-4/12 sm:w-1/2 w-full mb-2 sm:mb-0 sm:h-3/6  sm:py-5 sm:px-4 mt-2 sm:mt-0 "
              >
                <div className=" text-center overflow-hidden   sm:border sm:border-slate-200  transition ease-out duration-150 h-full rounded-xl sm:p-6 p-2 sm:bg-slate-950 bg-slate-800 cursor-pointer md:py-10 sm:py-7">
                  View More Projects
                  <div>
                    <div className="md:mt-5 mt-2 text-gray-400 hover:text-gray-50  transition ease-out duration-150 sm:block hidden">
                      <FontAwesomeIcon
                        icon={faComputerMouse}
                        className="md:text-[3rem] text-[2rem] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class={`${
              showMore === false ? "" : "hidden"
            } p-4 mb-4 text-sm text-red-800  rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400 text-center `}
            role="alert"
          >
            <span class="font-medium -tracking-2  ">Sorry ! </span>
            Not found - coming soon.
          </div>
        </div>
      ) : (
        <div className=" h-full md:px-20 px-0 py-3 ">
          <div className=" h-full overflow-hidden flex flex-row gap-2">
            <div className="lg:w-9/12 w-full h-[80vh] md:h-full border pr-2  md:py-1 py-2 mt-10 md:mt-0 px-3 rounded-lg ">
              {selected === 1 && (
                <div className=" h-full  w-full overflow-y-scroll">
                  <div className="py-3 flex flex-col gap-3">
                    <div className=" h-6  flex flex-row justify-between px-2 items-center ">
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md border text-[10px] text-slate-400 border-slate-800 hover:border-slate-700 cursor-pointer"
                      >
                        Esc
                      </div>
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md hover:text-slate-300 cursor-pointer hover:border-slate-400 border text-xs text-slate-400 border-slate-800 hover:bg-slate-950"
                      >
                        X
                      </div>
                    </div>
                    <div className="px-2">
                      <h1 className="text-3xl  text-purple-300 font-semibold">
                        Dravin - Get Social
                      </h1>
                      <h2 className="mt-2 text-xs text-slate-200">
                        {" "}
                        Full Stack Social Media WebApp
                      </h2>
                      <h3 className="mt-2 text-xs text-slate-400">
                        &#34;Experience the future of social networking with our
                        cutting-edge fullstack web app. Seamlessly connect with
                        friends, share moments, and explore innovative features
                        designed to enhance your online social experience. From
                        sleek user interfaces to robust backend functionalities,
                        we&#39;ve got it all covered. Join us in shaping the
                        digital social landscape of tomorrow!&#34;
                      </h3>
                      <div>
                        {" "}
                        <div className="w-100  mt-4 rounded-xl overflow-hidden">
                          <Image src={Dravin1} alt="dravin_img" />
                        </div>
                        <div className="w-100  flex flex-row mt-2 gap-2">
                          <div className="w-6/12 rounded-xl overflow-hidden">
                            <Image src={Dravin2} alt="dravin_img" />
                          </div>
                          <div className="w-6/12 rounded-xl overflow-hidden">
                            <Image src={Dravin3} alt="dravin_img" />
                          </div>
                        </div>
                        <div>
                          <div
                            className="mt-6 text-sm
                       text-gray-300"
                          >
                            Key Features :-
                          </div>
                          <ul class="list-disc ml-10 text-gray-400">
                            <li class="leading-loose text-xs opacity-75">
                              Over 20 active users are communicating with each
                              other.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              One-to-One Messaging: Enjoy private conversations
                              with friends and loved ones, fostering deeper
                              connections.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Secure Login: Your data is safeguarded with
                              state-of-the-art security measures, including
                              bcryptjs encryption.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Seamless User Experience: Dravin is built using
                              React, providing a smooth, responsive, and
                              intuitive user interface.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Robust Backend: Powered by Node.js and Express.js,
                              ensuring a reliable and scalable platform.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Engagement Tools: Keep up with friends&#39;
                              updates, post content, like, comment, and share
                              effortlessly.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Personalized Feeds: Tailored content based on your
                              interests to enhance your browsing experience.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Notifications: Stay informed with real-time
                              notifications, ensuring you never miss important
                              updates.
                            </li>

                            <li class="leading-loose text-xs opacity-75">
                              90% of surveyed users rated the application&#39;s
                              user interface as intuitive and easy to navigate
                            </li>

                            <li class="leading-loose text-xs opacity-75">
                              Experience social networking like never before
                              with Dravin. Connect, share, and build
                              relationships with confidence.&#34;
                            </li>
                          </ul>
                        </div>
                        <div className=" my-2 w-full p-3 flex flex-row justify-between gap-2 ">
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400 ">
                              Frontend
                            </p>
                            <p className="text-xs text-slate-500">
                              React - Redux
                            </p>
                          </div>
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Backend
                            </p>
                            <p className="text-xs text-slate-500">
                              Node Js - Express.Js
                            </p>
                          </div>
                          <div className=" w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Database
                            </p>
                            <p className="text-xs text-slate-500">
                              mongoDB with mongoose
                            </p>
                          </div>
                        </div>
                        <div className=" flex flex-row gap-5">
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Username
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              vishal@gmail.com
                            </p>
                          </div>
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Password
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              12345678
                            </p>
                          </div>
                        </div>
                        <div className="my-5 py-2 px-4 border inline-block rounded-full text-sm border-purple-200 text-purple-200 ml-2 hover:bg-purple-200 hover:text-slate-700 cursor-pointer transition ease-in duration-150 hover:underline">
                          Visit Site
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selected === 2 && (
                <div className=" h-full w-full overflow-y-scroll">
                  <div className="py-3 flex flex-col gap-3">
                    <div className=" h-6 flex flex-row justify-between px-2 items-center ">
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md border text-[10px] text-slate-400 border-slate-800 hover:border-slate-700 cursor-pointer"
                      >
                        Esc
                      </div>
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md hover:text-slate-300 cursor-pointer hover:border-slate-400 border text-xs text-slate-400 border-slate-800 hover:bg-slate-950"
                      >
                        X
                      </div>
                    </div>
                    <div className="px-2">
                      <h1 className="text-3xl  text-yellow-200 font-semibold">
                        JP Foundation
                      </h1>
                      <h2 className="mt-2 text-xs text-slate-200">
                        {" "}
                        Website for an NGO.
                      </h2>
                      <h3 className="mt-2 text-xs text-slate-400">
                        &#34;Jayaprakash Narayan Foundation, a noble initiative
                        under the Central Government of India, dedicated to
                        driving positive change and social upliftment in our
                        nation.&#34;
                      </h3>
                      <div>
                        {" "}
                        <div className="w-100  mt-4 rounded-xl overflow-hidden">
                          <Image
                            className="h-full w-full"
                            src={JP1}
                            alt="jp_img"
                          />
                        </div>
                        <div className="w-100  flex flex-row mt-2 gap-2">
                          <div className="w-6/12 rounded-xl overflow-hidden">
                            <Image
                              className="h-full w-full"
                              src={JP2}
                              alt="jp_img"
                            />
                          </div>
                          <div className="w-6/12 rounded-xl overflow-hidden">
                            <Image
                              className="h-full w-full"
                              src={JP3}
                              alt="jp_img"
                            />
                          </div>
                        </div>
                        <div>
                          <div
                            className="mt-6 text-sm
                       text-gray-300"
                          >
                            Key Features :-
                          </div>
                          <ul class="list-disc ml-10 text-gray-400">
                            <li class="leading-loose text-xs opacity-75">
                              User-Friendly Interface: The website boasts a
                              sleek and intuitive design, ensuring a seamless
                              user experience.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Responsive Design: It is fully responsive,
                              adapting gracefully to various devices, including
                              smartphones, tablets, and desktops.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Donation Portal: A secure and integrated payment
                              gateway allows users to make donations
                              conveniently, promoting financial support for
                              noble causes.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Transparency: Detailed financial reports and
                              project updates are readily accessible, fostering
                              trust and accountability among donors and
                              stakeholders.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Impactful Visuals: Engaging multimedia content,
                              such as images and videos, effectively conveys the
                              NGO&#39;s mission, inspiring visitors to get
                              involved.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Volunteer Opportunities: Information about
                              volunteering is prominently featured, encouraging
                              community engagement and participation.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Social Media Integration: Seamlessly connect with
                              the NGO&#39;s social media profiles to stay
                              updated on events, campaigns, and news.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Newsletter Signup: Users can subscribe to
                              newsletters, receiving regular updates and success
                              stories, keeping them connected to the NGO&#39;s
                              activities.
                            </li>
                          </ul>
                        </div>
                        <div className=" my-2 w-full p-3 flex flex-row justify-between gap-2 ">
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400 ">
                              Frontend
                            </p>
                            <p className="text-xs text-slate-500">
                              HTML & CSS with SASS
                            </p>
                          </div>
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Backend
                            </p>
                            <p className="text-xs text-slate-500">N/A</p>
                          </div>
                          <div className=" w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Database
                            </p>
                            <p className="text-xs text-slate-500">MYSQL</p>
                          </div>
                        </div>
                        <div className=" flex flex-row gap-5">
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Username
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              not required
                            </p>
                          </div>
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Password
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              not required
                            </p>
                          </div>
                        </div>
                        <div className="my-5 py-2 px-4 border inline-block rounded-full text-sm border-yellow-200 text-yellow-200 ml-2 hover:bg-yellow-200 hover:text-slate-700 cursor-pointer transition ease-in duration-150 hover:underline">
                          Visit Site
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selected === 3 && (
                <div className=" h-full w-full overflow-y-scroll">
                  <div className="py-3 flex flex-col gap-3">
                    <div className=" h-6 flex flex-row justify-between px-2 items-center ">
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md border text-[10px] text-slate-400 border-slate-800 hover:border-slate-700 cursor-pointer"
                      >
                        Esc
                      </div>
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md hover:text-slate-300 cursor-pointer hover:border-slate-400 border text-xs text-slate-400 border-slate-800 hover:bg-slate-950"
                      >
                        X
                      </div>
                    </div>
                    <div className="px-2">
                      <h1 className="text-3xl  text-red-300 font-semibold">
                        voidTables
                      </h1>
                      <h2 className="mt-2 text-xs text-slate-200">
                        {" "}
                        A Restraunt Booking WebAPP
                      </h2>
                      <h3 className="mt-2 text-xs text-slate-400">
                        &#34;voidTable is a online restaurant reservation
                        platform, simplifying the dining experience by allowing
                        users to book tables at their favorite restaurants with
                        ease. With a vast network of participating eateries, it
                        connects diners and establishments for memorable
                        culinary adventures.&#34;
                      </h3>
                      <div>
                        {" "}
                        <div className="w-100  mt-4 rounded-xl overflow-hidden">
                          <Image src={VT1} alt="voidT_img" />
                        </div>
                        <div className="w-100  flex flex-row mt-2 gap-2">
                          <div className="w-6/12 rounded-xl overflow-hidden">
                            <Image src={VT2} alt="voidT_img" />
                          </div>
                          <div className="w-6/12 rounded-xl overflow-hidden">
                            <Image src={VT3} alt="voidT_img" />
                          </div>
                        </div>
                        <div>
                          <div
                            className="mt-6 text-sm
                       text-gray-300"
                          >
                            Key Features :-
                          </div>
                          <ul class="list-disc ml-10 text-gray-400">
                            <li class="leading-loose text-xs opacity-75">
                              User-Friendly Interface: A responsive and
                              intuitive user interface created using Next.js,
                              ensuring seamless interactions for users across
                              various devices.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              User Authentication: Secure user authentication
                              and authorization powered by Node.js and
                              Express.js, allowing users to create accounts and
                              manage their reservations.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Real-Time Availability: Real-time updates on table
                              availability with automatic synchronization to
                              prevent overbooking, thanks to MongoDB&#39;s
                              document-oriented structure.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Reservation System: A robust reservation system
                              that allows users to browse restaurants, select
                              date and time preferences, and book tables using
                              MongoDB to store reservation data.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Dynamic Content: Dynamic content rendering with
                              Next.js, ensuring fast loading times and
                              SEO-friendly pages for restaurants and users.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Search and Filters: Advanced search and filtering
                              options to help users find restaurants based on
                              location, cuisine, price, and more.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              User Reviews and Ratings: Integration with MongoDB
                              for storing user-generated reviews and ratings for
                              restaurants.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Payment Integration: Integration of payment
                              gateways for securing reservations through secure
                              transactions, ensuring a smooth payment process.
                            </li>

                            <li class="leading-loose text-xs opacity-75">
                              Geolocation Services: Utilization of geolocation
                              services to suggest nearby restaurants and provide
                              accurate directions.
                            </li>

                            <li class="leading-loose text-xs opacity-75">
                              Mobile Accessibility: Mobile-friendly design
                              created using Next.js and responsive front-end
                              development, allowing users to make reservations
                              from their smartphones.
                            </li>
                          </ul>
                        </div>
                        <div className=" my-2 w-full p-3 flex flex-row justify-between gap-2 ">
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400 ">
                              Frontend
                            </p>
                            <p className="text-xs text-slate-500">
                              Next JS - Tailwind CSS
                            </p>
                          </div>
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Backend
                            </p>
                            <p className="text-xs text-slate-500">NodeJs</p>
                          </div>
                          <div className=" w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Database
                            </p>
                            <p className="text-xs text-slate-500">
                              Postgresql with prisma
                            </p>
                          </div>
                        </div>
                        <div className=" flex flex-row gap-5">
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Username
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              updating soon
                            </p>
                          </div>
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Password
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              updating soon
                            </p>
                          </div>
                        </div>
                        <div className="my-5 py-2 px-4 border inline-block rounded-full text-sm border-red-200 text-red-200 ml-2 hover:bg-red-200 hover:text-slate-700 cursor-pointer transition ease-in duration-150 hover:underline">
                          Visit Site
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selected === 4 && (
                <div className=" h-full w-full overflow-y-scroll">
                  <div className="py-3 flex flex-col gap-3">
                    <div className=" h-6 flex flex-row justify-between px-2 items-center ">
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md border text-[10px] text-slate-400 border-slate-800 hover:border-slate-700 cursor-pointer"
                      >
                        Esc
                      </div>
                      <div
                        onClick={closeProjectHandler}
                        className="px-2 py-1 rounded-md hover:text-slate-300 cursor-pointer hover:border-slate-400 border text-xs text-slate-400 border-slate-800 hover:bg-slate-950"
                      >
                        X
                      </div>
                    </div>
                    <div className="px-2">
                      <h1 className="text-3xl  text-gray-300 font-semibold">
                        Portfolio
                      </h1>
                      <h2 className="mt-2 text-xs text-slate-200">
                        {" "}
                        A NextJS Based Personal Portfolio
                      </h2>
                      <h3 className="mt-2 text-xs text-slate-400">
                        &#34;Experience the future of social networking with our
                        cutting-edge fullstack web app. Seamlessly connect with
                        friends, share moments, and explore innovative features
                        designed to enhance your online social experience. From
                        sleek user interfaces to robust backend functionalities,
                        we&#39;ve got it all covered. Join us in shaping the
                        digital social landscape of tomorrow!&#34;
                      </h3>
                      <div>
                        {" "}
                        <div className="w-100 border  mt-4 rounded-xl overflow-hidden">
                          <Image src={P1} alt="portfolio_img" />
                        </div>
                        <div className="w-100  flex flex-row mt-2 gap-2">
                          <div className="w-6/12 border rounded-xl overflow-hidden">
                            <Image src={P2} alt="portfolio_img" />
                          </div>
                          <div className="w-6/12 border rounded-xl overflow-hidden">
                            <Image src={P3} alt="portfolio_img" />
                          </div>
                        </div>
                        <div>
                          <div
                            className="mt-6 text-sm
                       text-gray-300"
                          >
                            Key Features :-
                          </div>
                          <ul class="list-disc ml-10 text-gray-400">
                            <li class="leading-loose text-xs opacity-75">
                              Modern Design: This Next.js developer portfolio
                              shines with a sleek and contemporary design.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Responsive: It adapts gracefully to various
                              devices, maintaining its elegance.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Next.js Power: Utilizing Next.js, it&#39;s fast,
                              SEO-friendly, and offers server-side rendering.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Blog Integration: Seamlessly blends a blog feature
                              into the portfolio&#39;s modern design.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Robust Backend: Powered by Node.js and Express.js,
                              ensuring a reliable and scalable platform.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Project Showcase: Presents work with high-quality
                              images, descriptions, and demo links.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Interactive Elements: Engages visitors with
                              animations and project previews.
                            </li>
                            <li class="leading-loose text-xs opacity-75">
                              Performance: Optimized for speed, using lazy
                              loading and code splitting.
                            </li>

                            <li class="leading-loose text-xs opacity-75">
                              Contact and Social: Provides easy contact options
                              and links to social profiles.
                            </li>

                            <li class="leading-loose text-xs opacity-75">
                              Analytics and SEO: Offers analytics integration
                              and strong SEO optimization for visibility.
                            </li>
                          </ul>
                        </div>
                        <div className=" my-2 w-full p-3 flex flex-row justify-between gap-2 ">
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400 ">
                              Frontend
                            </p>
                            <p className="text-xs text-slate-500">
                              NextJS - Tailwind CSS
                            </p>
                          </div>
                          <div className="border-r border-slate-400 w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Backend
                            </p>
                            <p className="text-xs text-slate-500">
                              Node Js - Express.Js
                            </p>
                          </div>
                          <div className=" w-full">
                            <p className="text-sm font-semibold text-slate-400">
                              Database
                            </p>
                            <p className="text-xs text-slate-500">
                              MongoDB with Mongoose
                            </p>
                          </div>
                        </div>
                        <div className=" flex flex-row gap-5">
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Username
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              n/a
                            </p>
                          </div>
                          <div className="w-full ">
                            <p className="text-sm text-slate-400 ml-2">
                              Password
                            </p>
                            <p className="p-1 border border-slate-800 rounded-md text-sm text-slate-500 pl-4 mt-1 ">
                              n/a
                            </p>
                          </div>
                        </div>
                        <div className="my-5 py-2 px-4 border inline-block rounded-full text-sm border-purple-200 text-purple-200 ml-2 hover:bg-purple-200 hover:text-slate-700 cursor-pointer transition ease-in duration-150 hover:underline">
                          Visit Site
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:w-3/12 lg:block hidden lg h-full overflow-y-scroll z-[100%] flex flex-row pr-2">
              <div className="w-full h-full">
                <div
                  onClick={() => {
                    changeProjectHandler(1);
                  }}
                  className={`w-full py-4 border mb-4 rounded-xl hover:border-purple-200 transition ease-in duration-150 py-3 px-5 cursor-pointer  ${
                    selected == 1
                      ? "border-slate-700 bg-purple-200 text-gray-700"
                      : " border-slate-700 bg-slate-950"
                  } `}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faHashtag}
                      style={{ fontSize: 15 }}
                    />
                  </div>
                  <div className="font-sarif font-semibold text-lg">
                    {" "}
                    Dravin
                  </div>
                  <div className="text-xs mb-2">A Social Media WebAPP</div>
                  <div className=" text-xs">View More </div>
                </div>
                <div
                  onClick={() => {
                    changeProjectHandler(2);
                  }}
                  className={`w-full py-4 border mb-4 rounded-xl hover:border-yellow-200 transition ease-in duration-150 py-3 px-5 cursor-pointer ${
                    selected === 2
                      ? "border-slate-700 bg-yellow-200 text-gray-700"
                      : " border-slate-700 bg-slate-950  "
                  } `}
                >
                  <div>
                    <FontAwesomeIcon
                      className=" "
                      icon={faBuildingNgo}
                      style={{ fontSize: 15 }}
                    />
                  </div>
                  <div className="font-sarif font-semibold text-lg">
                    JP Foundation
                  </div>
                  <div className="text-xs  mb-2">Website for a NGO</div>
                  <div className=" text-xs">View More </div>
                </div>
                <div
                  onClick={() => {
                    changeProjectHandler(3);
                  }}
                  className={`w-full py-4 border mb-4 rounded-xl hover:border-red-200 transition ease-in duration-150 py-3 px-5 cursor-pointer ${
                    selected === 3
                      ? "border-slate-700 bg-red-200 text-gray-700"
                      : " border-slate-700 bg-slate-950  "
                  } `}
                >
                  <div>
                    <FontAwesomeIcon
                      className=" "
                      icon={faUtensils}
                      style={{ fontSize: 15 }}
                    />
                  </div>
                  <div className="font-sarif font-semibold text-lg">
                    {" "}
                    Void Tables
                  </div>
                  <div className="text-xs   mb-2">
                    A Restraunt Booking WebApp
                  </div>
                  <div className=" text-xs">View More </div>
                </div>
                <div
                  onClick={() => {
                    changeProjectHandler(4);
                  }}
                  className={`w-full py-4 border mb-4 rounded-xl hover:border-gray-200 transition ease-in duration-150 py-3 px-5 cursor-pointer  ${
                    selected === 4
                      ? "border-slate-700 bg-gray-200 text-gray-700"
                      : " border-slate-700 bg-slate-950  "
                  } `}
                >
                  <div>
                    <FontAwesomeIcon
                      className=" "
                      icon={faUserTie}
                      style={{ fontSize: 15 }}
                    />
                  </div>
                  <div className="font-sarif font-semibold text-lg">
                    {" "}
                    Portfolio
                  </div>
                  <div className="text-xs  mb-2">A Personal Portfolio</div>
                  <div className=" text-xs">View More </div>
                </div>
                <div className="w-full py-4 border mb-4 rounded-xl border-slate-700  transition ease-in duration-150 py-3 px-5 cursor-pointer">
                  <div>
                    <FontAwesomeIcon
                      className=" "
                      icon={faHashtag}
                      style={{ fontSize: 15, color: "white" }}
                    />
                  </div>
                  <div className="font-sarif font-semibold text-lg">Batak</div>
                  <div className="text-xs text-gray-300  mb-2">
                    A Place to Hangout
                  </div>
                  <div className="text-red-400 text-xs">In Development </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
