import React, { useEffect, useState } from 'react';
import { Phone, Menu, X, Wind } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Service Areas',
    href: '#areas'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-level-2 py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
      
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-dark transition-colors">
            <Wind size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-primary leading-none tracking-tight">
              TEXAN
            </span>
            <span className="text-[10px] font-bold text-text-light tracking-[0.2em] uppercase mt-1">
              Heating & Air
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-semibold text-text hover:text-primary transition-colors">
            
              {link.name}
            </a>
          )}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:817-734-3073"
            className="hidden md:flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-secondary-dark hover:shadow-level-2 transition-all">
            
            <Phone size={16} />
            <span>817-734-3073</span>
          </a>

          <button
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-level-3 border-t border-neutral-dark p-4 flex flex-col gap-4">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="text-base font-semibold text-text p-3 rounded-lg hover:bg-neutral transition-colors"
          onClick={() => setMobileMenuOpen(false)}>
          
              {link.name}
            </a>
        )}
          <a
          href="tel:817-734-3073"
          className="flex items-center justify-center gap-2 bg-secondary text-white p-4 rounded-lg font-bold mt-2">
          
            <Phone size={18} />
            <span>Call 817-734-3073</span>
          </a>
        </div>
      }
    </header>);

}