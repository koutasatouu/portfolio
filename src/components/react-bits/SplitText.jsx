import React from 'react';
import { motion } from 'framer-motion';

export default function SplitText({
  text = "",
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.6,
}) {
  const words = text.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  };
  
  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: "100%",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block align-top overflow-hidden mr-[0.25em] last:mr-0 py-[0.1em]">
          <motion.span className="inline-block" variants={childVariants}>
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
