import React from 'react';
import { ReactNode } from 'react';

type CardContainerProps = {
  children: ReactNode;
  fullHeight?: boolean;
};

const CardContainer = ({ children, fullHeight = false }: CardContainerProps) => {
  return (
    <div className={`relative p-5  border-2 border-black shadow-[1px_1px_0px_black] hidden md:block overflow-hidden z-10 ${fullHeight ? 'h-full' : ''}`}>
      <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
