import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import DraggablePolaroidStack from "@/components/DraggablePolaroidStack";
import DarkBannerCTA from "@/components/DarkBannerCTA";
import MediaDraggableCards from "@/components/MediaDraggableCards";

export default function Media() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Media & Content" 
            subtitle="Interviews, on-camera work, longform conversations, and creative POV."
            theme="light"
          />
        </div>
      </section>

      {/* Featured Video & Content */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500">Embedded video / YouTube</span>
            </div>
            
            {/* Content block */}
            <div className="bg-brand-dark/80 rounded-lg border border-brand-gold/30 shadow-card p-8">
              <h3 className="heading-serif text-2xl font-semibold text-brand-gold mb-4">
                Conscious Conversations
              </h3>
              <p className="body-sans text-brand-gold/90 mb-6">
                Thoughtful content that explores the intersection of creativity, culture, and personal growth. 
                From behind-the-scenes insights to deep conversations about brand strategy and creative direction.
              </p>
              <p className="body-sans text-brand-gold/90 mb-6">
                Join the conversation as we dive into topics like authentic storytelling, building meaningful brands, 
                and the art of creative collaboration in today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-gold text-brand-dark px-6 py-3 rounded-full font-medium hover:brightness-90 transition-all">
                  Watch Now
                </button>
                <button className="border border-brand-gold text-brand-gold px-6 py-3 rounded-full font-medium hover:bg-brand-gold hover:text-brand-dark transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Media Cards */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="heading-serif text-2xl font-semibold text-brand-gold mb-4">
              Interactive Media Experience
            </h3>
            <p className="body-sans text-brand-gold/90">
              Drag the cards to explore my creative content and media work
            </p>
          </div>
          <MediaDraggableCards />
        </div>
      </section>

      {/* Polaroid Stack */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="heading-serif text-2xl font-semibold text-brand-gold mb-4">
              Behind the Scenes
            </h3>
            <p className="body-sans text-brand-gold/90">
              Interactive moments and candid shots from creative projects
            </p>
          </div>
          <DraggablePolaroidStack />
        </div>
      </section>

      {/* CTA Banner */}
      <DarkBannerCTA
        title="Ready to Collaborate?"
        subtitle="Let's create compelling content together. From brand campaigns to thought leadership pieces, I bring authentic storytelling and strategic vision to every project."
        buttons={[
          { label: "Start a Project", href: "/contact" },
          { label: "View Portfolio", href: "/portfolio" }
        ]}
      />
    </main>
  );
}
