import React, { useState } from "react";
import { useRouterFunctions } from "@/hooks/routerHooks"; // Ensure this path is correct
import AnimatedHamburgerButton from "./AnimatedHamburgerButton"; // Ensure this path is correct

const BurgerBarComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { goToHomePage, goToAboutPage, goToResumePage, goToBlogPage } = useRouterFunctions();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50">
      <AnimatedHamburgerButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`fixed top-0 right-0 bottom-0 bg-black z-40 transition-width duration-300 ${
          isOpen ? "w-full md:w-1/4" : "w-0"
        } overflow-hidden`}
      >
        <ul className={`ml-7 mt-20 text-8xl font-semibold flex flex-col ${isOpen ? "block" : "hidden"}`}>
          <li>
            <button className="mt-3 b-10 hover:bg-white hover:text-black text-white justify-end" onClick={goToHomePage}>
              Home
            </button>
          </li>

          <li>
            <button className="mt-3 b-10 hover:bg-white hover:text-black text-white justify-end" onClick={goToResumePage}>
              Resume
            </button>
          </li>
          <li>
            <button className="mt-3 b-10 hover:bg-white hover:text-black text-white justify-end" onClick={goToAboutPage}>
              About
            </button>
          </li>
          <li>
            <button className="mt-3 b-10 hover:bg-white hover:text-black text-white justify-end" onClick={goToBlogPage}>
              Blog
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerBarComponent;
