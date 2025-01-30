import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Skills = () => {
  return (
    <div>
      <div className="w-[325px] lg:w-[650px] mx-auto my-10">
        <h1 className="lg:text-xl font-bold pb-3">Skills</h1>
        <hr />
        <div>
          <ul className="my-5 flex flex-row flex-wrap gap-5">
            <TooltipProvider>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="nextjs.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next JS</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="react.svg"
                      alt="react_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React JS</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="tailwind-css.svg"
                      alt="tailwind_css_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="javascript.svg"
                      alt="javascript_svg_icon"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>JavaScript</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="ts.svg"
                      alt="ts_svg_icon"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TypeScript</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="node.svg"
                      alt="node_svg_icon"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Node JS</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="html.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="css.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="c.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>C/C++</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="java.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>JAVA</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="python.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Python</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="mongodb.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MongoDB</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="jwt.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Json Web Tokens</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="express.svg"
                      alt="nextjs_svg"
                      className="w-12 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Express JS</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            </TooltipProvider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
