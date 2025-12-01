import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

// Portfolio images - using all 9 available images and repeating some to fill 16 slots
const portfolioImages = [
  "/images/portfolio/port1.jpeg",
  "/images/portfolio/port2.jpeg",
  "/images/portfolio/port3.jpeg",
  "/images/portfolio/port4.jpeg",
  "/images/portfolio/port5.jpeg",
  "/images/portfolio/port6.jpeg",
  "/images/portfolio/port7.jpeg",
  "/images/portfolio/port8.jpeg",
  "/images/portfolio/port9.jpeg",
  "/images/portfolio/port1.jpeg", // Repeat to fill 16 slots
  "/images/portfolio/port2.jpeg",
  "/images/portfolio/port3.jpeg",
  "/images/portfolio/port4.jpeg",
  "/images/portfolio/port5.jpeg",
  "/images/portfolio/port6.jpeg",
  "/images/portfolio/port7.jpeg",
];

export default function Portfolio() {
  return (
    <main className="w-full">
      {/* 4x4 Grid Gallery - Full Width */}
      <section className="w-full bg-brand-dark pt-24">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {portfolioImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[3/4] overflow-hidden bg-gray-200 group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
