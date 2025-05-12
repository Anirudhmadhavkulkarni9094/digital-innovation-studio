'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Fade = ({
 children,
}:any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
offset: ['start 50%', '50% start'],
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
  const xSlide = useTransform(scrollYProgress, [0, 1], [1, containerWidth + 1000]);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col gap-10  items-center justify-center p-10 overflow-hidden z-10"
    >
      {children}

      <motion.div
        style={{ x: xSlide }}
        className="absolute top-0 left-0 h-full w-full bg-white z-20 blur-xl"
      />
    </div>
  );
};

export default Fade;
