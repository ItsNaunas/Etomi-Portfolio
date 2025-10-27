"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
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
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      alt: "Personal Branding Masterclass",
      title: "Personal Branding Masterclass",
      price: "$99",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      alt: "Social Media Template Pack",
      title: "Social Media Template Pack",
      price: "$29",
    },
    {
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
      alt: "Brand Strategy Workbook",
      title: "Brand Strategy Workbook",
      price: "$49",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      alt: "Content Creation Course",
      title: "Content Creation Course",
      price: "$149",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      alt: "Creative Entrepreneur's Guide",
      title: "Creative Entrepreneur's Guide",
      price: "$19",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      alt: "Presentation Templates",
      title: "Presentation Templates",
      price: "$39",
    },
    {
      src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop&crop=center",
      alt: "Photography Fundamentals",
      title: "Photography Fundamentals",
      price: "$79",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
      alt: "Business Growth Guide",
      title: "Business Growth Guide",
      price: "$59",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_003 className="" images={products} showPagination loop />
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
  images: { src: string; alt: string; title?: string; price?: string }[];
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
            <SwiperSlide key={index} className="">
              <div className="relative h-full w-full group">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={image.src}
                  alt={image.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-2xl font-bold text-brand-accent">{image.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };
