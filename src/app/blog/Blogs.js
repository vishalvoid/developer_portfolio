import React from "react";
import "./blog.css";
import BlogData from "./Data.json";
import Blog_Card from "./Blog_Card";

const Blogs = () => {
  return (
    <div id="Blogs" className="w-full py-12">
      <div className="py-4 lg:px-40 px-10 ">
        <div className=" h-screen w-full ml-[50%] -translate-x-[50%] xl:px-20 px-2">
          <h1 className="home_heading text-4xl py-4 ">Blogs</h1>
          <div className="flex flex-wrap lg:gap-8 gap-4 h-[80vh]  overflow-y-scroll">
            <Blog_Card
              title={BlogData[1].title.substring(0, 30)}
              episode={BlogData[1].episode}
              data={BlogData[1].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[2].title.substring(0, 30)}
              episode={BlogData[2].episode}
              data={BlogData[2].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[3].title.substring(0, 30)}
              episode={BlogData[3].episode}
              data={BlogData[3].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[4].title.substring(0, 30)}
              episode={BlogData[4].episode}
              data={BlogData[4].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[5].title.substring(0, 30)}
              episode={BlogData[5].episode}
              data={BlogData[5].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[6].title.substring(0, 30)}
              episode={BlogData[6].episode}
              data={BlogData[6].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[7].title.substring(0, 30)}
              episode={BlogData[7].episode}
              data={BlogData[7].data.substring(0, 120)}
            />
            <Blog_Card
              title={BlogData[8].title.substring(0, 30)}
              episode={BlogData[8].episode}
              data={BlogData[8].data.substring(0, 120)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
