"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 1",
      code: "# 01",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 2",
      code: "# 02",
    },
    {
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 3",
      code: "# 03",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 4",
      code: "# 04",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 5",
      code: "# 05",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 6",
      code: "# 06",
    },
    {
      src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 7",
      code: "# 07",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 8",
      code: "# 08",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&crop=center",
      alt: "Digital Product 9",
      code: "# 09",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <HoverExpand_001 className="" images={images} />{" "}
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <Link href="/shop" key={index}>
              <motion.div
                className="relative cursor-pointer overflow-hidden rounded-3xl"
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                  width: activeImage === index ? "24rem" : "5rem",
                  height: activeImage === index ? "24rem" : "24rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setActiveImage(index)}
                onHoverStart={() => setActiveImage(index)}
              >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                  >
                    <p className="text-left text-xs text-white/50">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
