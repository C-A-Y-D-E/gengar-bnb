import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section>
        <div className="w-full container mx-auto px-6 py-16 lg:py-24 lg:pt-32 max-w-[1300px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full grid lg:grid-cols-2 place-items-center gap-8 mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full space-y-5 max-lg:text-center text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                "Gehehe! So, why me?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-lg md:text-xl lg:text-2xl"
              >
                "Why Gengar? Because he's literally the perfect crypto spirit.
                He laughs when you buy the top, he vanishes like your portfolio
                after a rug pull, and he knows the only thing scarier than
                ghosts is checking CoinMarketCap at 3am."
              </motion.p>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full max-w-[200px] inline-block"
                href="/"
              >
                <img
                  className="w-full object-cover max-w-[200px]"
                  src="buy_bg.png"
                  alt=""
                />
                <h2 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-lg md:text-xl lg:text-2xl font-bold">
                  Buy
                </h2>
              </motion.a>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full object-cover max-w-[500px]"
              src="about.gif"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
