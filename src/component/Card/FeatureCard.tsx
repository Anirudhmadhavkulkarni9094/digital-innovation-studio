import React from 'react';
import Fade from './Fade';

function FeatureCard({metric, value}:any) {
  return (
    <Fade>

    <div className="flex flex-col items-center text-center">
      <div className="text-[150px] font-bold leading-none">{value}</div>
      <p className="text-lg mt-2">{metric}</p>
    </div>
    </Fade>
  );
}

export default FeatureCard;
