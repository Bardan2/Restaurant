import React from "react";
// import logo from "../../assets/home/logo-restonest.png";
import logo from "../assets/home/logo-restonest.png";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-black supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div className="max-w-7xl mx-auto ">
          <div className="py-5 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center ">
              <Link
                className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                to="/"
              >
                <span className="">
                  <img src={logo} className="w-20" alt="Logo" />
                </span>
              </Link>

              <div className="relative flex items-center ml-auto">
                <nav className="text-[17px] leading-6 font-semibold text-slate-200 dark:text-slate-200">
                  <ul className="flex space-x-16">
                    <li className="hidden md:flex">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "hover:text-amber-500 transition duration-300 text-amber-500"
                            : "hover:text-amber-500 transition duration-300 text-white"
                        }
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li className="hidden md:flex">
                      <NavLink
                        to="/home/about"
                        className={({ isActive }) =>
                          isActive
                            ? "hover:text-amber-500 transition duration-300 text-amber-500"
                            : "hover:text-amber-500 transition duration-300 text-white"
                        }
                      >
                        ABOUT
                      </NavLink>
                    </li>
                    <li className="hidden md:flex">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "hover:text-amber-500 transition duration-300 text-amber-500"
                            : "hover:text-amber-500 transition duration-300 text-white"
                        }
                        to="/home/menu"
                      >
                        MENU
                      </NavLink>
                    </li>
                    <li className="hidden lg:flex">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "hover:text-amber-500 transition duration-300 text-amber-500"
                            : "hover:text-amber-500 transition duration-300 text-white"
                        }
                        to="/home/reservation"
                      >
                        RESERVATION
                      </NavLink>
                    </li>
                    {/* hidden in lg */}
                    <li className="hidden lg:flex">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "hover:text-amber-500 transition duration-300 text-amber-500"
                            : "hover:text-amber-500 transition duration-300 text-white"
                        }
                        to="/home/contact"
                      >
                        CONTACT
                      </NavLink>
                    </li>
                    <Button
                      className="hidden md:flex bg-amber-500 hover:bg-amber-600 transition duration-300 text-black text-sm h-7 w-20"
                      variant=""
                    >
                       <NavLink to="/home/contact/login">
                                LOGIN
                              </NavLink>
                    </Button>
                  </ul>
                </nav>
              </div>

              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-6 h-6 text-gray-100 ml-6 dark:text-gray-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </SheetTrigger>

                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="flex justify-center mb-6">
                        <img src={logo} className="w-20" alt="Logo" />
                      </SheetTitle>
                      <SheetDescription>
                        <div className="relative flex justify-start ml-6 items-center ml-auto">
                          <nav className="text-[20px] leading-6 font-semibold text-slate-800 dark:text-slate-200">
                            <ul className="space-y-10 text-base text-start">
                              <li className="md:hidden">
                                <NavLink
                                  to="/"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "hover:text-amber-500 transition duration-300 text-amber-500"
                                      : "hover:text-amber-500 transition duration-300 text-black"
                                  }
                                >
                                  HOME
                                </NavLink>
                              </li>
                              <li className=" md:hidden">
                                <NavLink
                                  to="/home/about"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "hover:text-amber-500 transition duration-300 text-amber-500"
                                      : "hover:text-amber-500 transition duration-300 text-black"
                                  }
                                >
                                  ABOUT
                                </NavLink>
                              </li>
                              <li className="md:hidden">
                                <NavLink
                                  to="/home/menu"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "hover:text-amber-500 transition duration-300 text-amber-500"
                                      : "hover:text-amber-500 transition duration-300 text-black"
                                  }
                                >
                                  MENU
                                </NavLink>
                              </li>
                              <li className="lg:flex">
                                <NavLink
                                  to="/home/reservation"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "hover:text-amber-500 transition duration-300 text-amber-500"
                                      : "hover:text-amber-500 transition duration-300 text-black"
                                  }
                                >
                                  RESERVATION
                                </NavLink>
                              </li>
                              {/* hidden in lg */}
                              <li className="lg:flex">
                                <NavLink
                                  to="/home/contact"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "hover:text-amber-500 transition duration-300 text-amber-500"
                                      : "hover:text-amber-500 transition duration-300 text-black"
                                  }
                                >
                                  CONTACT
                                </NavLink>
                              </li>

                              <Button
                                className="md:hidden bg-amber-500 hover:bg-amber-400 text-black text-sm h-7 w-20"
                                variant=""
                              >
                              <NavLink to="/home/contact/login">
                                LOGIN
                              </NavLink>
                              </Button>
                            </ul>
                          </nav>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
