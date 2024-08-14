import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

function Home() {
  return (
    <div className="w-screen h-screen  bg-[url('/assets/bg-1.jpg')] bg-cover bg-center text-white font-custom">
      <div className="w-screen h-screen p-10 flex flex-col bg-black bg-opacity-30 ">
        <Navbar />
        <div className="h-full w-full flex flex-col justify-center items-center">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default Home;
