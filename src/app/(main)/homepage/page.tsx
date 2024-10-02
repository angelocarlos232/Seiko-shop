import React from 'react'
import Carousel from '@/components/custom/carousel'

const images = [
  'https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/carousel-1.png',
  'https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/store_image.jpg',
  'https://seikowatchesbucket.s3.ap-southeast-2.amazonaws.com/carousel/watchwear.jpg',
];

export function HomePage() {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default HomePage;
