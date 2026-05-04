import React from 'react';
import {
  Wind,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-tertiary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-primary p-2 rounded-lg">
                <Wind size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white leading-none tracking-tight">
                  TEXAN
                </span>
                <span className="text-[10px] font-bold text-neutral-dark tracking-[0.2em] uppercase mt-1">
                  Heating & Air
                </span>
              </div>
            </div>
            <p className="text-neutral-dark text-sm leading-relaxed mb-6">
              Fort Worth's premier choice for reliable, professional, and
              efficient HVAC services. Your comfort is our business.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Service Areas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Maintenance Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Financing Options
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  AC Repair & Installation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Heating Repair & Installation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Indoor Air Quality
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Duct Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-primary-light shrink-0 mt-0.5" />
                
                <span className="text-neutral-dark text-sm">
                  Serving Fort Worth, TX and surrounding areas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-light shrink-0" />
                <a
                  href="tel:817-734-3073"
                  className="text-neutral-dark hover:text-white transition-colors text-sm font-bold">
                  
                  817-734-3073
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-light shrink-0" />
                <a
                  href="mailto:info@texanhvac.com"
                  className="text-neutral-dark hover:text-white transition-colors text-sm">
                  
                  info@texanhvac.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-neutral-dark font-medium">License #</p>
              <p className="text-sm font-bold text-white tracking-wider">
                TACL B00653E
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-dark">
            &copy; {new Date().getFullYear()} Texan Heating & Air. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-neutral-dark">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}