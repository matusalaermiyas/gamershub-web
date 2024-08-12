import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold">Gamers Hub</h1>

      <ul className="flex">
        <li className="mr-5 font-bold">Competitions</li>
        <li className="mr-5 font-bold">Clans</li>
        <li className="mr-5 font-bold">Players</li>
        <li className="font-bold">Streamers</li>
      </ul>
    </div>
  );
}

export default Navbar;
