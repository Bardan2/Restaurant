import React from "react";
import lu1 from "../../assets/about/Lu1.jpg";
import ld from "../../assets/about/LD2.jpg";
import cen from "../../assets/about/cen.jpg";
import ru from "../../assets/about/rU1.jpg";
import rd from "../../assets/about/rD2.jpg";
import rzb from "../../assets/reserve/rzb.jpg";
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

const Reservation = () => {
  return (
    <>
      <div className="my-4 ml-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <NavLink to="/">Home</NavLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Reservation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* booking */}
      <div className="text-center lg:w-full mt-14">
        <span className="tracking-[6px] font-semibold border-y border-amber-500">
          RESERVATION
        </span>
        <h3 className="font-bold tracking-[1px] mb-6 mt-1 text-2xl lg:text-3xl">
          Book The Seat Now Here Easily
        </h3>
      </div>
      <div className="lg:flex w-full bg-red-00 lg:max-w-6xl mx-auto overflow-hidden mt-14">
        <div className="lg:w-1/2 px-20">
          <img
            src={rzb}
            alt="Reserved table with candles"
            className="lg:w-full lg:h-full w-[100%] h-96 object-cover flex"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          {/*  */}
          <div className="lg:text-start text-center lg:w-full mb-14">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              RESERVATION
            </span>
            <h3 className="font-bold tracking-[1px] mb-6 mt-1 text-2xl lg:text-3xl">
              Book your table now
            </h3>
            <p className="text-gray-600 mb-6">
              The music, food and the wine locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>
          </div>
          {/*  */}

          <form onSubmit={""} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                // onChange={handleChange}
                className="p-2 border-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                // onChange={handleChange}
                className="p-2 border-2 rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                // onChange={handleChange}
                className="p-2 border-2 rounded"
                required
              />
              <input
                type="date"
                name="date"
                // onChange={handleChange}
                className="p-2 border-2 rounded"
                required
              />
              <input
                type="time"
                name="time"
                placeholder="Time"
                // onChange={handleChange}
                className="p-2 border-2 rounded"
                required
              />
              <input
                type="number"
                name="person"
                placeholder="Person"
                // onChange={handleChange}
                className="p-2 border-2 rounded"
                required
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

      {/* img.................... */}
      <section className="container mt-28 mx-auto md:w-full lg:mb-4 bg-red-0 mb-14">
        <div className="px-8">
          <div className="text-center lg:w-1/2 mx-auto mb-14">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              Galary
            </span>
            <h3 className="font-bold tracking-[1px] mb-6 mt-1 text-2xl lg:text-3xl">
              What You Can Expact From Us
            </h3>
          </div>

          {/* img.................... */}
          <div class="flex flex-wrap justify-center gap-4 lg:px-0 md:px-0 sm:px-20 px-0 bg-blue-00">
            <div class="flex lg:flex-col gap-4 overflow-hidden">
              <img
                alt="Stack of pancakes with garnish"
                class="lg:w-60 lg:h-[34%] w-48 h-32 object-cover"
                height="300"
                src={lu1}
                width="200"
              />
              <img
                alt="Chef preparing food with chopsticks"
                class="lg:w-60 lg:h-[34%] w-48 h-32 object-cover"
                height="300"
                src={ld}
                width="200"
              />
            </div>
            <img
              alt="Interior of a modern restaurant with wooden furniture"
              src={cen}
              class="lg:w-[45%] lg:h-96 md:w-1/3 h-32 lg:px-0 md:p object-cover"
              height="400"
              width="600"
            />

            <div class="flex lg:flex-col gap-4 overflow-hidden">
              <img
                alt="Hand placing garnish on sushi"
                class="lg:w-60 lg:h-[34%] w-48 h-32 object-cover"
                height="300"
                src={ru}
                width="200"
              />
              <img
                alt="Hand holding a drink over a plate of food"
                class="lg:w-60 lg:h-[34%] w-48 h-32 object-cover"
                height="300"
                src={rd}
                width="200"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
