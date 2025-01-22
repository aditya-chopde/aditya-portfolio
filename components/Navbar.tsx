import { svgs } from "@/public/asserts";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
  <nav className="flex justify-around items-center py-4">
    <div>
      <p>Aditya.</p>
    </div>
    <div>
      <ul className="flex justify-around items-center space-x-4">
        <li>Home</li>
        <li>About</li>
        <li className="border border-white rounded-full transition-all hover:bg-white hover:text-black px-5 py-2 cursor-pointer flex flex-row gap-1 items-center group">  
          <p>Contact</p>
          <img 
            src="arrow-up-right.svg" 
            alt="arrow-up-right-svg-icon" 
            className="w-0 opacity-0 transform scale-90 transition-all duration-300 group-hover:w-5 group-hover:opacity-100 group-hover:scale-100"
          />
        </li>
      </ul>
    </div>
  </nav>
</header>

    </>
  );
};

export default Navbar;
