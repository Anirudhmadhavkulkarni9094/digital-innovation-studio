import Image from 'next/image'
import React from 'react'

function HeroBanner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="p-6  text-[15vw] leading-none font-bold uppercase flex flex-wrap items-center gap-4 text-center md:text-left">
        <span>Straight</span>
        <span>to the</span>
        <div className="w-[25vw] h-[12vw] relative overflow-hidden">
          <Image
            src="/HeroBanner.avif"
            alt="Hero Banner"
            fill
            className="object-cover"
          />
        </div>
        <span>bold ideas</span>
      </div>
    </div>
  );
}

export default HeroBanner;
