import React from "react";
import { motion } from "framer-motion";

const Buy = () => {
  return (
    <>
      <section className="w-full relative">
        <img
          className="w-full object-cover absolute top-0 left-0 z-[-1]"
          src="buyBg.png"
        />
        <div className="w-full container mx-auto px-6 pt-16 pb-8 lg:pt-20 max-w-[1300px] text-white">
          <motion.h1
            className="mb-12 lg:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gehehe! Wanna Join the Haunt? Here's How
          </motion.h1>
          <div className="w-full flex flex-col max-lg:items-center gap-12 lg:gap-28">
            <motion.div
              className="w-full lg:max-w-[900px] flex items-center gap-5 lg:self-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                1
              </h1>
              <p className="p-4 lg:p-8 bg-[#654192] font-bold text-lg md:text-xl lg:text-2xl">
                Download metamask or your wallet of choice from the app store or
                google play store for free. Desktop users, download the google
                chrome extension by going to metamask.io.
              </p>
            </motion.div>
            <motion.div
              className="w-full lg:max-w-[900px] flex items-center gap-5 lg:self-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                2
              </h1>
              <p className="p-4 lg:p-8 bg-[#654192] font-bold text-lg md:text-xl lg:text-2xl">
              Have BNB in your wallet to switch to GENGAR. If you don't have any BNB, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
              </p>
            </motion.div>
            <motion.div
              className="w-full lg:max-w-[900px] flex items-center gap-5 lg:self-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                3
              </h1>
              <p className=" p-4 lg:p-8 bg-[#654192] font-bold text-lg md:text-xl lg:text-2xl">
              Go to pancakeswap.finance in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the GENGAR token address into Uniswap, select GENGAR COIN, and confirm. When Metamask prompts you for a wallet signature, sign.
              </p>
            </motion.div>
            <motion.div
              className="w-full lg:max-w-[900px] flex items-center gap-5 lg:self-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                4
              </h1>
              <p className="p-4 lg:p-8 bg-[#654192] font-bold text-lg md:text-xl lg:text-2xl">
              Switch BNB for GENGAR. We have 3/3 Taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="w-full bg-[#2A0130] h-[10px] md:h-[25px] rotate-[-3deg]" />
          <div className="w-full bg-[#2A0130] h-[10px] md:h-[25px] rotate-[3deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </section>
    </>
  );
};

export default Buy;
