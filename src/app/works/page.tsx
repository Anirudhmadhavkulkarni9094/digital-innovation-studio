'use client';

import React from 'react';
import PortfolioWorkCard from '@/component/Card/PortfolioWorkCard';
import WorkBanner from '@/component/WorkBanner';

function Page() {
  return (
    <div className="px-4 py-10 "> {/* Light background wrapper */}
      <WorkBanner />
      <div className='min-h-screen'></div>
      {/* Section with white background */}
      <div className="bg-white py-30 px-4 mt-10 z-10">
        <div className="grid bg-white grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <PortfolioWorkCard
            image="/portfolio-4.jpeg"
            category="Interior Design, Development"
            year="2022"
            title="LandLite"
            url="https://www.google.com"
          />
          <PortfolioWorkCard
            image="/portfolio-5.jpeg"
            category="Bags & Accessories, Development"
            year="2023"
            title="Elegance"
            url="https://www.google.com"
          />
          <PortfolioWorkCard
            image="/portfolio-6.jpeg"
            category="Clothing, Development"
            year="2024"
            title="Bombay Royal"
            url="https://www.google.com"
          />
          <PortfolioWorkCard
            image="/portfolio-7.jpeg"
            category="Healthcare, Development"
            year="2025"
            title="Mahasharman"
            url="https://www.google.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
