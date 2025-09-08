import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.section
        className="w-full relative md:h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          className="w-full object-cover max-md:min-h-[600px]"
          src="hero_bg.png"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <img
          className="w-full max-w-[300px] md:max-w-[700px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="hero.gif"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        <motion.img
          className="w-full object-cover max-w-[120px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] absolute right-0 top-[10%]"
          src="right_cloud.png"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            x: { duration: 1.2, delay: 0.8 },
            opacity: { duration: 1.2, delay: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
          whileHover={{ y: -10 }}
        />
        <motion.img
          className="w-full object-cover max-w-[120px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] absolute left-0 bottom-[10%]"
          src="left_cloud.png"
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -20, 0],
          }}
          transition={{
            x: { duration: 1.2, delay: 1 },
            opacity: { duration: 1.2, delay: 1 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            },
          }}
          whileHover={{ y: -10 }}
        />
      </motion.section>
    </>
  );
};

export default Hero;
