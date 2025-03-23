"use client";

import { useEffect, useRef } from "react";
import AnimatedText from "../components/animatedText";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion, useAnimation, useInView } from "motion/react";

const About = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);
  return (
    <div className="font-[family-name:var(--font-nunito)] ">
      <Navbar />
      <div className="w-screen h-full min-h-[calc(100vh-88px)] flex items-center justify-center relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="w-full max-w-[640px] flex flex-col gap-8 items-start py-[120px] px-5">
          {/* <h3 className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-[36px]">
            Hi again, I'm Hammed
          </h3> */}
          <AnimatedText text="Hi again, I'm Hammed" />
          <div ref={ref} className={`relative overflow-hidden`}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col gap-6"
            >
              <p>
                I&apos;m a frontend developer passionate about building
                seamless, scalable, and interactive web experiences. I started
                my journey during the COVID break, diving into web development
                through the HNG Bootcamp, where I built a new web app every week
                for 10 weeks in a fast-paced, team-driven environment.
              </p>
              <p>
                I later spent time teaching frontend development to kids during
                my industrial training, which deepened my understanding of core
                web technologies and how to make complex concepts accessible.
                Since then, I&apos;ve explored various technologies, from Dart
                with Flutter to Python for data structures and micro APIs, but
                my core stack revolves around React, TypeScript, GraphQL,
                Tailwind, Motion, and GSAP.
              </p>
              <p>
                I&apos;ve worked on e-commerce platforms, HR solutions, and
                fintech applications, always striving to build intuitive and
                high-performance interfaces. I love making the web feel alive
                through smooth animations and meaningful interactions.
              </p>
              <p>
                Outside of coding, I&apos;m usually playing video games,
                exploring new tech trends, watching movies, listening to music,
                or streaming content on YouTube. I enjoy learning new things,
                whether it&apos;s a new JavaScript framework or a random fact
                about space travel.
              </p>
              <p>
                If you ever want to talk about frontend development, cool side
                projects, or the latest in web animations, feel free to reach
                out! 🚀
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
