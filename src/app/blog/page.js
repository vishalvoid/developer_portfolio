import React from "react";
import Navbar_blog from "./Navbar_blog";

import Blogpage_home from "./Blogpage_home";
import Blogs from "./Blogs";
import Podcast from "./Podcast";
import Reviews from "./Reviews";
import Subscription from "./Subscription";

const page = () => {
  return (
    <main className="w-full h-full inline-block z-0 bg-gray-900  ">
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
