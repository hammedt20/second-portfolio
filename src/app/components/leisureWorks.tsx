import { BsDiscord } from 'react-icons/bs';
import DiscordImage from '../../../public/discord.png'
import ChopilosImage from '../../../public/chopilos.png'
import EsoImage from '../../../public/eso.png'
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';

const LeisureWorks = () => {
    const myProjects = [
      {
        id: 1,
        icon: <BsDiscord className="text-[#5865F2] text-3xl" />,
        title: "Discord Clone",
        description:
          "A frontend-focused Discord clone built with React and Firebase, featuring pixel-perfect design, real-time messaging, and user authentication. This project demonstrates my ability to create visually accurate, responsive interfaces and integrate third-party services like Firebase for seamless functionality.",
        technologies: ["React JS", "Firebase", "Context API"],
        color: "#5865F2",
        href: "https://discord-auth.netlify.app/",
        image: DiscordImage,
      },
      {
        id: 2,
        icon: (
          <p className="tracking-wider text-3xl italic font-bold">CHOPILOS</p>
        ),
        title: "Chopilos",
        description:
          "A dynamic web app built with React and Tailwind CSS that allows users to search for food recipes using a third-party API. The app features a clean, responsive design and provides detailed recipe information, including ingredients, instructions, and nutritional data. This project showcases my ability to integrate APIs, create user-friendly interfaces, and deliver seamless search functionality.",
        technologies: ["React JS", "Tailwind", "Edamam API"],
        color: "#00c950",
        href: "https://chopilos.netlify.app/",
        image: ChopilosImage,
      },
      {
        id: 3,
        icon: (
          <p className="flex items-center gap-2">
            <IoDiamondOutline /> É S Ò
          </p>
        ),
        title: "É S Ò ",
        description:
          "A dynamic web app built with React and Tailwind CSS that allows users to search for food recipes using a third-party API. The app features a clean, responsive design and provides detailed recipe information, including ingredients, instructions, and nutritional data. This project showcases my ability to integrate APIs, create user-friendly interfaces, and deliver seamless search functionality.",
        technologies: ["HTML", "CSS", "Javascript", "Slider JS"],
        color: "hsl(36,72%,48%)",
        href: "https://e-s-o.netlify.app/",
        image: EsoImage,
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
}

export default LeisureWorks