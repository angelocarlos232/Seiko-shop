"use client";
import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/custom/text';
import { Button } from '@/components/ui/button';

interface ProductTileProps {
  imageSrc: string;
  productName: string;
  price: number;
}

const ProductTile: React.FC<ProductTileProps> = ({ imageSrc, productName, price }) => {
  return (
    <div className="bg-white rounded-lg drop-shadow-md overflow-hidden w-64 h-96 flex flex-col">
      <div className="relative h-48">
        <Image 
          src={imageSrc} 
          alt={productName} 
          layout="fill" 
          objectFit="contain"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <Text variant="default" size="lg" className='text-left'>
          {productName}
        </Text>

        <Text variant="caption" size="xl">
          ₱{price.toLocaleString()}
        </Text>
      </div>
      <Button variant="default" className="w-full mt-auto">
        Buy now
      </Button>
    </div>
  );
};

export default ProductTile;