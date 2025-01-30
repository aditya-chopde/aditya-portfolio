import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="w-[325px] lg:w-[650px] mx-auto my-10 flex justify-between items-center">
        <div>
          <h1 className="lg:text-2xl text-xl font-bold">Aditya Chopde</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-3 justify-center">
            <a href="https://github.com/aditya-chopde" target="_blank">
              <img
                src="github.svg"
                alt="github_svg_icon"
                className="w-5 invert cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-chopde-486a102a2/"
              target="_blank"
            >
              <img
                src="linkedIN.svg"
                alt="linkedin_svg_icon"
                className="w-5 invert cursor-pointer"
              />
            </a>
            <a href="https://x.com/dev_aditya_ch" target="_blank">
              <img
                src="x.svg"
                alt="x_svg_icon"
                className="w-5 invert cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/adityachopde_here/"
              target="_blank"
            >
              <img
                src="instagram.svg"
                alt="instagram_icon_svg"
                className="w-5 invert cursor-pointer"
              />
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
