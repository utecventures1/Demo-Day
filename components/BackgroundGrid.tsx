import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="1200"
        height="600"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="100%"
            fx="50%"
            fy="100%"
            r="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0d1117" />
            <stop offset="1" stopColor="#0d1117" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="600" fill="url(#grad1)" />
        <circle
          cx="600"
          cy="600"
          r="200"
          stroke="#1f2937"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
        <circle
          cx="600"
          cy="600"
          r="350"
          stroke="#1f2937"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
        <circle cx="600" cy="600" r="500" stroke="#1f2937" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default BackgroundGrid;
