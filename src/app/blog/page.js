import React from "react";
import Navbar_blog from "./Navbar_blog";

import Blogpage_home from "./Blogpage_home";
import Blogs from "./Blogs";
import Podcast from "./Podcast";
import Reviews from "./Reviews";
import Subscription from "./Subscription";

export const metadata = {
  title: "Best Software Developer Portfolio | Vishalvoid | Vishal KR Singh",
  description:
    "Explore Vishal's best software developer portfolio - showcasing expertise in web & app development. Discover innovative projects, skills, and achievements.",
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
