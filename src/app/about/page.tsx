import SectionHeader from "@/components/SectionHeader";
import DarkBannerCTA from "@/components/DarkBannerCTA";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="About Etomi" 
            subtitle="Creative talent, strategist, and storyteller."
            theme="light"
          />
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Portrait placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-[4/5] flex items-center justify-center">
              <span className="text-gray-500">Portrait Image</span>
            </div>
            
            {/* Bio content */}
            <div className="space-y-6">
              <div className="body-sans text-brand-gold/90 space-y-4">
                <p>
                  Etomi James is a multifaceted creative professional whose work spans modeling, acting, 
                  brand strategy, and content creation. With over a decade of experience in the creative 
                  industry, Etomi brings a unique blend of artistic vision and strategic thinking to every project.
                </p>
                
                <p>
                  Known for her authentic storytelling and compelling on-camera presence, Etomi has worked 
                  with leading brands, publications, and creative agencies to develop campaigns that resonate 
                  with diverse audiences. Her approach combines editorial sophistication with commercial 
                  effectiveness, creating content that both inspires and converts.
                </p>
                
                <p>
                  Beyond her work in front of the camera, Etomi is a sought-after consultant and speaker, 
                  helping other creatives and entrepreneurs build authentic personal brands and develop 
                  strategic content that drives meaningful engagement and business growth.
                </p>
                
                <p>
                  Her philosophy centers on the belief that the most powerful creative work emerges from 
                  the intersection of personal authenticity and strategic intention—a principle that guides 
                  every collaboration and project she undertakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-semibold text-brand-gold text-center mb-8">
              Education & Credentials
            </h2>
            
            <div className="bg-brand-dark/80 rounded-lg border border-brand-gold/30 shadow-card p-8">
              <div className="body-sans text-brand-gold/90 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-brand-gold">Bachelor of Fine Arts, Visual Communication</h3>
                  <p className="text-brand-gold/70">Savannah College of Art and Design (SCAD)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-brand-gold">Advanced Acting Certificate</h3>
                  <p className="text-brand-gold/70">The Lee Strasberg Theatre & Film Institute</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-brand-gold">Brand Strategy & Marketing</h3>
                  <p className="text-brand-gold/70">Columbia Business School Executive Education</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-brand-gold">Digital Content Strategy</h3>
                  <p className="text-brand-gold/70">General Assembly Professional Development</p>
                </div>
                
                <div className="pt-4 border-t border-brand-gold/30">
                  <h3 className="font-semibold text-lg mb-2 text-brand-gold">Professional Memberships</h3>
                  <p className="text-brand-gold/70">
                    Screen Actors Guild (SAG-AFTRA), American Marketing Association (AMA), 
                    Creative Directors Guild
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DarkBannerCTA
        title="Ready to Build Something Real?"
        subtitle="From brand presence to high-conversion creative assets, I collaborate with intention. Let's discuss how we can create something that truly resonates with your audience and drives meaningful results."
        buttons={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "View My Work", href: "/portfolio" }
        ]}
      />
    </main>
  );
}
