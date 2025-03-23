"use client";

import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { AnimatePresence, motion } from "motion/react";
import MyWorks from "./components/myWorks";
import LeisureHero from "./components/leisureHero";
import Footer from "./components/footer";
import LeisureWorks from "./components/leisureWorks";

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

      <Footer />
    </div>
  );
}
