import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function MediaDraggableCards() {
  const mediaItems = [
    {
      title: "Brand Strategy Interview",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-10 left-[15%] rotate-[-3deg]",
      description: "Deep dive into creative strategy"
    },
    {
      title: "Behind the Scenes",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[25%] rotate-[-5deg]",
      description: "Creative process in action"
    },
    {
      title: "Thought Leadership",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[40%] rotate-[4deg]",
      description: "Industry insights and trends"
    },
    {
      title: "Creative Collaboration",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-28 left-[55%] rotate-[6deg]",
      description: "Working with diverse teams"
    },
    {
      title: "Content Creation",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-16 right-[30%] rotate-[-2deg]",
      description: "Crafting compelling narratives"
    },
    {
      title: "Digital Innovation",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-4deg]",
      description: "Technology meets creativity"
    },
    {
      title: "Brand Storytelling",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-12 left-[35%] rotate-[3deg]",
      description: "Authentic brand narratives"
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-md -translate-y-3/4 text-center text-xl font-semibold text-brand-gold/80 md:text-2xl">
        Drag the cards to explore my media content and creative journey
      </p>
      {mediaItems.map((item, index) => (
        <DraggableCardBody key={`${item.title}-${index}`} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-64 w-64 object-cover rounded-md"
          />
          <h3 className="mt-4 text-center text-xl font-bold text-brand-dark dark:text-brand-gold">
            {item.title}
          </h3>
          <p className="mt-2 text-center text-sm text-brand-dark/70 dark:text-brand-gold/70">
            {item.description}
          </p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
