'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Introduction from './Introduction';

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.2, // Trigger when 20% of the element is in the viewport
  });

  const { scrollY } = useViewportScroll();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  // Refined scroll transforms with increased ranges, only when the component is in view
  const ySlow = useTransform(
    scrollY,
    [0, 600],
    inView ? [0, 200] : [0, 0] // Apply only when inView
  );

  const yFast = useTransform(
    scrollY,
    [0, 300],
    inView ? [0, -100] : [0, 0] // Apply only when inView
  );

  const xSlide = useTransform(
    scrollY,
    [0, 600],
    inView ? [windowWidth +200, -windowWidth - 4500] : [0, 0] // Apply only when inView
  );

  return (
    <div>
      <div ref={ref} className="min-h-screen coolvetica flex flex-col gap-10">
        {/* Group 1 */}
        <div className="flex justify-around">
          <motion.div style={{ y: yFast }} className="z-20">
            <Image src="/image-1.avif" height={200} width={200} alt="hero image" />
          </motion.div>
          <motion.div style={{ y: yFast }} className="z-20">
            <Image src="/image-2.avif" height={200} width={200} alt="hero image" />
          </motion.div>
        </div>

        {/* Sliding Text */}
        <motion.div
          style={{ x: xSlide }}
          className="fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-Coolvetica text-center whitespace-nowrap pointer-events-none z-10"
        >
          DIGITAL INNOVATION STUDIOS
        </motion.div>

        {/* Group 2 */}
        <div className="flex justify-between px-20">
          <motion.div style={{ y: ySlow }} className="z-0">
            <Image src="/image-3.avif" height={300} width={300} alt="hero image" />
          </motion.div>
          <motion.div style={{ y: ySlow }} className="z-0">
            <Image src="/image-4.avif" height={200} width={200} alt="hero image" />
          </motion.div>
        </div>

        {/* Group 1 again */}
        <div className="flex justify-around">
          <motion.div style={{ y: yFast }} className="z-20">
            <Image src="/image-5.avif" height={200} width={200} alt="hero image" />
          </motion.div>
          <motion.div style={{ y: yFast }} className="z-20">
            <Image src="/image-6.avif" height={400} width={300} alt="hero image" />
          </motion.div>
        </div>
      </div>
     
    </div>
  );
}

export default Hero;
