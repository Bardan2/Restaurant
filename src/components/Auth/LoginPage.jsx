import React from "react";
import { Button } from "@/components/ui/button";
// import ok from "../../assets/thanks/ok.png";
import { NavLink } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  return (
    <section className=" mx-auto md:w-3/4 px-4 lg:w-1/2 mt-10">

      <form className="py-8 lg:px-14 md:px-20 px-4 bg-[var(--background-hero)] rounded-lg">
        <div className="text-center mx-auto mb-14 mt-4">
          <span className="tracking-[6px] font-semibold border-y border-amber-500">
            LOGIN
          </span>
          <h3 className="font-normal tracking-[1px] mb-6 mt-1 text-base lg:text-lg">
            Let’s Start Your Dinner With Us
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 lg:px-10 gap-8">
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
          <input
            type="password"
            placeholder="Password"
            className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
          />
        </div>
        
    

        <div className="text-center lg:px-10">
          <Button
            className="lg:grid-cols-3 border-none my-6 w-full h-12 bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition duration-300 hover:text-slate-900"
            variant="outline"
          >
            Book a Table
          </Button>
          <p>OR</p>
          
          <button className="flex items-center justify-center w-full my-4 py-3 px-4 border border-amber-400 text-amber-500 rounded-md hover:bg-amber-100 transition duration-300">
            <FcGoogle className="text-2xl mr-3" /> {/* Google icon */}
            <span className="text-gray-700 font-medium">
              Login with Google Account
            </span>
          </button>
        </div>

        <div className="text-center font-medium mt-4">
          <p>
            Don’t have an account ?{" "}
            <NavLink to="/home/contact/sign-up" className="text-amber-500">
              SignUp
            </NavLink>
          </p>
        </div>
      </form>
    </section>
    // </section>
  );
};

export default LoginPage;
