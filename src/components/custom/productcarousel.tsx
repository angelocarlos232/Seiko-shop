"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/custom/productcard';

interface ProductCarouselProps {
  selectedCategory: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch products based on the selectedCategory
    // For this example, we'll use dummy data
    const dummyProducts = [
      {
        isNew: true,
        imageSrc: "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png",
        productName: `${selectedCategory} Watch 1`,
        description: "Latest model",
      },
      {
        imageSrc: "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png",
        productName: `${selectedCategory} Watch 2`,
        description: "Classic design",
      },
      {
        imageSrc: "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png",
        productName: `${selectedCategory} Watch 3`,
        description: "Limited edition",
      },
      {
        imageSrc: "https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png",
        productName: `${selectedCategory} Watch 4`,
        description: "Bestseller",
      },
    ];

    setProducts(dummyProducts);
  }, [selectedCategory]);

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 h-[600px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            isNew={product.isNew}
            imageSrc={product.imageSrc}
            productName={product.productName}
            description={product.description}
            className={index === 0 ? "md:col-span-2 lg:col-span-2 row-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
