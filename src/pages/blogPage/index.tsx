import React from "react";
import LayoutComponent from "@/Components/layoutComponent";
import MagnetButton from "@/Components/Common/MagnetButtonComponent/MagnetButton";
import { useRouter } from "next/router";
import { useRouterFunctions } from "@/hooks/routerHooks";
const Index: React.FC = () => {
  const router = useRouter();

  const { goToHomePage } = useRouterFunctions();

  return (
    <LayoutComponent>
      <main className="grid grid-cols-2 grid-rows-2 h-screen p-20 md:p-20 gap-4">
        <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
          <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
          <div className="relative h-full flex items-center justify-center">
            <p>Card 1</p>
          </div>
        </div>
        <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
          <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
          <div className="relative h-full flex items-center justify-center">
            <p>Card 2</p>
          </div>
        </div>
        <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
          <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
          <div className="relative h-full flex items-center justify-center">
            <p>Card 3</p>
          </div>
        </div>
        <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
          <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
          <div className="relative h-full flex items-center justify-center">
            <p>Card 4</p>
          </div>
        </div>
        <button
          onClick={goToHomePage}
          className="col-span-full relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          <h1>Go back to home!</h1>
        </button>
      </main>
    </LayoutComponent>
  );
};

export default Index;
