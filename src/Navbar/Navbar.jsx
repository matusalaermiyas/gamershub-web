import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold">Gamers Hub</h1>

      <ul className="flex">
        <li className="mr-5 font-bold">
          <Link to={"/competitions"}>Competitions</Link>
        </li>
        <li className="mr-5 font-bold">
          <Link to={"/clans"}>Clans</Link>
        </li>
        <li className="mr-5 font-bold">
          <Link to={"/players"}>Players</Link>
        </li>
        <li className="font-bold">
          <Link to={"/streamers"}>Streamers</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
