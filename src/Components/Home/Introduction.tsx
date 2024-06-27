import React from "react";
import { Reddit_Mono } from "next/font/google";
import { CircleGradientSVG } from "@/svg/circle";

interface IntroductionProps {
  front: string;
  goToBlogPage: () => void;
  goToResumePage: () => void;
}

const redditMono = Reddit_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reddit",
});

const Introduction: React.FC<IntroductionProps> = ({
  front,
  goToBlogPage,
  goToResumePage,
}) => {
  return (
    <div
      className={`${redditMono.variable} bg-gradient-to-br bg-cover bg-fixed flex flex-col justify-center p-8 md:p-24 relative`}
    >
      <CircleGradientSVG />
      <div className="absolute inset-0 flex justify-start items-center">
        <svg width="600" height="400">
          <circle cx="300" cy="200" r="200" fill="url(#circleGradient)" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi there, my name is Wicaksono!
        </h1>
        <div className="flex flex-row text-3xl font-medium mt-3 pt-3">
          <h1>I build</h1>
          <h1 className="ml-2 bg-black text-white px-4 py-1 reddit_mono">
            {front}
          </h1>
        </div>
        <div className="mt-5 flex flex-row space-x-3 font-semibold">
          <button
            className="border-2 shadow-[1px_1px_0px_black] border-black px-4 py-2 font-semibold uppercase text-black transition-all duration-300 
                  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
            onClick={goToResumePage}
          >
            View Resume
          </button>
          <button
            className="border-2 shadow-[1px_1px_0px_black] border-black px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
            onClick={goToBlogPage}
          >
            My writings!
          </button>
        </div>
        <div className="flex mt-4 space-x-4 font-semibold text-xl">
          A Lifelong learner journey
        </div>
      </div>
    </div>
  );
};

export default Introduction;
