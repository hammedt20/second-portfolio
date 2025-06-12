"use client";

import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { AnimatePresence, motion } from "motion/react";
import MyWorks from "./components/myWorks";
import LeisureHero from "./components/leisureHero";
import Footer from "./components/footer";
import LeisureWorks from "./components/leisureWorks";
import { LuMail, LuPhone, LuScrollText } from "react-icons/lu";

export default function Home() {
  const [work, setWork] = useState("Proffessional");

  return (
    <div className="font-[family-name:var(--font-nunito)]">
      <Navbar work={work} setWork={setWork} />
      <AnimatePresence>
        {work === "Proffessional" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <MyWorks />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {work === "Leisure" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LeisureHero />
            <LeisureWorks />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col items-center gap-4 w-full max-w-[650px] mx-auto my-20">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-700 text-center">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi — my inbox is open!
          </p>
        </div>
        <div className="flex items-center gap-4 justify-between mt-8">
          <a
            href={"/Taiwo_Hammed_CV.pdf"}
            download={"Taiwo_Hammed.pdf"}
            className="flex items-center gap-2 font-semibold cursor-pointer px-4 py-2 rounded-full border border-gray-700 text-gray-700 hover:scale-90 transition-all duration-300"
          >
            <LuScrollText /> My Resume
          </a>
          <a
            href={"mailto:hammedt20@gmail.com"}
            className="flex items-center gap-2 font-semibold cursor-pointer px-4 py-2 rounded-full border border-gray-700 text-gray-700 hover:scale-90 transition-all duration-300"
          >
            <LuMail /> hammedt20@gmail.com
          </a>
          <a
            href={"tel:+2348027445284"}
            download={"Taiwo_Hammed.pdf"}
            className="flex items-center gap-2 font-semibold cursor-pointer px-4 py-2 rounded-full border border-gray-700 text-gray-700 hover:scale-90 transition-all duration-300"
          >
            <LuPhone /> +234-802-744-5284
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
