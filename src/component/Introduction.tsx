"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IntroSection from "./IntroSection";

function Introduction() {
  const text = "Digital Innovation Studio is a forward-thinking agency that transforms ideas into immersive digital experiences. We specialize in creating innovative web solutions, captivating designs, and strategic digital transformations that help brands make a splash in the digital world.";

  return (
    <div className="px-40">
    <IntroSection text={text} showButton={true} fontSize="2rem"/>
    </div>
  );
}

export default Introduction;
