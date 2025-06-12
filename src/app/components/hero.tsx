import { LuMail, LuScrollText } from "react-icons/lu";
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
          <h1 className="tracking-tighter leading-[60px] text-[32px] text-center md:text-[64px] font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            I design and build intuitive, user-focused products that drive
            results.
          </h1>
        </Reveal>
        {/* <Reveal>
          <h3 className="text-lg md:text-[32px]">Software Engineer 🧑🏽‍💻</h3>
        </Reveal> */}
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
          <div className="flex items-center gap-4">
            <a
              href={"/Taiwo_Hammed_CV.pdf"}
              download={"Taiwo_Hammed.pdf"}
              className="flex items-center gap-2 px-4 py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-900 text-lg text-white cursor-pointer hover:scale-90 transition-all duration-300"
            >
              <LuScrollText /> My Resume
            </a>
            <a
              href="mailto:hammedt20@gmail.com"
              className="border border-blue-500 rounded-lg cursor-pointer flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent hover:scale-90 transition-all duration-300"
            >
              <LuMail className="text-blue-500" /> hammedt20@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Hero;
