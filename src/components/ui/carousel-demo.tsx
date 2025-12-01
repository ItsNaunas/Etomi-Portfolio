"use client";

import Carousel from "@/components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Modelling & Editorial",
      button: "Explore Service",
      src: "/images/creative-services/modelling.jpeg",
    },
    {
      title: "Acting & Performance",
      button: "Explore Service",
      src: "/images/creative-services/acting.jpeg",
    },
    {
      title: "Branding & Strategy",
      button: "Explore Service",
      src: "/images/creative-services/branding.png",
    },
    {
      title: "Architecture & Design Thinking",
      button: "Explore Service",
      src: "/images/creative-services/architecture.jpeg",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}


