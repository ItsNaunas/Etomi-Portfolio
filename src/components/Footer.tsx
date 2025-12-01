import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="heading-serif text-2xl font-bold text-brand-gold mb-6">
            ETOMI JAMES
          </h3>
          
          <div className="body-sans text-text-invert space-y-2 mb-8">
            <p>Creative Talent & Brand Strategist</p>
            <p>Bringing depth, authenticity, and creative direction to every collaboration</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-text-invert">
            <Link href="/#contact" className="hover:text-brand-gold transition-colors">
              Contact
            </Link>
            <Link href="/services" className="hover:text-brand-gold transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-brand-gold transition-colors">
              Portfolio
            </Link>
            <Link href="/shop" className="hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link href="/media" className="hover:text-brand-gold transition-colors">
              Media
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-brand-gold/20">
            <p className="body-sans text-text-invert/60 text-sm">
              © 2024 Etomi James. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
