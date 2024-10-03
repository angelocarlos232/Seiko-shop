import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/custom/text';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  isNew?: boolean;
  imageSrc: string;
  productName: string;
  description: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ isNew, imageSrc, productName, description, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className} relative group transition-all duration-300 ease-in-out`}>
      <div className="relative h-3/5">
        {isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            New
          </span>
        )}
        <Image src={imageSrc} alt={productName} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 h-2/5 flex flex-col justify-between">
        <div>
          <Text variant="heading" size="xl" className="mb-2">
            {productName}
          </Text>
          <Text variant="default" size="sm" className="mb-4 text-gray-600">
            {description}
          </Text>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        <Button variant="ghost" className="w-full text-white hover:text-white">
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;