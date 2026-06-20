import React from 'react';
import { motion } from 'framer-motion';

export default function InfiniteMarquee({
  direction = 'left',
  speed = 25, // duration in seconds for a full loop
  children,
  className = "",
}) {
  const xValue = direction === 'left' ? [0, "-50%"] : ["-50%", 0];

  return (
    <div className={`w-full overflow-hidden flex ${className}`}>
      <motion.div
        className="flex gap-12 shrink-0"
        animate={{ x: xValue }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {/* Render children twice for seamless looping */}
        <div className="flex gap-12 shrink-0 items-center">{children}</div>
        <div className="flex gap-12 shrink-0 items-center">{children}</div>
      </motion.div>
    </div>
  );
}
