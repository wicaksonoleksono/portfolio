import React, { useEffect, useState } from "react";
import LayoutComponent from "@/Components/layoutComponent";
import CardContainer from "@/Components/cardComponent";
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
      <main className="h-screen grid grid-cols-3 grid-rows-4 md:p-20 gap-4">
        <div className="col-span-2 row-span-4 h-full">
          <CardContainer fullHeight={true}>h1</CardContainer>
        </div>

        <div className="col-start-3 row-span-2 ">
          <CardContainer fullHeight={true}>
            <h1 className="font-bold text-4xl">Preliminarily </h1>
            <p className="pt-5 font-semibold">
              Hi there, my name is Wicaksono. I'm <span>{age}</span> old and
              counting! I'm a machine learning engineer currently working on my
              master's at Universitas Gadjah Mada. I have a technical
              understanding of how machine learning and deep learning algorithms
              work. i'm a life long learner!
            </p>
          </CardContainer>
        </div>

        <div className="col-start-3 row-start-3 row-span-2 flex items-center justify-center">
          <a
            href="https://calendly.com/wicaksonolxn/30min"
            className="flex flex-col items-center justify-center"
          >
            <MagnetButton />
            <h1 className="font-bold text-2xl">Grab a coffee with me ?</h1>
          </a>
        </div>
      </main>
    </LayoutComponent>
  );
};

export default Index;
