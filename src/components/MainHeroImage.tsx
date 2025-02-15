/* eslint-disable prettier/prettier */
import React from 'react';

const MainHeroImage = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <video
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/bgvid.mp4" // Path relative to the public directory
        autoPlay 
        loop    
        muted   
        playsInline 
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MainHeroImage;