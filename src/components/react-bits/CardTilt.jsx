import React, { useRef, useState } from 'react';

export default function CardTilt({
  children,
  className = "",
  maxTilt = 8, // max tilt angle in degrees
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (-maxTilt to +maxTilt)
    // rotateX is based on Y position (moving up tilts card backward, moving down tilts forward)
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * maxTilt;
    // rotateY is based on X position (moving right tilts card right, moving left tilts left)
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
