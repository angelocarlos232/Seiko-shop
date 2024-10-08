"use client";
import React, { useState } from "react";
import Carousel from "@/components/custom/carousel";
import { Text } from "@/components/custom/text";
import ProductCarousel from "@/components/custom/productcarousel";
import FilterBar from "@/components/custom/filterbar";
import ProductTile from "@/components/custom/product-tile";
import { seikoWatches } from "@/assets/dummydata/productDummyData";
import { Button } from "@/components/ui/button";

const images = [
  "https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/flieger/carousel-1.png",
  "https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/others/store_image.jpg",
  "https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/others/watchwear.jpg",
];

const categories = [
  "5 Sports",
  "King Seiko",
  "Lukia",
  "Astron",
  "Presage",
  "Prospex",
];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: unknown) => {
    setFilters(newFilters);
    // Here you would typically fetch or filter your watch data based on the new filters
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full mb-16">
        <Carousel images={images} />
      </div>
      <div className="w-full flex flex-col h-full items-center mb-16">
        <Text
          variant="heading"
          size="4xl"
          className="font-black mb-8 tracking-tighter"
        >
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
      <div className="flex flex-col items-center mb-4">
        <Text
          variant="heading"
          size="4xl"
          className="font-black mb-8 tracking-tighter"
        >
          The Shop
        </Text>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 sticky top-0">
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
        <div className="col-span-9 ">
          <div className="flex border shadow-sm items-center rounded-md h-16 w-4/5 px-4 py-2">
            <Text variant="caption" size="xl" className="mr-4">
              Sort by
            </Text>
            <div className="flex space-x-4">
              <Button variant="outline">Price</Button>
              <Button variant="outline">Diameter</Button>
              <Button variant="outline">Thickness</Button>
            </div>

            <Button
              variant="link"
              className="ml-auto transition-transform transform hover:scale-110"
            >
              Randomize 🎲
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-7">
            {seikoWatches.map((product, index) => (
              <ProductTile
                key={index}
                imageSrc={product.imageSrc}
                productName={product.productName}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
