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
      src: "/images/shop/etsy.jpeg",
      alt: "Etsy Boutique",
      code: "# 01",
      title: "Etsy Boutique",
    },
    {
      src: "/images/shop/amazon.jpg",
      alt: "Amazon Books",
      code: "# 02",
      title: "Amazon Books",
    },
    {
      src: "/images/shop/ebook.png",
      alt: "Digital E-Books",
      code: "# 03",
      title: "Digital E-Books",
    },
    {
      src: "/images/shop/pdf.png",
      alt: "PDF Resources",
      code: "# 04",
      title: "PDF Resources",
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
  images: { src: string; alt: string; code: string; title?: string }[];
  className?: string;
}) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

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
                className="relative cursor-pointer overflow-hidden rounded-3xl border border-border-card bg-brand-dark/30"
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                  width: hoveredImage === index ? "24rem" : "5rem",
                  height: "24rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
              <AnimatePresence>
                {hoveredImage === index ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-black/30"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {hoveredImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-start justify-end p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                      {image.code}
                    </p>
                    <p className="heading-serif text-2xl font-semibold text-white">
                      {image.title}
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
