import React from "react";

import Navbar_Stories from "../Navbar_Stories";
import Blog_content from "../Blog_content";
import BlogData from "../Data.json";
import Head from "next/head";

export async function generateMetadata({ params }) {
  var number = 0;
  var number = parseInt(params.slug);
  const title = BlogData[number].title.slice(0, 60);
  const desciption = BlogData[number].data.slice(0, 160);

  return {
    title: title || "blog page",
    description: desciption || "description",
  };
}

const page = ({ params }) => {
  const number = parseInt(params.slug);

  return (
    <>
      <Head>
        <title>{BlogData[number].title} || blog page</title>
        <meta name="description">{BlogData[number].data.slice(0, 300)}</meta>
      </Head>
      <main className="w-full h-full inline-block  bg-gray-900  ">
        <div>
          <Navbar_Stories />
          <Blog_content params={params.slug} />
        </div>
      </main>
    </>
  );
};

export default page;
