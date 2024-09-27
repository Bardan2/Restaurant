import React from "react";

const BlogCards = ({ img, rest, date, title, desc }) => {
  return (
    <div>
      <div className=" shadow-md m-w-full bg-amber-50">
        <div className="relative overflow-hidden group">
        <img src={img} alt="image" class="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-transparent border-2 border-amber-500 text-amber-500 text-lg font-bold py-2 px-4 rounded">
            View More
          </button>
        </div>
        </div>

        <div className="p-8">
          <div className=" font-medium text-sm mb-2 tracking-[5px]">
            <h1>
            <span className=" border-t border-amber-500">{rest} </span><span>{"    "}</span>
            <span className="text-stone-900 border-y border-amber-500">
              {date}
            </span>
            </h1>
          </div>

          <div className="flex-column justify-between items-center">
            <h1 className="font-semibold text-lg mb-4">{title}</h1>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
