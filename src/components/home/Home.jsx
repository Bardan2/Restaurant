import React from "react";
import Image from "../../assets/home/Image.png";
import Location from "../../assets/home/Location.png";
import time from "../../assets/home/time.png";
import Reserve from "../../assets/home/Reserve.png";
import storyImg from "../../assets/home/storyImg.jpg";
import { Button } from "@/components/ui/button";
import Cards from "./Cards";
import food1 from "../../assets/home/food_1.jpg";
import food2 from "../../assets/home/food_2.jpg";
import food3 from "../../assets/home/food_3.jpg";
import service1 from "../../assets/home/service_1.jpg";
import service2 from "../../assets/home/service_2.jpg";
import service3 from "../../assets/home/service_3.jpg";
import TestimonialCards from "./TestimonialCards";
import daniyal from "../../assets/home/ImageDaniyal.png";
import jack from "../../assets/home/ImageJack.png";
import natasha from "../../assets/home/ImageNatasha.png";
import BlogCards from "./BlogCards";
import apple from "../../assets/home/apple.jpg";
import jucie from "../../assets/home/jucie.jpg";
import bg from "../../assets/home/BgCont.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[var(--background-hero)]">
      {/* hero */}
        <section className="container px-14 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className=" w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl font-extrabold leading-snug text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
              Welcome to <br className="hidden lg:block" />
              <span className="text-amber-500">RestoNest</span>{" "}
            </h1>{" "}
            <p className="mt-4 lg:text-xl text-base text-black dark:text-gray-300">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy .
            </p>
            <Button
              className="my-6 w-36 h-12 text-xl bg-stone-950 text-slate-100 hover:bg-stone-900 transition duration-300 hover:text-slate-100"
              variant="outline"
            >
              View More
            </Button>
          </div>
          <div className="w-full mt-0 lg:mt-0 lg:w-1/2">
            <img
              src={Image}
              alt="tailwind css components"
              className="drop-shadow-2xl w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>
      </div>
      <section className=" container mx-auto">
        <div className=" md:justify-center  lg:flex lg:justify-evenly my-10 space-y-2">
          <div className="flex items-center justify-start px-10 sm:mb-4 space-x-4 ">
            <img
              src={Location}
              className="align-center lg:w-12 w-8 lg:h-12 lg:h-12 p-2 bg-amber-500 rounded-full"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">Locate Us</h1>
              <p className="text-sm">Riverside 25, San Francisco, California</p>
            </div>
          </div>
          <div className="flex items-center justify-start px-10 sm:mb-4  space-x-4">
            <img
              src={time}
              className="align-center lg:w-12 w-8 lg:h-12 lg:h-12 p-2 bg-amber-500 rounded-full"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">Open Hours </h1>
              <p className="text-sm">Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-start px-10 space-x-4">
            <img
              src={Reserve}
              className="align-center lg:w-12 w-8 lg:h-12 lg:h-12 p-2 bg-amber-500 rounded-full"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">Reservation</h1>
              <p className="text-sm">hirestaurantate@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="lg:flex my-20">
          <div className="px-8 border-r-2 border-gray-700 w-full flex items-center">
            <img src={storyImg} alt="Ther Story" className="" />
          </div>
          <div className="w-full p-8">
            <h1 className="text-2xl font-bold mb-2">The Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              quod totam impedit, magni mollitia iste ex, ut libero officiis,
              dolor cum? Doloremque libero quas rerum eveniet accusamus
              molestias, dolorum dignissimos.
            </p>
            <div className="flex my-6">
              <div className="w-full px-4">
                <h1 className="font-bold text-2xl">1996</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  deserunt dolorum.
                </p>
              </div>
              <div className="w-full px-4">
                <h1 className="font-bold text-2xl">2024</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit
                  commodi modi et dicta!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto md:w-full">
        <div className="px-8">
          <div className="text-center lg:w-1/2 mx-auto">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              MENU
            </span>
            <h3 className="font-bold tracking-[1px] my-2 text-3xl">
              Popular Dishes
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              perferendis veritatis commodi iste a sint, vero maiores
              accusantium repellendus dolorum.
            </p>
          </div>

          {/* cards */}
          <div className="mt-16 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food1} title="Susesh" price={120} rating={4} />
            <Cards img={food2} title="Burger" price={150} rating={3} />
            <Cards img={food3} title="Noodle" price={140} rating={5} />
          </div>

          <div className="flex justify-center my-10">
          <NavLink to="/home/menu/alldishes">
            <Button
              className="my-6 w-36 h-12 bg-amber-500 text-slate-900 font-bold transition duration-300 hover:bg-amber-400 hover:text-slate-900"
              variant="outline"
            >
              See all dishes
            </Button>
          </NavLink>
          </div>
        </div>
      </section>

      {/* Offer */}
      <div className="bg-[var(--background-hero)]">
        <section className=" container mx-auto">
          <div className="lg:flex lg:px-16 px-8 py-16 mt-14 mb-8">
            <div className="max-w-2xl mx-auto text-center lg:text-start">
              <span className="text-xs  font-semibold uppercase text-gray-700 mb-2 border-y border-stone-800">
                WHAT WE OFFER
              </span>
              <h1 className="text-3xl font-bold mb-4">Our Great Services</h1>
              <p className="text-gray-600 mb-8">
                Lorem ipsum is that it has a more-or-less normal distribution
                content making it look like readable English.
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <img src={service1} className="w-20 lg:w-36" alt="" />
              <img src={service2} className="w-20 lg:w-36" alt="" />
              <img src={service3} className="w-20 lg:w-36" alt="" />
            </div>
          </div>
        </section>
      </div>

      <section className="container my-20 mx-auto px-8">
        <div className=" text-center lg:w-1/2 mx-auto">
          <span className="tracking-[6px] font-semibold border-y border-amber-500">
            TESTIMONIAL
          </span>
          <h3 className="font-bold tracking-[1px] my-2 text-3xl">
            What our clients say
          </h3>
          <p>
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          <TestimonialCards
            img={daniyal}
            name="Daniyal"
            location="Newyork"
            desc="It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly."
          />

          <TestimonialCards
            img={jack}
            name="Jack"
            location="San Diego"
            desc="It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly."
          />

          <TestimonialCards
            img={natasha}
            name="Natasha"
            location="Salt Lake City"
            desc="It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly."
          />
        </div>
      </section>

      <section className="container mx-auto">
        <div className="px-4">
          <div className=" text-center lg:w-1/2 mx-auto">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              BLOG
            </span>
            <h3 className="font-bold tracking-[1px] my-2 text-3xl">
              Be First Who Read News
            </h3>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content making.
            </p>
          </div>

          <div className="my-16 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-14 lg:px-20">
            <BlogCards
              img={apple}
              rest={"RESTURENTS"}
              date={"FEB 22,2022"}
              title={"The Most Popular Delicious Food Of Mediterranean Cuisine"}
              desc={
                "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality."
              }
            />
            <BlogCards
              img={jucie}
              rest={"RESTURENTS"}
              date={"FEB 22,2022"}
              title={"The Most Popular Delicious Food Of Mediterranean Cuisine"}
              desc={
                "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality."
              }
            />
          </div>
        </div>
      </section>

      {/* contact............................. */}
      <section className="">
        <div className="lg:px-8 px-4 relative h-screen flex items-center justify-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          />

          {/* Overlay for better text visibility */}

          {/* Content */}
          <div className="lg:w-[60%] md:w-[70%] w-[100%] relative z-20 text-center text-white bg-white bg-opacity-40 px-12 py-24">
            <p className="text-lg">Reservation</p>
            <h1 className="text-2xl font-bold mb-8">Book Your Table</h1>
            <form className="">
              <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-cols-1 gap-8 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className=" border-none rounded-md py-2 px-3 text-stone-900 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-none rounded-md py-2 px-3 text-stone-900 outline-none"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-8 ">
                <input
                  type="text"
                  placeholder="Person"
                  className="border-none rounded-md py-2 px-3 text-stone-900 outline-none"
                />
                <input
                  type="text"
                  placeholder="Timing"
                  className="border-none rounded-md py-2 px-3 text-stone-900 outline-none"
                />
                <input
                  type="text"
                  placeholder="Date"
                  className="border-none rounded-md py-2 px-3 text-stone-900 outline-none"
                />
              </div>
              <Button
                className="lg:grid-cols-3 border-none my-6 w-36 h-12 bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition duration-300 hover:text-slate-900"
                variant="outline"
              >
                Book a Table
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
