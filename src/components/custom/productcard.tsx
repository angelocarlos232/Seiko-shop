import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/custom/text';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  isNew?: boolean;
  imageSrc: string;
  productName: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ isNew, imageSrc, productName, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <div className="relative">
        {isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        )}
        <Image src={imageSrc} alt={productName} width={300} height={300} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <Text variant="heading" size="xl" className="mb-2">
          {productName}
        </Text>
        <Text variant="default" size="sm" className="mb-4 text-gray-600">
          {description}
        </Text>
        <Button variant="default" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;