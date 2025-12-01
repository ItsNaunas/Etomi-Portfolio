'use client';

import { useEffect } from "react";
import Link from "next/link";
import HeroShowcase from "@/components/HeroShowcase";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import CarouselDemo from "@/components/ui/carousel-demo";
import MediaDraggableCards from "@/components/MediaDraggableCards";
import { Skiper30 } from "@/components/Skiper30";
import ShopPreview from "@/components/ShopPreview";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  return (
    <main>
      {/* Hero Section */}
      <HeroShowcase />

      {/* Creative Services Preview */}
      <section className="pt-24 pb-12 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Creative Services" 
            subtitle="Bringing depth, authenticity, and creative direction to every collaboration."
            theme="light"
          />
          
          <div className="mb-12">
            <CarouselDemo />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="pt-12 pb-24 bg-brand-dark">
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
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Shop" 
            subtitle="Digital resources, books, and premium content."
            theme="light"
          />
          
          <div className="mb-8">
            <ShopPreview />
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

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2 className="heading-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-16">
            LET'S CONTACT US
          </h2>

          {/* Contact Form & Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="flex flex-col">
              <form className="space-y-8 flex-1">
                {/* Two Column Layout for Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block body-sans text-sm font-medium text-brand-dark mb-3 uppercase tracking-wide">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full pb-3 border-b-2 border-brand-dark/30 focus:border-brand-dark transition-all body-sans bg-transparent text-brand-dark placeholder-brand-dark/50 outline-none"
                      placeholder="Input your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block body-sans text-sm font-medium text-brand-dark mb-3 uppercase tracking-wide">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full pb-3 border-b-2 border-brand-dark/30 focus:border-brand-dark transition-all body-sans bg-transparent text-brand-dark placeholder-brand-dark/50 outline-none"
                      placeholder="Input your email"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block body-sans text-sm font-medium text-brand-dark mb-3 uppercase tracking-wide">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full pb-3 border-b-2 border-brand-dark/30 focus:border-brand-dark transition-all body-sans bg-transparent text-brand-dark placeholder-brand-dark/50 outline-none"
                    placeholder="Input phone number"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block body-sans text-sm font-medium text-brand-dark mb-3 uppercase tracking-wide">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full pb-3 border-b-2 border-brand-dark/30 focus:border-brand-dark transition-all body-sans bg-transparent text-brand-dark placeholder-brand-dark/50 outline-none"
                    placeholder="Biffco Enterprises"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block body-sans text-sm font-medium text-brand-dark mb-3 uppercase tracking-wide">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full pb-3 border-b-2 border-brand-dark/30 focus:border-brand-dark transition-all body-sans bg-transparent text-brand-dark placeholder-brand-dark/50 outline-none resize-none"
                    placeholder="Input your message here"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-brand-gold text-white px-12 py-4 rounded-lg font-semibold text-lg hover:brightness-90 transition-all inline-flex items-center gap-2"
                  >
                    SEND MESSAGE →
                  </button>
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="relative h-full">
              <img
                src="/images/hero/hero1.jpeg"
                alt="Contact"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}