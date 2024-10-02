import React from "react";
import Carousel from "@/components/custom/carousel";
import { Text } from "@/components/custom/text";
import ProductCard from "@/components/custom/productcard";
const images = [
  "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png",
  "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/store_image.jpg",
  "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/watchwear.jpg",
];

export function HomePage() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full mb-16">
        <Carousel images={images} />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Text variant="heading" size="4xl" className="font-black mb-8">
          This Month's Picks
        </Text>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            isNew={true}
            imageSrc="https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png"
            productName="Galaxy S24 FE"
            description="Get double storage upgrade worth $100"
          />
          <ProductCard
            imageSrc="https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png"
            productName="Galaxy Z Flip6"
            description="Up to 15% off on Shop App + freebies"
          />
          <ProductCard
            imageSrc="https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png"
            productName="Galaxy Tab S9"
            description="25% off + freebies worth $200"
          />
          <ProductCard
            imageSrc="https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png"
            productName='50" QLED 4K'
            description="Bundle deals up to 35% off"
          />
          <ProductCard
            imageSrc="https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png"
            productName="SBS Refrigerator"
            description="Bundle deals up to 21% off"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
