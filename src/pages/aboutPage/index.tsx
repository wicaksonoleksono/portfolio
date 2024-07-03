import React, { useEffect, useState } from "react";
import LayoutComponent from "@/Components/layoutComponent";
import MagnetButton from "@/Components/Common/MagnetButtonComponent/MagnetButton";

const calculateAge = (birthdate: string): string => {
  const now = new Date();
  const birthDate = new Date(birthdate);
  const ageInMilliseconds = now.getTime() - birthDate.getTime();

  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970; // Subtract epoch start year
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;
  const hours = ageDate.getUTCHours();

  return `${years} years, ${months} months, ${days} days and ${hours} hours`;
};

const Index: React.FC = () => {
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    const birthDate = "2001-01-02T10:53:00Z"; // UTC time of birth

    const updateAge = () => {
      setAge(calculateAge(birthDate));
    };

    const intervalId = setInterval(updateAge, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <LayoutComponent>
      <main className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:p-20 p-20 gap-4">
        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-4 h-auto md:h-full">
          <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10">
            <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
            <div className=" h-96"></div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 md:row-span-2 h-auto md:h-full">
          <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10">
            <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
            <div className="relative h-full">
              <h1 className="font-bold text-4xl">Preliminarily</h1>
              <p className="pt-5 font-semibold">
                Hi there, my name is Wicaksono. I'm <span>{age}</span> old and
                counting! I'm a machine learning engineer currently working on
                my master's at Universitas Gadjah Mada. I have a technical
                understanding of how machine learning and deep learning
                algorithms work. I'm a life long learner!
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 md:row-span-2 flex items-center justify-center h-auto md:h-full">
          <a
            href="https://calendly.com/wicaksonolxn/30min"
            className="flex flex-col items-center justify-center"
          >
            <MagnetButton />
            <h1 className="font-bold text-2xl">Grab a coffee with me?</h1>
          </a>
        </div>
      </main>
    </LayoutComponent>
  );
};

export default Index;
