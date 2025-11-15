import Image from "next/image";

const portfolioImages = [
  {
    src: "/images/portfolio/port4.jpeg",
    title: "Soft Focus",
    category: "Acting"
  },
  {
    src: "/images/portfolio/port1.jpeg",
    title: "Editorial Noir",
    category: "Editorial"
  },
  {
    src: "/images/portfolio/port7.jpeg",
    title: "After Hours",
    category: "Editorial"
  },
  {
    src: "/images/portfolio/port2.jpeg",
    title: "Runway Light",
    category: "Fashion"
  },
  {
    src: "/images/portfolio/port5.jpeg",
    title: "Studio Bloom",
    category: "Creative"
  },
  {
    src: "/images/portfolio/port8.jpeg",
    title: "Golden Hour",
    category: "Lifestyle"
  },
  {
    src: "/images/portfolio/port3.jpeg",
    title: "Gilded Frame",
    category: "Concept"
  },
  {
    src: "/images/portfolio/port6.jpeg",
    title: "Chrome Muse",
    category: "Campaign"
  },
  {
    src: "/images/portfolio/port9.jpeg",
    title: "City Lines",
    category: "Architecture"
  }
];

export default function MasonryGallery() {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {portfolioImages.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className="relative overflow-hidden rounded-2xl border border-border-card bg-brand-dark/40 break-inside-avoid group shadow-card"
        >
          <Image
            src={image.src}
            alt={`${image.title} - ${image.category}`}
            width={600}
            height={900}
            className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 45vw, 100vw"
            priority={index < 3}
          />
          <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white transition-opacity duration-500 group-hover:opacity-100">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold">
              {image.category}
            </span>
            <span className="heading-serif text-lg font-semibold">
              {image.title}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
