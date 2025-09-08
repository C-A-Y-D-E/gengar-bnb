import React, { useState } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Goinomics = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <section className="w-full relative">
        <img
          className="w-full object-cover absolute top-0 inset-0 z-[-1]"
          src="goino_bg.png"
          alt=""
        />
        <div className="w-full container mx-auto px-6 py-16 lg:py-20 max-w-[1300px] text-white">
          <motion.h1
            className="text-center font-bold mb-10 lg:mb-28 text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Gehehe! Gengar's Ghost Coinomics
          </motion.h1>
          <motion.div
            className="w-full grid lg:grid-cols-3 place-items-center gap-8 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h1 className="text-lg md:text-xl lg:text-2xl">Name & Ticker</h1>
              <Item h2="Gengar" />
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="text-lg md:text-xl lg:text-2xl">Tax</h1>
              <Item h2="9%" />
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-lg md:text-xl lg:text-2xl">Supply</h1>
              <Item h2="4.69T" />
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 lg:mt-20 px-1 md:px-5 py-2 w-full max-w-[800px] flex items-center justify-between mx-auto bg-[#DC0000] border-2 border-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[11px] md:text-xl lg:text-2xl">
              0x3b8A11DB825df513e958C128098C226A5f5DDe20
            </h2>
            <CopyToClipboard
              text=" 0x3b8A11DB825df513e958C128098C226A5f5DDe20"
              onCopy={handleCopy}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="p-1 md:p-2 bg-white text-black uppercase text-[12px] md:text-xl lg:text-2xl tracking-widest"
              >
                {copied ? "Copied" : "Copy"}
              </motion.button>
            </CopyToClipboard>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Goinomics;

const Item = ({ h2 }) => {
  return (
    <div className="relative w-full">
      <img className="w-full max-w-[200px] object-cover" src="goino.png" />
      <h2 className="absolute bottom-[22.5%] left-1/2 -translate-x-1/2 uppercase text-lg md:text-xl lg:text-2xl">
        {h2}
      </h2>
    </div>
  );
};
