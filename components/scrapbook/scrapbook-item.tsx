"use client";


import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


interface ScrapbookItemProps {
  src: string;
  alt: string;
  initialX: number | string;
  initialY: number | string;
  rotation?: number;
  width?: number;
  height?: number;
  zIndex?: number;
  priority?: boolean;
  spin?: boolean;
  spinDuration?: number;
  hoverSwing?: boolean;
  holographic?: boolean;

}



export const ScrapbookItem: React.FC<ScrapbookItemProps> = ({
  src, alt, initialX, initialY, rotation = 0, width = 200, height = 200,
  zIndex = 10, priority = false, spin = false, spinDuration = 3,
  hoverSwing = false, holographic = false,
}) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const parseValue = (val: number | string): number => {
    if (typeof val === "number") return val;
    return parseInt(val.toString().replace("px", ""), 10) || 0;
  };

  const x = parseValue(initialX);
  const y = parseValue(initialY);

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x, y, rotate: rotation }}
      animate={spin ? { rotate: rotation + 360 } : undefined}
      transition={spin ? { repeat: Infinity, duration: spinDuration, ease: "linear" } : undefined}
      whileDrag={{ scale: 1.1, zIndex: 1000 }}
      whileHover={hoverSwing
        ? { rotate: [rotation - 5, rotation + 5, rotation - 5, rotation], transition: { duration: 1.2 } }
        : { scale: 1.05 }
      }

      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={holographic ? handleMouseMove : undefined}
      style={{ position: "absolute", zIndex, cursor: "grab", touchAction: "none" }}
      className="select-none active:cursor-grabbing hidden lg:block"
    >
      <div className="relative group" style={{ width, height }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="pointer-events-none drop-shadow-lg object-contain transition-opacity"
          draggable={false}
        />

        {/* --- HOLOGRAPHIC SHINE LAYER --- */}
        {holographic && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.5 : 0,
              borderRadius: "50%",
              mixBlendMode: "overlay",
              // The dynamic angle (x + y) makes the rainbow rays spin as you move
              background: `linear-gradient(
                ${mousePos.x + mousePos.y}deg,
                transparent 0%,
                rgba(255, 0, 255, 0.3) 15%,
                rgba(0, 255, 255, 0.3) 30%,
                rgba(255, 255, 255, 0.5) 50%,
                rgba(255, 255, 0, 0.3) 70%,
                rgba(0, 255, 0, 0.3) 85%,
                transparent 100%
              )`,
              filter: "blur(4px)",
            }}
          />
        )}

        {/* --- DYNAMIC HIGHLIGHT (SPOTLIGHT) --- */}
        {holographic && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.8 : 0,
              borderRadius: "50%",
              mixBlendMode: "overlay",
              background: `radial-gradient(
                circle at ${mousePos.x}% ${mousePos.y}%,
                rgba(255, 255, 255, 0.4) 0%,
                transparent 15%
              )`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};