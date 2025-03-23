import WorkflowsImage from "../../../public/workflows.png";
import PrexImage from "../../../public/prex.png";
import StalletImage from "../../../public/stallet.png";
import FlexFeesImage from "../../../public/flexfees.png";
import MinieMoneyImage from "../../../public/miniemoney.png";
import GiftingImage from "../../../public/gifting.png";
import {
  FlexFeesIcon,
  MinieMoneyIcon,
  PrexIcon,
  StalletIcon,
  WorkflowsIcon,
} from "./customIcon";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const MyWorks = () => {
  const myProjects = [
    {
      id: 1,
      icon: <PrexIcon />,
      title: "Prex",
      description:
        "PREX provides the most secure and convenient way for users to trade property and access land registry services, anywhere, anytime.",
      technologies: ["Next JS", "Tailwind", "REST API"],
      color: "#A738FF",
      href: "https://www.prexmarket.com/",
      image: PrexImage,
    },
    {
      id: 2,
      icon: <WorkflowsIcon />,
      title: "WorkflowsHr",
      description:
        "Handle your payroll, onboarding, retirement, time and attendance, and other management needs. Let us take care of the heavy lifting, so you can devote your energy to expanding your business.",
      technologies: ["Next JS", "Tailwind", "GraphQL"],
      color: "#08733c",
      href: "https://dashboard.workflowshr.com",
      image: WorkflowsImage,
    },
    {
      id: 3,
      icon: <FlexFeesIcon />,
      title: "FlexFees",
      description:
        "Powering Dreams with Instant Tuition Financing, Anytime, Anywhere",
      technologies: ["React", "Tailwind"],
      color: "#0167FC",
      href: "https://flexfees.ng/",
      image: FlexFeesImage,
    },
    {
      id: 4,
      icon: <MinieMoneyIcon />,
      title: "MinieMoney",
      description:
        "Building a seamless, secure, and intuitive banking experience tailored for teenagers—empowering them to save, spend, and grow their money with confidence.",
      technologies: ["React", "Tailwind", "Lottie"],
      color: "#005FEB",
      href: "https://miniemoney.com/",
      image: MinieMoneyImage,
    },
    {
      id: 5,
      icon: <MinieMoneyIcon />,
      title: "Gifting",
      description:
        "Building a seamless, secure, and intuitive banking experience tailored for teenagers—empowering them to save, spend, and grow their money with confidence.",
      technologies: ["React", "Tailwind", "REST", 'Paystack'],
      color: "#005FEB",
      href: "https://miniemoney.com/gifting",
      image: GiftingImage,
    },
    {
      id: 6,
      icon: <StalletIcon stroke="#7A5AF8" />,
      title: "Stallet",
      description:
        "Your all-in-one cross-chain and non-custodial mobile crypto wallet",
      technologies: ["React", "Tailwind", "Firebase", "Lottie"],
      color: "#7A5AF8",
      href: "https://stallet.co/",
      image: StalletImage,
    },
  ];

  return (
    <div className="w-full max-w-[1024px] min-h-screen mx-auto">
      <div className="flex flex-col gap-6">
        <h2 className="underline text-center text-[32px]">Projects</h2>
        <div className="flex flex-col gap-8">
          {myProjects.map((item) => {
            const {
              id,
              icon,
              title,
              description,
              technologies,
              color,
              href,
              image,
            } = item;
            return (
              <div
                key={id}
                className="w-full rounded-[32px] p-[32px] scale-90 bg-[#f8f8f8] hover:scale-100 hover:bg-white flex items-center gap-8 transition-all duration-300 flex-wrap md:flex-nowrap"
              >
                <div className="flex flex-col gap-4 w-full md:min-w-[400px]">
                  <div className="w-fit flex items-center justify-center p-3 rounded-2xl bg-white">
                    {icon}
                  </div>
                  <h2
                    className={`text-[48px] font-bold`}
                    style={{ color: color }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm">{description}</p>
                  <div className="flex items-center flex-wrap gap-2">
                    {technologies.map((item, index) => {
                      return (
                        <span
                          key={index}
                          style={{ borderColor: color }}
                          className={`px-3 py-2 rounded-full border bg-transparent w-fit text-sm`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  <Link
                    href={href}
                    style={{ color: color }}
                    className={`text-sm underline cursor-pointer flex items-center gap-1`}
                  >
                    Live Url <LuArrowUpRight />
                  </Link>
                </div>
                <div style={{ backgroundColor: color }} className={`p-8`}>
                  <img src={image.src} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
