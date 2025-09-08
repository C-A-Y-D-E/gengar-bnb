import React from "react";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <section>
      <div className="w-full container mx-auto px-6 py-16 lg:py-28 xl:py-32 max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full space-y-8 text-center text-white font-bold"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            Gehehe! Step into the shadows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-[750px] mx-auto text-lg md:text-xl lg:text-2xl font-bold"
          >
            Send us your spiciest crypto memes. If it makes Gengar cackle, we'll
            put it on the front page. No utility, no roadmap, just pure hopium
            and pain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              href="/"
            >
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="w-full object-cover max-w-[60px] md:max-w-[120px]"
                src="tele.png"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              href="/"
            >
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="w-full object-cover max-w-[80px] md:max-w-[120px]"
                src="x.png"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, y: 100, scale: 1.1 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full object-cover"
        src="join.gif"
      />
    </section>
  );
};

export default Join;
