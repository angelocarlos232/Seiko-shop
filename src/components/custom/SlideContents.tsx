import React from 'react';

interface SlideContentProps {
  children: React.ReactNode;
}

export const FirstSlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return (
    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10">
      {children}
    </div>
  );
};

export const SecondSlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {children}
    </div>
  );
};

export const ThirdSlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return (
    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-10">
      {children}
    </div>
  );
};
