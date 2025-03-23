import { LuScrollText } from "react-icons/lu";
import Reveal from "./reveal";

const Hero = () => {
  return (
    <main className="w-screen h-[calc(100vh-88px)] flex items-center justify-center relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
      <div className="w-full max-w-[820px] mx-auto flex flex-col gap-6 items-center">
        <Reveal>
          <h1 className="text-[32px] text-center md:text-[64px] font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            Hi, I&apos;m Taiwo Hammed.
          </h1>
        </Reveal>
        <Reveal>
          <h3 className="text-lg md:text-[32px]">Software Engineer 🧑🏽‍💻</h3>
        </Reveal>
        <Reveal>
          <p className=" md:text-lg text-center">
            I&apos;m a passionate <strong>Software Engineer</strong> with a
            track record of building{" "}
            <strong>high-performance web applications.</strong> From{" "}
            <strong>e-commerce platforms</strong> that drive sales to{" "}
            <strong>HR solutions</strong> streamlining workforce management and{" "}
            <strong>financial apps</strong> ensuring seamless transactions
          </p>
        </Reveal>
        <Reveal>
          <button className="flex items-center gap-2 px-4 py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-900 text-lg text-white cursor-pointer hover:scale-90 transition-all duration-300">
            <LuScrollText /> My Resume
          </button>
        </Reveal>
      </div>
    </main>
  );
};

export default Hero;
