"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop&crop=center",
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={gallery}
      className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-brand-dark p-[2vw]"
    >
      <Column images={[images[0], images[1], images[2]]} y={y} />
      <Column images={[images[3], images[4], images[5]]} y={y2} />
      <Column images={[images[6], images[7], images[8]]} y={y3} />
      <Column images={[images[6], images[7], images[8]]} y={y4} />
    </div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={`${src}`}
            alt="portfolio image"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

/**
 * Skiper 30 Parallax_002 — React + framer motion + lenis
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren't associated with the siena.film . They're independent recreations meant to study interaction design
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
