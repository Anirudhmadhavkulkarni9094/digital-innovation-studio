import React from 'react';

function PortfolioWorkCard({ image, category, year, title, url }: any) {
  return (
    <div className="relative bg-white w-[45vw] h-[45vw] overflow-hidden shadow-lg group">
      {/* Category and Year */}
      <div>
        <h1 className="absolute top-10 left-10 z-20 text-white font-semibold text-xl">{category}</h1>
        <p className="absolute top-10 right-10 z-20 text-white font-medium text-xl">{year}</p>
      </div>

      {/* Image */}
      <img src={image} className="object-cover h-full w-full" alt="work" />

      {/* Dim Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 group-hover:opacity-60 transition duration-300" />

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-20">
        <h1 className="text-6xl font-bold">{title}</h1>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-[#2b20ff] text-white rounded hover:bg-[#2720ff] transition"
        >
          VISIT SITE
        </a>
      </div>
    </div>
  );
}

export default PortfolioWorkCard;
