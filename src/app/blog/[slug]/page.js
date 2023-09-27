import React from "react";
import Navbar_blog from "../Navbar_blog";
import Blogpage_home from "../Blogpage_home";
import Navbar_Stories from "../Navbar_Stories";
import Blog_content from "../Blog_content";

export const metadata = {
  title: "Best Software Developer Portfolio | Vishalvoid | Vishal KR Singh",
  description:
    "Explore Vishal's best software developer portfolio - showcasing expertise in web & app development. Discover innovative projects, skills, and achievements.",
};

const page = ({ params }) => {
  return (
    <main className="w-full h-full inline-block  bg-gray-900  ">
      <div>
        <Navbar_Stories />
        <Blog_content params={params.slug} />
      </div>
    </main>
  );
};

export default page;
