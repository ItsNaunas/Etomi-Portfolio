import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import DarkBannerCTA from "@/components/DarkBannerCTA";

export default function About() {
  return (
    <main>
      {/* Title Section - Full Background Image with Overlay */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/port3.jpeg"
            alt="Etomi James"
            fill
            className="object-cover object-center lg:object-[center_70%]"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full min-h-[80vh] lg:min-h-[90vh] flex items-center">
          <div className="py-16 lg:py-24 max-w-2xl lg:max-w-3xl ml-0 lg:ml-16 xl:ml-24 2xl:ml-32">
            <h1 className="heading-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: '#52131e' }}>
              About Etomi James
            </h1>
            <div className="body-sans text-lg lg:text-xl leading-relaxed space-y-4" style={{ color: '#52131e' }}>
              <p>
                A multidimensional creative shaping stories, brands, and cultural moments with depth and intention.
              </p>
              <p>
                Etomi James is a multidisciplinary creative whose work is guided by emotional intelligence, clarity, and an elevated sense of aesthetic refinement. She moves through the creative industry with a depth that is both intuitive and intentional, bringing a rare blend of psychological awareness and luxury elegance to every project she touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Creative Approach - Text with Image */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="heading-serif text-4xl lg:text-5xl font-semibold text-brand-dark mb-8">
                The Creative Approach
              </h2>
              <div className="body-sans text-brand-dark leading-relaxed text-lg space-y-6">
                <p>
                  Etomi James is a multidisciplinary creative whose work is guided by emotional intelligence, clarity, and an elevated sense of aesthetic refinement. She moves through the creative industry with a depth that is both intuitive and intentional, bringing a rare blend of psychological awareness and luxury elegance to every project she touches.
                </p>
                <p>
                  Her perspective is rooted in understanding people, their emotions, their energy, their story, and translating that insight into work that feels precise, resonant, and undeniably sophisticated.
                </p>
              </div>
            </div>
            <div className="relative h-full">
              <Image
                src="/images/portfolio/port3.jpeg"
                alt="Etomi James"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fashion & Performance - Image with Text */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative h-full order-2 lg:order-1">
              <Image
                src="/images/portfolio/port4.jpeg"
                alt="Etomi James"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h2 className="heading-serif text-4xl lg:text-5xl font-semibold text-brand-dark mb-8">
                Fashion & Performance
              </h2>
              <div className="body-sans text-brand-dark leading-relaxed text-lg space-y-6">
                <p>
                  Within fashion and performance, Etomi is known for her ability to embody stillness, depth, and emotional range with striking elegance. Her presence carries a quiet intensity that commands attention: a balance of softness and strength that reads effortlessly on camera and on stage.
                </p>
                <p>
                  She approaches both mediums with discipline and artistic sensitivity, bringing a cinematic quality and editorial sharpness that align seamlessly with the world's leading fashion and film creatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strategy - Text with Image */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="heading-serif text-4xl lg:text-5xl font-semibold text-brand-dark mb-8">
                Brand Strategy
              </h2>
              <div className="body-sans text-brand-dark leading-relaxed text-lg space-y-6">
                <p>
                  Her work as a brand strategist reflects this same balance. Etomi builds identities the way she has built herself, intentionally, layer by layer, with meaning at the core. She values what is subtle, sincere, and essential.
                </p>
                <p>
                  Clients trust her not only for her elevated vision, but for her ability to understand the inner truth that shapes a brand's external expression.
                </p>
              </div>
            </div>
            <div className="relative h-full">
              <Image
                src="/images/portfolio/port5.jpeg"
                alt="Etomi James"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Essence Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="heading-serif text-4xl lg:text-5xl font-semibold text-brand-dark mb-8">
              Core Essence
            </h2>
            <div className="body-sans text-brand-dark leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Across every discipline, her essence remains unchanged: authentic, elegant, emotionally attuned, spiritually grounded, and driven by purpose. She believes that where truth meets vision, timeless work is created; and she carries that belief, quietly but confidently, into every collaboration and creative direction she undertakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Work Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="heading-serif text-4xl lg:text-5xl font-semibold text-brand-dark mb-8">
            The Work
          </h2>
          <div className="body-sans text-brand-dark leading-relaxed text-lg">
            <p>
              Whether in design, strategy, performance, or content creation, Etomi's work is defined by refined emotional awareness and a commitment to creating from the inside out. She aims to build work that is not merely seen, but deeply felt, a reflection of the grace, depth, and intentionality that guide her path.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DarkBannerCTA
        title="Ready to Create Together?"
        subtitle="Let's discuss how we can bring depth, intention, and refined elegance to your next project."
        buttons={[
          { label: "Start a Conversation", href: "/#contact" },
          { label: "View My Work", href: "/portfolio" }
        ]}
      />
    </main>
  );
}

