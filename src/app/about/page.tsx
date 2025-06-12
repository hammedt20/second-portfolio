"use client";

import { useEffect, useRef } from "react";
import AnimatedText from "../components/animatedText";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SecSchool from "../../../public/sec_school.jpeg";
import MeasuringDevice from "../../../public/measuring_device.jpeg";
import RoboticArm from "../../../public/robotic_arm.jpeg";
import Painting from "../../../public/painting.jpeg";
import Swimming from "../../../public/swim.jpeg";
import { motion, useAnimation, useInView } from "motion/react";
import { categorizedSkills, myExperience } from "./data";
import { LuMail, LuPhone, LuScrollText } from "react-icons/lu";

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
      <div className="w-screen h-full min-h-[calc(100vh-88px)] relative py-[120px]">
        {/* <img src={JunglePic.src} alt="" className="w-[200px]" /> */}

        <div className="w-full max-w-[640px] flex flex-col gap-8 mx-auto items-start px-5">
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
              <p className="mt-4">
                I am a proficient software developer with a strong foundation in
                building web solutions. As an expert in JavaScript and its
                modern frameworks, I specialize in crafting high-quality,
                scalable, and aesthetically pleasing applications. Whether
                it&apos;s frontend interfaces or backend logic, I bring ideas to
                life through clean and efficient code.
              </p>
              <p>
                My journey into tech began in secondary school, where I was
                introduced to <strong>BASIC programming</strong>. We used it to
                solve basic algebra problems — but to me, it felt like unlocking
                a superpower. I was fascinated by how a few lines of code could
                solve equations or simulate a calculator (which we weren&apos;t
                even allowed to use in class!). That obsession planted a seed
                that would shape my path.
              </p>
              <div>
                <div className="bg-white rounded-xl p-4 w-1/2 border border-gray-300">
                  <img src={SecSchool.src} alt="" className="rounded-lg" />
                </div>
                <p className="italic text-sm text-gray-500">
                  A picture of me in secondary school
                </p>
              </div>
              <p>
                Fueled by that early experience, I chose to study Electrical and
                Electronics Engineering in university. I wanted to go beyond
                writing code — I wanted to control the physical world with
                software. And I did. I built hardware projects like a robotic
                arm, a distance measuring device, and an autonomous robotic car.
              </p>
              <div className="flex items-start gap-4">
                <div>
                  <div className="bg-white rounded-xl p-4 border border-gray-300">
                    <img
                      src={MeasuringDevice.src}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <p className="italic text-sm text-gray-500">
                    A picture of me testing my measuring device
                  </p>
                </div>
                <div>
                  <div className="bg-white rounded-xl p-4 border border-gray-300">
                    <img src={RoboticArm.src} alt="" className="rounded-lg" />
                  </div>
                  <p className="italic text-sm text-gray-500">
                    A picture of my coupled robotic arm project
                  </p>
                </div>
              </div>
              <p>
                Although these projects were functional, I couldn&apos;t shake
                the feeling that they lacked visual appeal. That&apos;s when I
                discovered CSS — and it opened up a new world for me. I realized
                I could build things that weren&apos;t just powerful, but
                beautiful too.
              </p>
              <p>
                In 2020, during the COVID break, I finally had the time to dive
                deep into web development. The ability to create software that
                looked and felt good was addictive. I didn&apos;t just want to
                build, I wanted to design with purpose. That same year, I joined
                the HNG Internship Bootcamp. It was a pivotal moment — we formed
                teams weekly and shipped new projects under tight deadlines. The
                collaboration, pressure, and creativity shaped my skills like
                never before.
              </p>
              <p>
                Since then, I&apos;ve taught others, contributed to various
                teams, and worked on solutions in e-commerce, fintech, HR
                systems, and beyond. Every project helped me refine my skills,
                not just as a developer, but as a problem solver and creator.
              </p>
              <p>
                Outside of tech, I&apos;m passionate about art and fashion —
                maybe that&apos;s where my obsession with aesthetic software
                comes from. I also love hanging out with friends and going on
                random side quests that make life more fun.
              </p>
              <div className="flex items-start gap-4">
                <div className="flex-grow w-full">
                  <div className="bg-white rounded-xl p-4 border border-gray-300">
                    <img src={Painting.src} alt="" className="rounded-lg" />
                  </div>
                  <p className="italic text-sm text-gray-500">
                    A picture of one of my paintings
                  </p>
                </div>
                <div className="flex-grow w-full">
                  <div className="bg-white rounded-xl p-4 border border-gray-300">
                    <img src={Swimming.src} alt="" className="rounded-lg" />
                  </div>
                  <p className="italic text-sm text-gray-500">
                    A picture of me swimming
                  </p>
                </div>
              </div>
              <p>
                At the end of it all, my dream is simple: to build software that
                the world uses — something impactful, beautiful, and meaningful.
                I&apos;m just getting started.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full max-w-[640px] flex flex-col gap-8 items-start px-5 mx-auto mt-[120px]">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-lg md:text-[28px]">
              My Experience
            </h2>
            <p className="">My journey through tech roles</p>
          </div>
          <div className="flex flex-col gap-4">
            {myExperience.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 shadow-sm p-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg md:text-[24px]">
                      {item.company}
                    </h3>
                    <p>{item.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.duration} • {item.location}
                    </p>
                  </div>
                  <ul className="list-disc list-outside pl-6 text-sm text-gray-700 space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[640px] flex flex-col gap-8 items-start px-5 mx-auto mt-[120px]">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-lg md:text-[28px]">
              My Skills
            </h2>
            <p className="">
              Technologies that have defined my path in software development
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {categorizedSkills.map((category, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="font-semibold text-gray-800 border-b pb-1 border-gray-200">
                  {category?.category}:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category?.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-sm text-gray-700 hover:shadow-md hover:bg-gray-50 transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
};

export default About;
