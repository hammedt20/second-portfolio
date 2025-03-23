import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const today = new Date()
  return (
    <footer className="w-full mt-5 px-5 pt-[48px] pb-[32px] bg-[#f1f1f1]">
      <div className="max-w-[1024px] mx-auto w-full p-8 flex items-center justify-center">
        <div className="flex flex-col gap-8 items-center">
          <div className=" flex items-center gap-8">
            <Link href={""}>
              <BsTwitterX className="w-[32px] h-[32px] hover:scale-90 transition-all duration-300" />
            </Link>
            <Link href={"https://www.linkedin.com/in/taiwo-hammed-223781177/"}>
              <BsLinkedin className="w-[32px] h-[32px] hover:scale-90 transition-all duration-300" />
            </Link>
            <Link href={"https://github.com/hammedt20"}>
              <BsGithub className="w-[32px] h-[32px] hover:scale-90 transition-all duration-300" />
            </Link>
          </div>
          <p className="text-center">
            Copyright © {today.getFullYear()} Taiwo Hammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
