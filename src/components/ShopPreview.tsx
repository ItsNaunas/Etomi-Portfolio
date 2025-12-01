"use client";

import Image from "next/image";
import Link from "next/link";

const shopProducts = [
  {
    id: 1,
    image: "/images/shop/etsy.jpeg",
    title: "Etsy Boutique",
    category: "Digital Products",
    description: "Curated templates and creative resources for personal branding.",
    badge: "New",
  },
  {
    id: 2,
    image: "/images/shop/amazon.jpg",
    title: "Amazon Books",
    category: "Published Works",
    description: "Books on creative strategy and authentic professional presence.",
    badge: "Bestseller",
  },
  {
    id: 3,
    image: "/images/shop/ebook.png",
    title: "Digital E-Books",
    category: "Guides & Workbooks",
    description: "Instant download access to premium content and resources.",
    badge: "Popular",
  },
  {
    id: 4,
    image: "/images/shop/pdf.png",
    title: "PDF Resources",
    category: "Templates",
    description: "Quick-reference guides and checklists for brand development.",
    badge: "Free",
  },
];

export default function ShopPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {shopProducts.map((product) => (
        <Link href="/shop" key={product.id} className="group">
          <div className="relative aspect-[3/4] overflow-hidden border border-brand-gold/30 bg-brand-dark/80 hover:border-brand-gold transition-all duration-300">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-1">
                  {product.category}
                </p>
                <h3 className="heading-serif text-lg font-semibold text-white mb-1">
                  {product.title}
                </h3>
                <p className="body-sans text-xs text-brand-gold/80 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <span className="inline-block bg-brand-gold text-brand-dark px-3 py-1.5 rounded-full text-xs font-semibold">
                  View →
                </span>
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute top-2 right-2">
              <span className="bg-brand-gold text-brand-dark px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide">
                {product.badge}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

