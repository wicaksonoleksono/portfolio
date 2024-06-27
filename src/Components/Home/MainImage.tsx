import React from "react";
import Image from "next/image";

const MainImage: React.FC = () => (
  <div className="col-span-3 md:col-span-4 row-span-10 md:row-span-3 border-2 border-black p-3 hidden md:flex items-center justify-center relative translate-x-[-4px] translate-y-[-4px] shadow-[1px_1px_0px_black]">
    <Image
      src="/images/test.png"
      alt="Test Image"
      width={360}
      height={200}
      objectFit="contain"
      objectPosition="center"
    />
  </div>
);

export default MainImage;
