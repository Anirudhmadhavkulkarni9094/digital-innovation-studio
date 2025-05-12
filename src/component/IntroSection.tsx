'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Fade from './Card/Fade';

interface IntroSectionProps {
  text: string;
  showButton?: boolean;
  fontSize?: string; // Accept fontSize as a string (e.g., "2rem", "3rem")
}

const IntroSection: React.FC<IntroSectionProps> = ({
  text,
  showButton = false,
  fontSize = '2rem',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate from center (0) to right (off-screen)
  const xSlide = useTransform(scrollYProgress, [0, 1], [0, containerWidth + 1000]);

  return (
    // <div
    //   ref={containerRef}
    //   className="relative flex w-full flex-col gap-10 min-h-[80vh] items-center justify-center p-10 overflow-hidden z-10"
    // >
      
    //   <motion.div
    //     style={{ x: xSlide }}
    //     className="absolute top-0 left-0 h-full w-full bg-white z-20 blur-xl"
    //   />
    // </div>
    <Fade>
<div
        className="z-10 text-center font-semibold"
        style={{ fontSize }}
      >
        {text}
      </div>

      {showButton && (
        <button className="bg-[#2b20ff] rounded-sm px-8 py-4 text-white cursor-pointer">
          ABOUT US
        </button>
      )}

    </Fade>
  );
};

export default IntroSection;
