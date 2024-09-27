import React from "react";
import { Button } from "@/components/ui/button";
import ok from "../../assets/thanks/ok.png";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className=' mx-auto md:w-3/4 px-4 lg:w-1/2 mt-10'>

      <form className="py-8 lg:px-14 md:px-8 px-2 bg-[var(--background-hero)] rounded-lg">
          <div className="text-center mx-auto mb-14 mt-4">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
            SIGNUP
            </span>
            <h3 className="font-normal tracking-[1px] mb-6 mt-1 text-base lg:text-lg">
              Let’s Start Your Dinner With Us
            </h3>
          </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  className=" border-2 border-gray-300 bg-transparent rounded-md text-gray-950 py-2 px-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 my-8">
                <input
                  type="number"
                  placeholder="Phone Number"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 my-8">
                <input
                  type="text"
                  placeholder="Address"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
                <input
                  type="number"
                  placeholder="ZIP Code"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
              </div>
              <div className='grid grid-1 gap-4'>

            
                
              </div>
              <Button
                className="lg:grid-cols-3 border-none my-6 w-full h-12 bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition duration-300 hover:text-slate-900"
                variant="outline"
              >
                Book a Table
              </Button>

              <div className="text-center font-medium">
                <p>Already have an account ? <NavLink to="/home/contact/login" className="text-amber-500">Login</NavLink></p>
              </div>
            </form>
      </section>
    // </section>
  );
};

export default SignUpPage;
