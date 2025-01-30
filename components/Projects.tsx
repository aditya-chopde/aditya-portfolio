"use client"
import {motion} from "framer-motion"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}  // Start at opacity 0
      animate={{ opacity: 1 }}  // Animate to opacity 1
      transition={{ duration: 1 }}  // Duration of animation
      >
      <div className="w-[325px] lg:w-[650px] mx-auto my-10">
        <h1 className="lg:text-xl font-bold pb-3">Projects</h1>
        <hr />
        <div className="my-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="p-3">
              <AccordionTrigger>
                Vitly - URL Shortener Platform
              </AccordionTrigger>
              <AccordionContent>
                <div>
                    <img src="vitly_hero_img.png" alt="vitly_hero_image" className="border border-black my-3 rounded-sm"/>
                    <p>Vitly is a URL shortener service web application that allows users to convert long URLs into short, manageable links, similar to Bitly. This project is built using the MERN stack (MongoDB, Express.js, React, and Node.js).</p>
                    <b>Live Link: </b> <a href="https://vitly-frontend.onrender.com/" className="hover:text-blue-500">Click Here</a>
                    <br />
                    <b>Github Link: </b> <a href="https://github.com/aditya-chopde/url-shortener" className="hover:text-blue-500">Click Here</a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
