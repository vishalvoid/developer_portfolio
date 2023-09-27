import React from "react";

const Blog_Card = ({ title, episode, data }) => {
  return (
    <div className="md:w-[30%] sm:w-[47%] w-[95%]  border border-slate-700 rounded-2xl p-4  hover:border-slate-400 transition ease-in duration-100">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-xs px-2 py-1  bg-slate-600 inline rounded-md ">
        Episode {episode}
      </p>
      <p className="text-[10px] text-justify mt-2">{data}...</p>
      <div className="text-center p-2 mt-2">
        <p className="bg-slate-700 p-2 rounded-full hover:bg-slate-800 hover:border-slate-400 border border-slate-700 cursor-pointer">
          <a href={`/blog/${episode}`}>Read more</a>
        </p>
      </div>
    </div>
  );
};

export default Blog_Card;
