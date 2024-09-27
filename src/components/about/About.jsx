import React from "react";
import { Button } from "@/components/ui/button";
import heroimg from "../../assets/about/aboutHero.png";
import SpecialCards from "./SpecialCards";
import pd from "../../assets/about/pd.png";
import dj from "../../assets/about/dj.png";
import sc from "../../assets/about/sc.png";
import vc from "../../assets/about/vc.png";
import girl from "../../assets/about/girl.jpg";
import b1 from "../../assets/about/b1.jpg";
import b2 from "../../assets/about/b2.jpg";
import b3 from "../../assets/about/b3.jpg";
import lu1 from "../../assets/about/Lu1.jpg";
import ld from "../../assets/about/LD2.jpg";
import cen from "../../assets/about/cen.jpg";
import ru from "../../assets/about/rU1.jpg";
import rd from "../../assets/about/rD2.jpg";
import storyImg from "../../assets/home/storyImg.jpg";
import ChefTeam from "./ChefTeam";
import bg from '../../assets/home/bgCont.jpg';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavLink } from "react-router-dom";



const About = () => {
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
    <BreadcrumbPage >About</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>

      <section className="container bg-red-00 mx-auto lg:h-128 py-24 lg:px-10">
        <div className="grid lg:grid-cols-2 bg-red-00 place-items-end lg:h-full">
          <div className="bg-blue-00 lg:text-start text-center lg:ml-8 px-6">
            <h3 className="font-normal tracking-[2px]">
              <span className=" border-t border-amber-500">ABOUT US</span>
            </h3>
            <h1 className="lg:text-4xl text-2xl font-bold my-3 tracking-wider">
              Quality and Tradition
            </h1>
            <p className="lg:mb-2 lg:text-xl text-base">
              Lorem ipsum officiis dolor sit amet consectetur adipisicing elit.
              Ipsam enim provident, incidunt in quisquam dolores officiis
              reiciendis illo, voluptas, facere molestiae officiis vitae.
              Perferendis neque saepe enim officiis numquam minima ut quo.
            </p>
            <Button
              className="my-6 w-40 h-12 border-none text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition duration-300"
              variant="outline"
            >
              See More
            </Button>
          </div>
          <div className="grid grid-cols-1 place-self-center lg:flex hidden">
            <img src={heroimg} className=" lg:w-80 lg:ml-32 pl-4" alt="" />
          </div>
        </div>
      </section>

      <section className="container my-6 mx-auto grid md:grid-cols-2 lg:flex justify-center items-center">
        <SpecialCards
          img={pd}
          title={"Fresh Product"}
          desc={"Professional consider everyone probls small niche friendly"}
          btn={"See"}
        />

        <SpecialCards
          img={sc}
          title={"Skilled Chefs"}
          desc={"Professional consider everyone probls small niche friendly"}
          btn={"See"}
        />

        <SpecialCards
          img={dj}
          title={"Drinks & Juices"}
          desc={"Professional consider everyone probls small niche friendly"}
          btn={"See"}
        />

        <SpecialCards
          img={vc}
          title={"Vegan Cuisinc"}
          desc={"Professional consider everyone probls small niche friendly"}
          btn={"See"}
        />
      </section>

      <section className="container mx-auto">
        <div className="lg:flex my-32">
          <div className="px-8 border-gray-700 w-full flex items-center">
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
            <span className="tracking-[6px] font-semibold mb-1 border-t border-amber-500">
              TEAM
            </span>
            <h3 className="font-bold tracking-[1px] mb-6 text-2xl lg:text-3xl">
              Meet Our Professional Chefs
            </h3>
          </div>

          <div className="flex grid lg:grid-cols-4 grid-cols-2">
            <ChefTeam img={girl} nam={"Shumitra"} cat={"Master Chef"} />
            <ChefTeam img={b1} nam={"Evan Mattew"} cat={"Master Chef"} />
            <ChefTeam img={b2} nam={"Diane	Clarkson"} cat={"Master Chef"} />
            <ChefTeam img={b3} nam={"Dan Rafalin"} cat={"Master Chef"} />
          </div>
        </div>
      </section>

      <section className="container mt-20 mx-auto md:w-full lg:mb-4 mb-14">
        <div className="px-8">
          <div className="text-center lg:w-1/2 mx-auto mb-14">
            <span className="tracking-[6px] font-semibold border-y border-amber-500">
              Galary
            </span>
            <h3 className="font-bold tracking-[1px] mb-6 mt-1 text-2xl lg:text-3xl">
              What We Make
            </h3>
          </div>

          {/* img.................... */}
          <div class="flex flex-wrap justify-center gap-4 lg:px-0 md:px-0 sm:px-20 px-0">
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

export default About;
