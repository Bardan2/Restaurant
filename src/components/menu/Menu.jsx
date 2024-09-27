import React from 'react'
import { Button } from "@/components/ui/button";
import food1 from "../../assets/home/food_1.jpg"
import food2 from "../../assets/home/food_2.jpg"
import food3 from "../../assets/home/food_3.jpg"
import momoBg from "../../assets/menu/momoBg.jpg"
import panir from "../../assets/menu/panir.jpg"
import Cards from '../home/Cards';
import { NavLink } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const Menu = () => {
  return (
    <div className='mt-0'>



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
    <BreadcrumbPage >Menu</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>



    {/* dishes 1 */}
       <section className="container mt-20 mx-auto md:w-full">
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

      <div className='mt-16 mb-20'>
      <img src={momoBg} alt="momo" className="w-full h-full" />
      </div>


      {/* dishes 2 */}
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
      
      <div className='mt-16 mb-20'>
      <img src={panir} alt="momo" className="w-full h-full" />
      </div>

      {/* dishes 3 */}
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

    </div>
  )
}

export default Menu