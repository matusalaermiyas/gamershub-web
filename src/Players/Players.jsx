import React from "react";
import Navbar from "../Navbar/Navbar";

function Players() {
  return (
    <div className="w-screen h-screen text-white font-custom bg-light-dark">
      <div className="w-screen pt-10 px-52 flex flex-col bg-light-dark ">
        <Navbar />

        <div className="mt-10"></div>

        <h1>Players</h1>
      </div>
    </div>
  );
}

export default Players;
