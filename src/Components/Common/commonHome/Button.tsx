import React from "react";

interface ButtonProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const Button: React.FC<ButtonProps> = ({ href, imgSrc, imgAlt }) => (
  <a
    href={href}
    className="flex flex-row justify-center items-center col-span-3 md:col-span-2 row-span-12 md:row-span-4 border-2 border-black shadow-[1px_1px_0px_black] md:bg-white px-4 py-2 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px]  active:shadow-none"
  >
    <img src={imgSrc} alt={imgAlt} className="w-24 h-24" />
  </a>
);

export default Button;
