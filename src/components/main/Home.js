import React from "react";
import Marquee from "react-fast-marquee";

export const Home = () => {
  return (
    <div className="h-[100vh] max-w-[400px] mx-auto w-full flex justify-center items-center overflow-hidden relative">
      {/* Top Blur Overlay (Where Marquee Starts) */}
      <div className="absolute top-[80px] left-0 w-full h-20 bg-white blur-lg z-[99] pointer-events-none"></div>
      
      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-[80px] left-0 w-full h-20 bg-white blur-lg z-[99] pointer-events-none"></div>

      <div className="relative w-full flex items-center">
        <Marquee
          direction="up"
          speed={50}
          pauseOnHover={true}
          className="w-full pt-10" // Added padding to push content down
        >
          <div className="flex flex-col w-full">
            {/* Empty space to simulate start position */}
            <div className="h-20 w-full"></div>

            {/* Buttons */}
            {Array(12).fill("Market research").map((text, index) => (
              <button
                key={index}
                className="w-full rounded-full my-4 border border-gray-600 px-5 py-3 text-black text-center"
              >
                {text}
              </button>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
