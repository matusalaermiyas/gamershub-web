import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-2xl">
        <Link to={"/"}> Gamers Hub</Link>
      </h1>

      <ul className="flex">
        <li className="mr-6">
          <Link to={"/tournaments"}>
            <i class="las la-trophy mr-2"></i>Tournaments
          </Link>
        </li>
        <li className="mr-6">
          <Link to={"/clans"}>
            <i class="las la-skull-crossbones mr-2"></i>
            Clans
          </Link>
        </li>
        <li className="mr-6">
          <Link to={"/players"}>
            <i class="las la-user mr-2"></i>
            Players
          </Link>
        </li>
        <li>
          <Link to={"/streamers"}>
            <i class="lab la-twitch mr-2"></i> Streamers
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
