import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col">
      <p className="text-6xl self-center font-bold">Welcome to Gamers Hub</p>
      <p className="text-4xl mt-5 self-center">
        the ultimate PUBG gaming community for Ethiopians
      </p>

      <p className="text-4xl self-center">
        Join us and be part of a thriving organization where gamers come
        together
      </p>
      <p className="text-4xl  self-center">
        to compete, connect, and conquer the battlefield.
      </p>
      <Link
        to={"/tournaments"}
        className="bg-white text-gray-800 p-5 rounded-full mt-3 w-max self-center"
      >
        View Tournaments
      </Link>
    </div>
  );
}

export default Hero;
