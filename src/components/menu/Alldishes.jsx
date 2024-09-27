import React from 'react'
// import { Button } from "@/components/ui/button";
import food1 from "../../assets/home/food_1.jpg"
import food2 from "../../assets/home/food_2.jpg"
import food3 from "../../assets/home/food_3.jpg"
import Cards from '../home/Cards';
import { SearchIcon } from 'lucide-react';
import { FilterIcon } from 'lucide-react';
// import { NavLink } from 'react-router-dom';
import food4 from "../../assets/menu/food4.jpg"
import food5 from "../../assets/menu/food5.jpg"
import food6 from "../../assets/menu/food6.jpg"
import food7 from "../../assets/menu/food7.jpg"
import food8 from "../../assets/menu/food8.jpg"
import food9 from "../../assets/menu/food9.jpg"
import food10 from "../../assets/menu/food10.jpg"
import food11 from "../../assets/menu/food11.jpg"
import food12 from "../../assets/menu/food12.jpg"
import food13 from "../../assets/menu/food13.jpg"
import food14 from "../../assets/menu/food14.jpg"
import food15 from "../../assets/menu/food15.jpg"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavLink } from 'react-router-dom';



const Alldishes = () => {
  return (
    <div className=''>

<div className='my-4 ml-10'>
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
    <NavLink to="/">
    Home
    </NavLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <NavLink to="/home/menu">Menu
      {/* <BreadcrumbLink>Menu</BreadcrumbLink> */}
    </NavLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <NavLink to="/home/menu/alldishes">
    All Dishes
    </NavLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>

       <section className="container mt-20 mx-auto md:w-full">
        <div className="px-8">
          <div className="text-center lg:w-1/2 mx-auto">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              MENU
            </span>
            <h3 className="font-bold tracking-[1px] my-2 text-3xl">
              All Popular Dishes
            </h3>
            
          </div>

          {/* inputs */}
          <div className="my-14 flex flex-wrap justify-center lg:justify-start lg:space-x-4 lg:w-1/2 w-full bg-red-00 lg:mx-8">
            <div className='border-2 flex border-amber-300 rounded-lg items-center px-4 w-full'>
            <input type="text" className='outline-none py-2 w-full' />
            <SearchIcon className='text-amber-500 cursor-pointer hover:text-amber-600 h-full ml-3'/>
            </div>

            {/* filter */}
            {/* <div className='bg-red-200'>
              <FilterIcon/>
            </div> */}

          </div>

          {/* cards */}
          <div className="mt-16 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food1} title="Susesh" price={120} rating={4} />
            <Cards img={food2} title="Burger" price={150} rating={3} />
            <Cards img={food3} title="Noodle" price={140} rating={5} />
          </div>

          {/* cards 2 */}
          <div className="mt-16 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food4} title="Susesh" price={120} rating={4} />
            <Cards img={food5} title="Burger" price={150} rating={3} />
            <Cards img={food6} title="Noodle" price={140} rating={5} />
          </div>

          {/* cards 3 */}
          <div className="mt-16 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food7} title="Susesh" price={120} rating={4} />
            <Cards img={food8} title="Burger" price={150} rating={3} />
            <Cards img={food9} title="Noodle" price={140} rating={5} />
          </div>

          {/* cards 4 */}
          <div className="mt-16 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food10} title="Susesh" price={120} rating={4} />
            <Cards img={food11} title="Burger" price={150} rating={3} />
            <Cards img={food12} title="Noodle" price={140} rating={5} />
          </div>

          {/* cards 5 */}
          <div className="mt-16 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            <Cards img={food13} title="Susesh" price={120} rating={4} />
            <Cards img={food14} title="Burger" price={150} rating={3} />
            <Cards img={food15} title="Noodle" price={140} rating={5} />
          </div>

          
        </div>
      </section>
    </div>
  )
}

export default Alldishes