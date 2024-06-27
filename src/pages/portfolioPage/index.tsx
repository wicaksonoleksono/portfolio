import React from "react";
import { useRouterFunctions } from "@/hooks/routerHooks";
import BurgerBarComponent from "@/Components/SidebarComponent/burgerBarComponent";
import LayoutComponent from "@/Components/layoutComponent";
const index = () => {
  const {
    goToHomePage,
    goToAboutPage,
    goToResumePage,
    goToBlogPage,
  } = useRouterFunctions();

  return (
    <LayoutComponent>
      <main className="grid grid-cols-3 h-screen ">
        <div className="bg-[#F4F3ED] bg-gradient-to-br bg-cover bg-fixed flex justify-left col-span-2  h-auto"></div>
      </main>
    </LayoutComponent>
  );
};

export default index;
