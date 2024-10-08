"use client";
import React, { useState } from "react";
import Carousel from "@/components/custom/carousel";
import { Text } from "@/components/custom/text";
import ProductCarousel from "@/components/custom/productcarousel";

const images = [
  "https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/flieger/carousel-1.png",
  "https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/others/store_image.jpg",
  "https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/others/watchwear.jpg",
];

const categories = ["5 Sports", "King Seiko", "Lukia", "Astron", "Presage", "Prospex"];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full mb-16">
        <Carousel images={images} />
      </div>
      <div className="w-full flex flex-col h-screen items-center">
        <Text variant="heading" size="4xl" className="font-black mb-8 tracking-tighter">
          This Month&apos;s Picks
        </Text>
        <div className="w-full mb-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <ProductCarousel selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default HomePage;
