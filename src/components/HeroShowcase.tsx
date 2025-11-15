import Image from 'next/image';
import Link from 'next/link';

export default function HeroShowcase() {
  return (
    <section className="bg-brand-dark relative min-h-[80vh] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-3 gap-4 relative">
          {/* Three portrait frame placeholders */}
          <div className="bg-gray-300 aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/hero/hero1.jpeg"
              alt="Portrait of Etomi James"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 20vw"
              priority
            />
          </div>
          <div className="bg-gray-300 aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/hero/hero2.jpeg"
              alt="Editorial shot of Etomi James"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 20vw"
              priority
            />
          </div>
          <div className="bg-gray-300 aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/hero/hero3.jpeg"
              alt="Fashion portrait of Etomi James"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 20vw"
              priority
            />
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
