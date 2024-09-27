import React from "react";
import { Button } from "@/components/ui/button";

const SpecialCards = ({ img, title, desc, btn }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:mx-4 md:mx-4 my-4 mx-4">
        <div className="bg-amber-50 shadow-sm rounded-lg grid place-items-center py-10 md:px-4 lg:px-3 px-3 text-center">
          <img src={img} className="w-20" alt="" />
          <h1 className="py-1 text-xl text-gray-800 font-semibold">{title}</h1>
          <p className="text-gray-900">{desc}</p>
          <Button
            className="pt-3 text-xl border-none text-amber-500 transition duration-300 hover:text-amber-600"
            variant="ghost"
          >
            See
          </Button>
        </div>
      </div>
    </>
  );
};

export default SpecialCards;
