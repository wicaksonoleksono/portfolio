import React from 'react';

const CircleGradientSVG = () => (
  <svg width="0" height="0">
    <defs>
      <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: "#ff00ff", stopOpacity: 0.2 }} /> 
        <stop offset="50%" style={{ stopColor: "#ff77ff", stopOpacity: 0.2 }} /> 
        <stop offset="100%" style={{ stopColor: "#add8e6", stopOpacity: 0.2 }} /> 
      </radialGradient>
    </defs>
  </svg>
);

const OvalGradientSVG = () => (
  <svg width="200" height="200" className='animate-spin'>
    <defs>
      <radialGradient id="ovalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: "#ff00ff", stopOpacity: 0.2 }} /> 
        <stop offset="50%" style={{ stopColor: "#ff77ff", stopOpacity: 0.2 }} /> 
        <stop offset="100%" style={{ stopColor: "#add8e6", stopOpacity: 0.2 }} /> 
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="50" rx="70" ry="50" fill="url(#ovalGradient)" />
  </svg>
);
export { CircleGradientSVG, OvalGradientSVG };
