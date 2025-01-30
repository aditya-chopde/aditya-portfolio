"use client"
import { motion } from "framer-motion";
import React from "react";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start at opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1 }} // Duration of animation
    >
      <div className="w-[325px] lg:w-[650px] mx-auto my-10">
        <h1 className="lg:text-xl font-bold pb-3">Description</h1>
        <hr />
        <div className="my-5">
          <p>
            A Full Stack Developer with a prior experience in building stuffs
            that can actually solve big problems easily.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
