import Link from 'next/link';

export default function HeroShowcase() {
  return (
    <section className="bg-brand-dark relative min-h-[80vh] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-3 gap-4 relative">
          {/* Three portrait frame placeholders */}
          <div className="bg-gray-300 aspect-[3/4] flex items-center justify-center">
            <span className="text-gray-500 text-sm">Portrait 1</span>
          </div>
          <div className="bg-gray-300 aspect-[3/4] flex items-center justify-center">
            <span className="text-gray-500 text-sm">Portrait 2</span>
          </div>
          <div className="bg-gray-300 aspect-[3/4] flex items-center justify-center relative">
            <span className="text-gray-500 text-sm">Portrait 3</span>
            {/* CTA positioned at bottom right of Portrait 3 */}
            <div className="absolute -bottom-4 -right-4">
              <Link 
                href="/portfolio"
                className="bg-brand-gold text-brand-dark px-6 py-3 rounded-full font-semibold text-sm hover:brightness-90 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Portfolio →
              </Link>
            </div>
          </div>
          
          {/* Overlay text positioned in upper section */}
          <div className="absolute inset-0 flex items-start justify-center pt-8">
            <h1 className="heading-serif text-7xl md:text-8xl lg:text-9xl font-bold text-brand-gold text-center">
              ETOMI JAMES
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
