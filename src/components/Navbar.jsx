import React from "react";
import { Link } from "react-router-dom";
import imgUrl from "../assets/Toto.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-linear-to-bl from-cyan-500/40 to-blue-500/40">
      <div>
        <Link to={"/"}>
          <img src={imgUrl} alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="text-xl text-center font-bold px-4 hover:text-white">
          <Link to={"/services"}>Services</Link>
        </div>
        <div className="text-xl text-center font-bold px-4 hover:text-white">
          <Link to={"/gallery"}>Gallery</Link>
        </div>
        <div className="text-xl text-center font-bold px-4 hover:text-white">
          <Link to={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
