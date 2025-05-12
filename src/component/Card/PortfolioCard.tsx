import Image from 'next/image';
import React from 'react';

interface PortfolioCardProps {
  title: string;
  imageSrc: string;
}

function PortfolioCard({ title, imageSrc }: PortfolioCardProps) {
  return (
    <div className="w-full rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
      <Image
  src={imageSrc}
  alt={title}
  fill
  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
  priority
/>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-gray-700/70 to-transparent text-white text-xl sm:text-3xl font-bold p-4">
          {title}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
