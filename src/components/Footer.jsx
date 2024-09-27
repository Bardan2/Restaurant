import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest    } from "react-icons/fa";
import logo from "../assets/home/logo-restonest.png";


const Footer = () => {
  return (
    <div>
    <footer className="bg-black text-white py-8 px-2 md:px-8 mt-20">
      <div className="max-w-6xl mx-auto">

        {/*contact  */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="grid grid-cols-1 lg:place-items-start place-items-center w-full text-sm my-6 md:mb-0">
            <h1 className="uppercase text-lg lg:text-2xl mb-4 w-22  border-t border-amber-500 ">Contact</h1>
            <p className='mt-4'>5 Rue Dalou, 75015 Paris</p>
            <p> <span className='text-amber-500'>Call -</span> +33 156 78 89 56</p>
            <p className='text-amber-500'>benoit@restonest.com</p>
          </div>

          {/* middle */}
          <div className=" grid w-full place-items-center text-center md:text-left mb-6 md:mb-0">
          <div className="lg:mb-6 md:my-0">
            <img src={logo} alt="RestoNest Logo" className="h-16 w-16 mx-auto md:mx-0" />
          </div>
            <h5 className="text-sm ">Join our mailing list for updates,</h5>
            <p className="text-sm mb-6">Get news & offers events.</p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-amber-500 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-r-md hover:bg-amber-400 transition duration-300">
                Subscribe
              </button>
            </div>
            <div className="text-sm text-center md:text-left my-4 md:mb-0">
            © Copyright - <span className='text-amber-500'>RestoNest</span> 2024 | Developed by <span className='text-amber-500'>Bardan Nepali</span>
          </div>
          </div>

        {/* link */}
          <div className="grid lg:place-items-end place-items-center w-full text-center md:text-right">
          <div className="flex space-x-4 mb-6">
         
            <FaInstagram size={20} className="cursor-pointer hover:text-orange-500 transition duration-300" />
            <FaFacebook size={20} className="cursor-pointer hover:text-orange-500 transition duration-300" />
            <FaTwitter size={20} className="cursor-pointer hover:text-orange-500 transition duration-300" />
            <FaPinterest size={20} className="cursor-pointer hover:text-orange-500 transition duration-300" />
          </div>
            <h4 className="uppercase mb-10 border-t border-amber-500 w-[130px]">Working Hours</h4>
            <p className="text-sm"><span className='text-amber-500'>Mon - Fri:</span> 7:00am - 10:00pm</p>
            <p className="text-sm"><span className='text-amber-500'>Sat:</span> 7:00am - 8:00pm</p>
            <p className="text-sm"><span className='text-amber-500'>Sun:</span> 8:00am - 6:00pm</p>
          </div>
        </div>

       
      </div>
    </footer>
    </div>
  )
}

export default Footer