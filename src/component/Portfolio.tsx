import React from 'react';
import PortfolioCard from './Card/PortfolioCard';

function Portfolio() {
  return (
    <div className="p-4 sm:p-10 lg:p-20 grid grid-cols-1 gap-10">
      <PortfolioCard title="LANDLITE" imageSrc="/portfolio-1.jpeg" />
      <PortfolioCard title="Elegance" imageSrc="/portfolio-2.jpeg" />
      <PortfolioCard title="BOMBAY ROYAL" imageSrc="/portfolio-3.jpeg" />
      {/* Add more cards as needed */}
    </div>
  );
}

export default Portfolio;
