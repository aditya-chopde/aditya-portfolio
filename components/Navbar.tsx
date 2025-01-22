import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="my-5 lg:my-3 relative">
        <nav className="flex justify-between lg:justify-around lg:items-center lg:py-4 mx-12 lg:mx-0">
          <div className="cursor-pointer">
            <p className="text-xl font-bold">Aditya.</p>
          </div>

          <div className="hidden lg:block">
            <ul className="lg:flex lg:justify-around lg:items-center lg:space-x-5">
              <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white hover:pb-1">Home</li>
              <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white hover:pb-1">About</li>
              <li className="lg:border lg:border-white lg:rounded-full lg:transition-all hover:bg-white hover:text-black lg:px-5 py-2 cursor-pointer lg:flex lg:flex-row gap-1 lg:items-center group">
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
