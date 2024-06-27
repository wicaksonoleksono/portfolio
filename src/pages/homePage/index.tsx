import React from "react";
import { useRouterFunctions } from "@/hooks/routerHooks";
import LayoutComponent from "@/Components/layoutComponent";
import useFrontContent from "@/hooks/useFrontContent";
import Introduction from "@/Components/Home/Introduction";
import MainImage from "@/Components/Home/MainImage";
import Button from "@/Components/Common/commonHome/Button";

const Index: React.FC = () => {
  const front = useFrontContent();
  const { goToBlogPage, goToResumePage } = useRouterFunctions();

  return (
    <LayoutComponent>
      <main className="h-fit pt-20 md:pt-0 md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full h-full">
          <Introduction
            front={front}
            goToBlogPage={goToBlogPage}
            goToResumePage={goToResumePage}
          />
          <div className="p-8 md:p-24 grid grid-rows-9 grid-cols-3 gap-4 md:grid-rows-4 md:grid-cols-4 relative">
            <MainImage />
            <Button
              href="https://github.com/wicaksonoleksono"
              imgSrc="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              imgAlt="GitHub Logo"
            />
            <Button
              href="https://www.linkedin.com/in/wicaksono-leksono-muhamad-a536771b8/"
              imgSrc="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              imgAlt="LinkedIn Logo"
            />
          </div>
        </div>
      </main>
    </LayoutComponent>
  );
};

export default Index;
