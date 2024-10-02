"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  FirstSlideContent,
  SecondSlideContent,
  ThirdSlideContent,
} from "./SlideContents";
import { Text } from "@/components/custom/text";

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 12000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-[1210px] h-[600px] overflow-hidden">
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 z-20"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <div className="w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } ${index === 0 ? "vignette" : ""} ${
              index === 1 ? "dark-overlay" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {index === 0 && (
              <FirstSlideContent>
                <div className="z-10 relative">
                  <h2 className="text-4xl font-bold mb-2">SRPH21K1</h2>
                  <p className="text-2xl mb-4">This month&apos;s best seller</p>
                  <div className="flex space-x-4">
                    <Button variant="default" className="z-10">
                      Buy now
                    </Button>
                    <Button variant="outline" className="z-10">
                      See more watches
                    </Button>
                  </div>
                </div>
              </FirstSlideContent>
            )}
            {index === 1 && (
              <SecondSlideContent>
                <div className="z-10 relative text-white text-center p-8 rounded-lg max-w-2xl mx-auto">
                  <Text variant="heading" size="5xl" className="mb-6">
                    Find Seiko Everywhere
                  </Text>
                  <Text variant="subheading" size="xl" className="mb-8">
                    From Asia to Europe, America to Australia
                  </Text>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-black border-white hover:bg-white hover:text-black"
                  >
                    Find a Store
                  </Button>
                </div>
              </SecondSlideContent>
            )}
            {index === 2 && (
              <ThirdSlideContent>
                <div className="z-10 relative text-white text-center p-8 rounded-lg max-w-2xl mx-auto">
                  <Text
                    variant="heading"
                    size="5xl"
                    className="mb-4 font-bold tracking-tight"
                  >
                    Always on Time
                  </Text>
                  <Text
                    variant="heading"
                    size="3xl"
                    className="mb-6 font-light italic"
                  >
                    In Any Attire
                  </Text>
                </div>
              </ThirdSlideContent>
            )}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 z-20"
        onClick={goToNext}
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
