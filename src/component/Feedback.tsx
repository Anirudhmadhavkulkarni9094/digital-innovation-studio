import Image from "next/image";
import React from "react";
import IntroSection from "./IntroSection";
import FeatureCard from "./Card/FeatureCard";
import Fade from "./Card/Fade";

function Feedback() {
  const text =
    '"Working with Digital Innovation Studio was an exceptional experience from start to finish."';
  return (
    <div className="pb-20">
      <div className="flex flex-col justify-center min-h-screen items-center p-20 ">
        <img
          src="/logo.avif"
          alt="Logo"
          className="rounded-full w-50 h-50 bg-cover"
        ></img>
        <IntroSection text={text.toLocaleUpperCase()} fontSize="4.5rem" />
      </div>

      <div className="flex">
        <FeatureCard metric={"Featured work"} value={"3"} />
        <FeatureCard metric={"Projected Completed"} value={"15+"} />
        <FeatureCard metric={"Awwwards Featured"} value={"2X"} />
      </div>
      <div className="min-h-screen flex items-center flex-col justify-center">
        <Fade>
          <p className="text-[31px] px-10 text-center max-w-[80%] font-bold">
            Our expertise is in designing visuals that effectively connect with
            the target audience.
          </p>
        </Fade>
        <button className="bg-[#2b20ff] px-4 py-2 rounded-md text-white">
          WORK WITH US
        </button>
      </div>
    </div>
  );
}

export default Feedback;
