import React from "react";
import Rating from "./Rating";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";


const Cards = ({img, title, price, rating}) => {
  return (

    <div className="shadow-md overflow-hidden w-full bg-white">
      <img src={img} alt="image" class="w-full h-60 object-cover" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <h3 className="font-bold text-amber-500">${price}</h3>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">{rating}</span>
          <Rating rating={rating} />

          <NavLink to="/home/menu/singleItems">
          <Button
            className="my-6 w-28 bg-amber-500 text-slate-900 hover:bg-amber-400 transition duration-300 hover:text-slate-900"
            variant="outline"
          >
            Order Now
          </Button>
          </NavLink>
        </div>
      </div>
    </div>

  );
};

export default Cards;
