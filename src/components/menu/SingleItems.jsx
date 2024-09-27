import React from "react";
import storyImg from "../../assets/menu/food9.jpg";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { ArrowUpIcon } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Review from "./Review";
import Describe from "./Describe";
import food1 from "../../assets/home/food_1.jpg"
import food2 from "../../assets/home/food_2.jpg"
import food3 from "../../assets/home/food_3.jpg"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cards from "../home/Cards";

const SingleItems = () => {
  const [numberCount, setNumberCount] = useState(1);

  return (
    <div>
      <div className="my-4 ml-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <NavLink to="/">Home</NavLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <NavLink to="/home/menu">
                Menu
                {/* <BreadcrumbLink>Menu</BreadcrumbLink> */}
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Item Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="container mx-auto">
        <div className="bg-red-00">
          <div className="lg:flex lg:mt-32 lg:my-0 bg-green-00">
            <div className="px-8 border-gray-700 lg:w-[80%] w-full flex items-center bg-blue-00 relative">
              <img
                src={storyImg}
                alt="Ther Story"
                className="lg:w-[70%] w-full lg:ml-32"
              />
            </div>
            <div className="relative w-full lg:mt-0 mt-10 lg:px-0 px-8 bg-red-00 flex items-start justify-center flex-col">
              <h1 className="text-4xl font-bold text-stone-800 mb-2 tracking-wide">
                Chicken Burger
              </h1>
              <h3 className="text-xl font-bold text-stone-800 mb-2">$13.00</h3>
              {/* <hr /> */}
              <div className="w-[90%] mx-left border-t border-dashed border-gray-300 my-4"></div>
              <p className="lg:pr-16 bg-red-00">
                Interactively procrastinate high-payoff content without backward
                compatible data uickly cultivate optimal processes and tactical
                via accurate e-markets.
              </p>
              <div className=" mt-10 tracking-wider ">
                <div className="w-full mb-4">
                  <h1 className=" text-base font-semibold text-amber-500">
                    CATEGORY: <span className="text-stone-800">Food</span>
                  </h1>
                </div>
                <div className="w-full ">
                  <h1 className=" text-base font-semibold text-amber-500">
                    TAGS:{" "}
                    <span className="text-stone-800">
                      Recipes, Sweet, Tasty
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  bg-blue-00 items-center lg:w-1/2 w-full justify-center mt-4">
            <div className="lg:border-2 lg:border-amber-500 lg:w-20 px-4 py-6 h-12 mr-8 flex items-center lg:gap-0 gap-10">
              <p className="lg:text-base text-xl">{numberCount}</p>

              <div className="lg:px-0 px-2 bg-red-00 lg:gap-0 gap-10">
                <ChevronUp
                  onClick={() => setNumberCount(numberCount + 1)}
                  className="cursor-pointer bg-red-00 lg:my-0 my-2 lg:h-6 h-8 lg:w-8 w-10"
                />
                <ChevronDown
                  onClick={() => setNumberCount(numberCount - 1)}
                  className="cursor-pointer bg-red-00 lg:my-0 my-2 lg:h-6 h-8 lg:w-8 w-10"
                />
              </div>
            </div>
            <div>
              <NavLink to="/">
                <Button
                  className="my-6 w-40 h-12 bg-amber-500 text-slate-900 font-bold transition duration-300 hover:bg-amber-400 hover:text-slate-900"
                  variant="outline"
                >
                  Order Now
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto">
        <Tabs defaultValue="describe" className="">
          <TabsList className="bg-white px-10 mt-10">
            <TabsTrigger value="describe">DESCRIPTION</TabsTrigger>
            <TabsTrigger value="review">REVIEW</TabsTrigger>
          </TabsList>
          <div className="w-[93%] mx-auto border-t border-dashed border-gray-300 my-6"></div>
          <TabsContent value="describe">
            <Describe />
          </TabsContent>
          <TabsContent value="review">
            <Review />
          </TabsContent>
          <div className="w-[93%] mx-auto border-t border-dashed border-gray-300 my-6"></div>
        </Tabs>
      </section>



      <section className="container mx-auto mt-20 mb-28">
      <h3 className="lg:px-8 font-bold tracking-[1px] text-3xl">
              Related Dishes
            </h3>
      <div className="mt-8 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food1} title="Susesh" price={120} rating={4} />
            <Cards img={food2} title="Burger" price={150} rating={3} />
            <Cards img={food3} title="Noodle" price={140} rating={5} />
          </div>
      </section>
    </div>
  );
};

export default SingleItems;
