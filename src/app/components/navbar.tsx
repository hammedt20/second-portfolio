import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Dropdown, { NavReveal } from "./dropDown";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const Navbar = ({
  work,
  setWork,
}: {
  work?: string;
  setWork?: Dispatch<SetStateAction<string>>;
}) => {
    const [rotate, setRotate] = useState(false);
    const pathname = usePathname()

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggle = () => {
    if (rotate) {
      setDropdownVisible(false);
      setTimeout(() => setRotate(false), 300); // Match the duration of the slide-out animation
    } else {
      setRotate(true);
      setDropdownVisible(true);
    }
  };

  return (
    <NavReveal>
      <nav className="z-50 fixed top-0 left-0 w-screen p-5 bg-transparent">
        <div className="w-full max-w-[1024px] mx-auto flex items-center justify-between">
          <div className="font-bold rounded-full px-4 py-3 shadow bg-white cursor-pointer hover:scale-90 transition-all">
            <Link href={"/"}>Hammed.</Link>
          </div>
          {pathname === "/" && (
            <div className="bg-[#f5f5f5] hidden md:flex items-center p-1 rounded-full hover:scale-90 transition-all ">
              <div
                className={`px-3 py-2 rounded-full cursor-pointer font-bold ${
                  work === "Proffessional"
                    ? "bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text "
                    : ""
                }`}
                style={{
                  background: `${work === "Proffessional" ? "#fff" : ""}`,
                  transition: "all .3s",
                }}
                onClick={() => setWork && setWork("Proffessional")}
              >
                Proffessional
              </div>
              <div
                className="px-3 py-2 rounded-full cursor-pointer font-bold"
                style={{
                  background: `${work === "Leisure" ? "#fff" : ""}`,
                  transition: "all .3s",
                }}
                onClick={() => setWork && setWork("Leisure")}
              >
                Leisure
              </div>
            </div>
          )}
          {pathname === "/" && (
            <div className="bg-[#f5f5f5] fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden flex items-center p-1 rounded-full hover:scale-90 transition-all ">
              <div
                className={`px-3 py-2 rounded-full cursor-pointer font-bold ${
                  work === "Proffessional"
                    ? "bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text "
                    : ""
                }`}
                style={{
                  background: `${work === "Proffessional" ? "#fff" : ""}`,
                  transition: "all .3s",
                }}
                onClick={() => setWork && setWork("Proffessional")}
              >
                Proffessional
              </div>
              <div
                className="px-3 py-2 rounded-full cursor-pointer font-bold"
                style={{
                  background: `${work === "Leisure" ? "#fff" : ""}`,
                  transition: "all .3s",
                }}
                onClick={() => setWork && setWork("Leisure")}
              >
                Leisure
              </div>
            </div>
          )}
          <div
            onClick={handleToggle}
            className="relative cursor-pointer shadow rounded-full flex items-center justify-center w-[48px] h-[48px] "
          >
            <div className="hover:scale-90 flex flex-col gap-1 transition-all items-center justify-center">
              <p
                className="h-[2px] rounded-full bg-black w-6"
                style={{
                  transform: `${
                    dropdownVisible ? "rotate(45deg) translateY(4px)" : ""
                  }`,
                  transition: "all .3s",
                }}
              ></p>
              <p
                className="h-[2px] rounded-full bg-black w-6"
                style={{
                  transform: `${dropdownVisible ? "scale(0)" : ""}`,
                  transition: "all .3s",
                  display: `${dropdownVisible ? "none" : ""}`,
                }}
              ></p>
              <p
                className="h-[2px] rounded-full bg-black w-6"
                style={{
                  transform: `${
                    dropdownVisible ? "rotate(-45deg) translateY(-4px)" : ""
                  }`,
                  transition: "all .3s",
                }}
              ></p>
            </div>
            {
              <AnimatePresence>
                {dropdownVisible && (
                  <div
                    className={`absolute top-full right-0 transition-transform duration-300 `}
                  >
                    <Dropdown>
                      <div className="rounded-lg shadow-lg flex flex-col overflow-hidden bg-white w-[200px] mt-2">
                        <Link
                          href={"/"}
                          className="rounded-t-lg px-4 py-3 hover:bg-[#f8f8f8]"
                        >
                          Home
                        </Link>
                        <Link
                          href={"/about"}
                          className="rounded-b-lg px-4 py-3 hover:bg-[#f8f8f8]"
                        >
                          About Me
                        </Link>
                      </div>
                    </Dropdown>
                  </div>
                )}
              </AnimatePresence>
            }
          </div>
        </div>
      </nav>
    </NavReveal>
  );
};

export default Navbar;
