import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { ServiceAreas } from './components/ServiceAreas';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-on-surface bg-surface">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <Services />
        <ServiceAreas />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>);

}