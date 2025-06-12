import { useRouter } from "next/navigation";
import Reveal from "./reveal";
import { LuGithub, LuMail } from "react-icons/lu";

const LeisureHero = () => {
  const router = useRouter();
  return (
    <main className="w-screen h-[calc(100vh-88px)] flex items-center justify-center relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="shape shapes-1"></div>
        <div className="shape shapes-2"></div>
        <div className="shape shapes-3"></div>
        <div className="shape shapes-4"></div>
        <div className="shape shapes-5"></div>
      </div>
      <div className="w-full max-w-[820px] mx-auto flex flex-col gap-6 items-center">
        <Reveal>
          <h1 className="text-[32px] leading-15 tracking-tighter text-center md:text-[64px] font-bold bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent">
            I love creating simple, user-friendly products.
          </h1>
        </Reveal>
        <Reveal>
          <p className=" md:text-lg text-center">
            When I&apos;m not working on professional projects, I enjoy
            exploring new technologies and building creative solutions to
            real-world problems. My personal projects range from web development
            and automation scripts to experimenting with APIs and frameworks.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("https://github.com/hammedt20")}
              className="flex items-center gap-2 px-4 py-3 font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-900 text-lg text-white cursor-pointer hover:scale-90 transition-all duration-300"
            >
              <LuGithub /> View My Github
            </button>
            <a
              href="mailto:hammedt20@gmail.com"
              className="border border-green-500 rounded-lg cursor-pointer flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent hover:scale-90 transition-all duration-300"
            >
              <LuMail className="text-green-500" /> hammedt20@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default LeisureHero;
