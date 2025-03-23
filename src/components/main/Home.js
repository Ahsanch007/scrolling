import React from "react";

export const Home = () => {
  return (
    <div className="h-screen max-w-[400px] mx-auto w-full flex justify-center items-center overflow-hidden relative">
      {/* Top Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white blur-lg z-10 pointer-events-none"></div>

      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white blur-lg z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="marquee-wrapper">
        <div className="marquee">
          {Array.from({ length: 12 }).map((_, index) => (
            <button key={index} className="marquee-item">
              Market research
            </button>
          ))}
          {/* Duplicate items for smooth looping */}
          {Array.from({ length: 12 }).map((_, index) => (
            <button key={`duplicate-${index}`} className="marquee-item">
              Market research
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
