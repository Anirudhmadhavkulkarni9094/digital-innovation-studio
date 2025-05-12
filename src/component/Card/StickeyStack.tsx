"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyMotionCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const card1Opacity = useTransform(scrollYProgress, [0.0, 0.2], [1, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const cardStyle =
    "sticky top-0 flex flex-col md:flex-row justify-between  md:px-12 bg-white";

  return (
    <div ref={containerRef} className="relative space-y-10">
      {/* Card 1 */}
      <motion.div className={cardStyle} style={{ opacity: card1Opacity }}>
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/67335740d23eaace3d16930c_service-4-big.avif"
            alt="strategy"
            className="w-full h-auto  object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 bg-black text-white p-6 ">
          <h3 className="text-[85px] font-semibold uppercase text-nowrap">Strategy</h3>
          <p className="text-[31px] font-bold text-gray-300">
            We craft comprehensive digital strategies that align with your business goals and resonate with your target audience.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Digital Strategy
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Brand Growth
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Market Analysis
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              ROI Optimization
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className={`${cardStyle} flex-col-reverse md:flex-row-reverse`}
        style={{ opacity: card2Opacity }}
      >
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/67335801aae2f03aae26e0fc_service-6-big.avif"
            alt="ui/ux design"
            className="w-full h-auto  object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 bg-black text-white p-6 ">
          <h3 className="text-[81px] font-semibold uppercase text-nowrap">UI/UX Design</h3>
          <p className="text-[31px] font-bold text-gray-300">
            Creating intuitive and engaging user experiences that delight your audience and drive meaningful interactions.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              User Research
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Interface Design
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Prototyping
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Usability Testing
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div className={cardStyle} style={{ opacity: card3Opacity }}>
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/67335801c5b08fc4f2f903da_service-5-big.avif"
            alt="web design"
            className="w-full h-auto  object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 bg-black text-white p-6 ">
          <h3 className="text-[85px] font-semibold uppercase text-nowrap">Web Design</h3>
          <p className="text-[31px] font-bold text-gray-300">
            Building beautiful, responsive websites that combine stunning aesthetics with powerful functionality.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Custom Design
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Responsive
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Performance
            </div>
            <div className="text-lg font-medium bg-[#222] w-fit text-white py-2 px-4 rounded-sm">
              Innovation
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
