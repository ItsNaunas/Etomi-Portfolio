"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const ProductCarousel = () => {
  const products = [
    {
      src: "/images/creative-services/modelling.jpeg",
      alt: "Modelling & Editorial",
      title: "Modelling & Editorial",
    },
    {
      src: "/images/creative-services/acting.jpeg",
      alt: "Acting & Performance",
      title: "Acting & Performance",
    },
    {
      src: "/images/creative-services/branding.png",
      alt: "Branding & Strategy",
      title: "Branding & Strategy",
    },
    {
      src: "/images/creative-services/architecture.jpeg",
      alt: "Architecture & Design Thinking",
      title: "Architecture & Design Thinking",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_003
        className=""
        images={products}
        showPagination
        showNavigation
        loop
      />
    </div>
  );
};

export default ProductCarousel;

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string; title?: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 400px;
    padding-bottom: 50px !important;
  }

  .Carousal_003 .swiper-button-next,
  .Carousal_003 .swiper-button-prev {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background-color: #ffbd59;
    color: #52131e;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }

  .Carousal_003 .swiper-button-next:hover,
  .Carousal_003 .swiper-button-prev:hover {
    transform: translateY(-2px);
  }

  .Carousal_003 .swiper-pagination-bullet {
    background-color: #ffbd59 !important;
    opacity: 0.4;
    width: 14px;
    height: 4px;
    border-radius: 9999px;
    margin: 0 6px !important;
  }

  .Carousal_003 .swiper-pagination-bullet-active {
    opacity: 1;
    width: 32px;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-4xl px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <CarouselSlide {...image} />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-brand-dark" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-brand-dark" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

type CarouselSlideProps = {
  src: string;
  alt: string;
  title?: string;
};

const CarouselSlide = ({ src, alt, title }: CarouselSlideProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full w-full group rounded-2xl overflow-hidden border border-border-card">
      <div
        className={cn(
          "absolute inset-0 bg-brand-gold/20 animate-pulse transition-opacity duration-500",
          isLoaded && !hasError ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        className={cn(
          "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        )}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(false);
        }}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-brand-dark font-semibold bg-brand-gold/40">
          Image coming soon
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <span className="inline-flex px-4 py-2 rounded-full bg-brand-gold text-brand-dark font-semibold uppercase tracking-[0.2em] text-xs shadow-lg">
          {title}
        </span>
      </div>
    </div>
  );
};

export { Carousel_003 };
