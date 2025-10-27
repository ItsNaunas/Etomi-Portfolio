import Link from "next/link";
import HeroShowcase from "@/components/HeroShowcase";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import ProductCarousel from "@/components/ProductCarousel";
import MediaDraggableCards from "@/components/MediaDraggableCards";
import { Skiper52 } from "@/components/Skiper52";
import { Skiper30 } from "@/components/Skiper30";
import DarkBannerCTA from "@/components/DarkBannerCTA";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroShowcase />

      {/* Creative Services Preview */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Creative Services" 
            subtitle="Bringing depth, authenticity, and creative direction to every collaboration."
            theme="light"
          />
          
          <div className="mb-12">
            <ProductCarousel />
          </div>
          
          {/* Creative Services CTA */}
          <div className="text-center">
            <Link 
              href="/services"
              className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-semibold text-lg hover:brightness-90 transition-all inline-flex items-center gap-2"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Portfolio" 
            subtitle="A curated collection of editorial work, campaigns, and creative projects."
            theme="light"
          />
        </div>
        
        <Skiper30 />
      </section>

      {/* Media & Content Preview */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Media & Content" 
            subtitle="Exploring the overlap of personal expression, culture, storytelling, and presence."
            theme="light"
          />
          
          <div className="mb-12">
            <MediaDraggableCards />
          </div>
          
          {/* Media & Content CTA */}
          <div className="text-center">
            <Link 
              href="/media"
              className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-semibold text-lg hover:brightness-90 transition-all inline-flex items-center gap-2"
            >
              Explore Media →
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Shop" 
            subtitle="Digital resources, courses, books, and exclusive content."
            theme="light"
          />
          
          <div className="mb-12">
            <Skiper52 />
          </div>
          
          {/* Shop CTA */}
          <div className="text-center">
            <Link 
              href="/shop"
              className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-semibold text-lg hover:brightness-90 transition-all inline-flex items-center gap-2"
            >
              Visit Shop →
            </Link>
          </div>
        </div>
      </section>

      {/* Let's Create Together Banner */}
      <DarkBannerCTA
        title="Let's Create Together"
        subtitle="Whether you're seeking a strong on-camera voice, brand strategy, or creative direction, we can build something intentional and commercially effective."
        buttons={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "View Portfolio", href: "/portfolio" }
        ]}
      />
    </main>
  );
}