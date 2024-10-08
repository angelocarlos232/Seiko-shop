"use client";
import React, { useState } from "react";
import Carousel from "@/components/custom/carousel";
import { Text } from "@/components/custom/text";
import ProductCarousel from "@/components/custom/productcarousel";
import FilterBar from "@/components/custom/filterbar";
import ProductTile from "@/components/custom/product-tile";
import {
  seikoWatches,
  images,
  categories,
} from "@/assets/dummydata/productDummyData";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filters, setFilters] = useState<unknown>({});

  const handleFilterChange = (newFilters: unknown) => {
    setFilters(newFilters);
    console.log(filters);
    // Here you would typically fetch or filter your watch data based on the new filters
  };

  const [visibleProducts, setVisibleProducts] = useState(12);

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 15); // Load 15 more products
  };

  const handleSeeLess = () => {
    setVisibleProducts((prev) => prev - 30); // Load 15 less products
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-7xl">
        <div className="h-full mb-16">
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
      </div>

      <div className="w-[99.1vw] bg-black py-12 h-[110vh] flex flex-col items-center justify-center mb-16">
        <div className="max-w-7xl">
          <Image
            src="https://seikoshopbucket.s3.ap-southeast-2.amazonaws.com/others/logo/seiko_logo.png"
            alt="Seiko Logo"
            className="mx-auto mb-8"
            width={150}
            height={50}
          />
          <Text
            variant="heading"
            size="4xl"
            className="font-black mb-8 tracking-tighter text-center text-white"
          >
            Why Choose Seiko
          </Text>
          <div className="space-y-6">
            <Text
              variant="default"
              size="lg"
              className="text-white text-justify"
            >
              Seiko has been at the forefront of watchmaking innovation for over
              a century, consistently delivering timepieces that blend
              traditional craftsmanship with cutting-edge technology. From
              introducing the world&apos;s first quartz watch to pioneering the
              use of titanium in watch cases, Seiko has repeatedly demonstrated
              its commitment to pushing the boundaries of what&apos;s possible
              in horology. This relentless pursuit of excellence ensures that
              when you choose a Seiko watch, you&apos;re not just wearing a
              timepiece – you&apos;re wearing a piece of horological history.
            </Text>
            <Text
              variant="default"
              size="lg"
              className="text-white text-justify"
            >
              Beyond innovation, Seiko is renowned for its exceptional quality
              and reliability across all price points. Whether you&apos;re
              investing in a prestigious Grand Seiko or opting for a robust
              Seiko 5 Sports model, you can trust that meticulous attention to
              detail and rigorous quality control have gone into every watch.
              Seiko&apos;s diverse range of collections caters to every style
              and need, from elegant dress watches to rugged dive watches,
              ensuring that there&apos;s a perfect Seiko for every wrist. By
              choosing Seiko, you&apos;re not just buying a watch; you&apos;re
              embracing a legacy of precision, durability, and timeless style.
            </Text>
          </div>
        </div>
      </div>
      <div className="min-w-[80rem]">
        <div className="w-7xl flex flex-col">
          <div className=" flex flex-col items-center mb-4">
            <Text
              variant="heading"
              size="4xl"
              className="font-black mb-8 tracking-tighter"
            >
              The Shop
            </Text>
          </div>
          <div className="grid grid-cols-12 mb-16">
            <div className="col-span-3">
              <FilterBar onFilterChange={handleFilterChange} />
            </div>
            <div className="col-span-9">
              <div className="flex border shadow-sm items-center rounded-md h-16 w-full px-4 py-2">
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
                {seikoWatches
                  .slice(0, visibleProducts)
                  .map((product, index) => (
                    <ProductTile
                      key={index}
                      imageSrc={product.imageSrc}
                      productName={product.productName}
                      price={product.price}
                    />
                  ))}
                {visibleProducts < seikoWatches.length && (
                  <div className="col-span-3 flex justify-center mt-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleSeeMore}
                    >
                      See More
                    </Button>
                  </div>
                )}
                {visibleProducts >= seikoWatches.length && (
                  <div className="col-span-3 flex justify-center mt-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleSeeLess}
                    >
                      See less
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
