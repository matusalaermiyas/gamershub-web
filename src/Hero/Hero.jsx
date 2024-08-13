import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl self-center">Welcome to Gamers Hub</p>
      <p className="text-4xl mt-5 self-center">
        PUBG gaming organization place
      </p>
      <p className="text-4xl mt-5 self-center">for Ethiopians</p>
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
