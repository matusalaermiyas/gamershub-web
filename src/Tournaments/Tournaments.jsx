import React from "react";
import Navbar from "../Navbar/Navbar";

function Competitions() {
  return (
    <div className="w-screen h-screen text-white font-custom bg-light-dark">
      <div className="w-screen h-screen pt-10 px-52 flex flex-col">
        <Navbar />

        <div className="mt-10"></div>

        <div className="bg-tourney-color h-80 rounded-lg flex w-fit p-6">
          <div className="h-64 w-60 bg-green-600 overflow-hidden rounded-lg">
            <img
              src="https://i.pinimg.com/736x/4f/f5/bb/4ff5bb75805aee7a4fd7cd3af33f82f3.jpg"
              className="object-cover h-64 w-60 rounded-lg"
              alt=""
            />
          </div>
          <div className="ml-8">
            <h1 className="font-bold underline">
              <i class="las la-info-circle mr-2"></i>Dark Boti Tournament
            </h1>
            <p className="mt-4 w-60 text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dicta accusantium voluptatum nesciunt voluptatibus,
              illo natus! Neque placeat vero illo dolore molestias voluptate
              fugit? Delectus nihil sunt error reprehenderit nulla.
            </p>
          </div>

          <div className="ml-8">
            <h1 className="font-bold underline">
              <i className="las la-calendar mr-2"></i> Start Date
            </h1>
            <p className="mt-4 text-gray-300">12/11/2024</p>
          </div>
          <div className="ml-8">
            <h1 className="font-bold underline">
              <i className="las la-pen mr-2"></i>Registration
            </h1>
            <p className="bg-green-300 rounded-full p-2 text-black mt-3 text-center">
              Register
            </p>
          </div>
        </div>
        <div className="mt-10"></div>

        <div className="bg-tourney-color h-80 rounded-lg flex w-fit p-6">
          <div className="h-64 w-60 bg-green-600 overflow-hidden rounded-lg">
            <img
              src="https://i.pinimg.com/736x/4f/f5/bb/4ff5bb75805aee7a4fd7cd3af33f82f3.jpg"
              className="object-cover h-64 w-60 rounded-lg"
              alt=""
            />
          </div>
          <div className="ml-8">
            <h1 className="font-bold underline">
              <i class="las la-info-circle mr-2"></i>Dark Boti Tournament
            </h1>
            <p className="mt-4 w-60 text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dicta accusantium voluptatum nesciunt voluptatibus,
              illo natus! Neque placeat vero illo dolore molestias voluptate
              fugit? Delectus nihil sunt error reprehenderit nulla.
            </p>
          </div>

          <div className="ml-8">
            <h1 className="font-bold underline">
              <i className="las la-calendar mr-2"></i> Start Date
            </h1>
            <p className="mt-4 text-gray-300">12/11/2024</p>
          </div>
          <div className="ml-8">
            <h1 className="font-bold underline">
              <i className="las la-pen mr-2"></i>Registration
            </h1>
            <p className="bg-green-300 rounded-full p-2 text-black mt-3 text-center">
              Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competitions;
