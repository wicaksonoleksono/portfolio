import React from "react";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import BurgerBarComponent from "./SidebarComponent/burgerBarComponent";

type ChildrenType = {
  children: ReactNode;
};

const LayoutComponent = ({ children }: ChildrenType) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
  };

  const router = useRouter();
  const currentTime = new Date();
  const formattedTime = formatTime(currentTime);
  const gmtString = "GMT+7";
  const displayTime = `${formattedTime} ${gmtString}`;

  return (
    <div className="bg-[#F4F3ED] text-black h-fit flex flex-col overflow-hidden">
      <header
        className="font-semibold flex flex-row text-2xl justify-between border-b-2 border-black fixed top-0 left-0 right-0 bg-[#F4F3ED] z-50 pb-2"
        style={{
          color: "#171717",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <h1 className="ml-6">[awp.]</h1>
        <h1 className="mr-6">{displayTime}</h1>
      </header>

      <div className="flex-grow pt-0 overflow-hidden">
        <BurgerBarComponent />
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default LayoutComponent;
