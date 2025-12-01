'use client';

import Link from 'next/link';

export default function NavBar() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="bg-brand-dark border-b border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <Link href="/" className="heading-serif text-lg font-semibold text-brand-gold uppercase tracking-wide">
            ETOMI JAMES
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors">
              Home
            </Link>
            <Link href="/about" className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link href="/services" className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors">
              Portfolio
            </Link>
            <Link href="/shop" className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link href="/media" className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors">
              Media
            </Link>
            <Link 
              href="#contact" 
              onClick={handleContactClick}
              className="body-sans text-brand-gold/90 hover:text-brand-gold transition-colors"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button - placeholder for now */}
          <div className="md:hidden">
            <button className="text-brand-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
