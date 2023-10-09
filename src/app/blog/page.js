import React from "react";
import Navbar_blog from "./Navbar_blog";

import Blogpage_home from "./Blogpage_home";
import Blogs from "./Blogs";
import Podcast from "./Podcast";
import Reviews from "./Reviews";
import Subscription from "./Subscription";

export const metadata = {
  title: "Code, Create, Connect: Vishal Singh's Tech Blog",
  description:
    "Start your tech adventure with Vishal Singh's blog. Discover web and app development insights, and stay connected to the fast-paced world of technology through expert articles and guidance.",
};

const page = () => {
  return (
    <main className="w-full  inline-block  bg-gray-900  ">
      <div>
        <Navbar_blog />
        <Blogpage_home />
        <Blogs />
        <Podcast />
        <Reviews />
        <Subscription />
      </div>
    </main>
  );
};

export default page;
