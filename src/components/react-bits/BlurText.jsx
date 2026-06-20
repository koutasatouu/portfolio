import React from 'react';
import { motion } from 'framer-motion';

export default function BlurText({
  text = "",
  className = "",
  delay = 0,
  stagger = 0.03,
  duration = 0.5,
}) {
  const letters = Array.from(text);
  
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
      filter: "blur(10px)",
      y: 10,
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
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
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre"
          variants={childVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
