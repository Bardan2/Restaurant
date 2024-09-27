
import React from "react";
import Rating from "../home/Rating";

const Review = () => {
  return (
    <div className="my-0 bg-gray-0 py-2 px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="mt-3 text-3xl font-bold tracking-wide text-slate-900">
        Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {/* Review 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              alt="Emily Selman"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Emily Selman</h3>
            <p className="text-gray-500">
              <time dateTime="2021-07-16">July 16, 2021</time>
            </p>
                <Rating rating={5}/>
           
            <p className="text-gray-800">5 out of 5 stars</p>
            <p className="text-gray-600 mt-4">
              This icon pack is just what I need for my latest project. There's an
              icon for just about anything I could ever need. Love the playful look!
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              alt="Hector Gibbons"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Hector Gibbons</h3>
            <p className="text-gray-500">
              <time dateTime="2021-07-12">July 12, 2021</time>
            </p>
                <Rating rating={4}/>
            <p className="text-gray-800">5 out of 5 stars</p>
            <p className="text-gray-600 mt-4">
              Blown away by how polished this icon pack is. Everything looks so
              consistent and each SVG is optimized out of the box so I can use it
              directly with confidence.
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              alt="Mark Edwards"
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Mark Edwards</h3>
            <p className="text-gray-500">
              <time dateTime="2021-07-06">July 6, 2021</time>
            </p>
                <Rating rating={3}/>
            <p className="text-gray-800">5 out of 5 stars</p>
            <p className="text-gray-600 mt-4">
              The consistency and quality of these icons are amazing. It's hard to
              believe that they come at such a reasonable price. Definitely worth
              it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

