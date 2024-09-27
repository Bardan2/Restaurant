import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavLink } from "react-router-dom";


const Contact = () => {
  return (
    <>
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
    <BreadcrumbPage >Contact</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>

    {/* contact */}
    <section className='container mx-auto w-3/4 mt-20'>
          <form className="py-8 px-20 bg-[var(--background-hero)] rounded-lg">
          <div className="text-center mx-auto mb-14 mt-4">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              Galary
            </span>
            <h3 className="font-bold tracking-[1px] mb-6 mt-1 text-2xl lg:text-3xl">
              Send Valuable Feedback To Us
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
                  type="text"
                  placeholder="Subject"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone"
                   className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none"
                />
              </div>
              <div className='grid grid-1 gap-4'>

                <textarea name="textarea" placeholder='Message' id="textarea"  className=" border-2 border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-950 outline-none h-28"></textarea>
                
              </div>
              <Button
                className="lg:grid-cols-3 border-none my-6 w-36 h-12 bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition duration-300 hover:text-slate-900"
                variant="outline"
              >
                Book a Table
              </Button>
            </form>
    </section>

    </>

  )
}

export default Contact