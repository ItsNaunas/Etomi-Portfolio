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
      <section id="contact" className="relative py-24 bg-brand-dark overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffbd59 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Let's Create Together" 
            subtitle="Brand work, on-camera presence, campaigns, media, events, strategy."
            theme="light"
          />
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-brand-dark/95 to-brand-dark/80 border-2 border-brand-gold/40 shadow-2xl p-8 lg:p-10 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-gold/5"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="heading-serif text-2xl font-semibold text-brand-gold mb-2">
                      Send a Message
                    </h3>
                    <p className="body-sans text-brand-gold/80 text-sm">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="relative">
                      <label htmlFor="name" className="block body-sans text-sm font-medium text-brand-gold mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/60">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full pl-12 pr-4 py-3 border-2 border-brand-gold/50 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all body-sans bg-brand-dark/60 text-brand-gold placeholder-brand-gold/50 backdrop-blur-sm"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="block body-sans text-sm font-medium text-brand-gold mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/60">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full pl-12 pr-4 py-3 border-2 border-brand-gold/50 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all body-sans bg-brand-dark/60 text-brand-gold placeholder-brand-gold/50 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="message" className="block body-sans text-sm font-medium text-brand-gold mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-brand-gold/60">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full pl-12 pr-4 py-3 border-2 border-brand-gold/50 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all body-sans bg-brand-dark/60 text-brand-gold placeholder-brand-gold/50 backdrop-blur-sm resize-none"
                          placeholder="Tell me about your project, goals, and how we can work together..."
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-brand-gold text-brand-dark px-8 py-4 font-semibold text-lg hover:brightness-110 hover:shadow-lg hover:shadow-brand-gold/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Additional Info Cards - Takes 1 column on large screens */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand-dark/95 to-brand-dark/80 border-2 border-brand-gold/40 shadow-xl p-6 hover:border-brand-gold/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-serif text-lg font-semibold text-brand-gold mb-2">
                      Response Time
                    </h3>
                    <p className="body-sans text-brand-gold/90 text-sm">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-dark/95 to-brand-dark/80 border-2 border-brand-gold/40 shadow-xl p-6 hover:border-brand-gold/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-serif text-lg font-semibold text-brand-gold mb-2">
                      Project Types
                    </h3>
                    <p className="body-sans text-brand-gold/90 text-sm">
                      Brand campaigns, content strategy, speaking engagements, and consulting
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-dark/95 to-brand-dark/80 border-2 border-brand-gold/40 shadow-xl p-6 hover:border-brand-gold/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-serif text-lg font-semibold text-brand-gold mb-2">
                      Availability
                    </h3>
                    <p className="body-sans text-brand-gold/90 text-sm">
                      Currently booking projects for Q1 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}