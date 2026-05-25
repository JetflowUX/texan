import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern comfortable living room"
          className="w-full h-full object-cover object-center" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 md:to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm w-fit px-3 py-1.5 rounded-full shadow-level-1">
            
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) =>
              <Star key={i} size={14} fill="currentColor" />
              )}
            </div>
            <span className="text-xs font-bold text-text">
              5.0 Google Reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-6">
            
            CLD Fort Worth's Most Trusted{' '}
            <span className="text-secondary">AC & Heating</span> Experts
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-text-light mb-10 max-w-xl leading-relaxed">
            
            Experience premium comfort with our licensed professionals. We
            deliver reliable, efficient, and transparent HVAC services to keep
            your home perfect year-round.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a href="#contact" className="btn-primary group">
              <Calendar className="mr-2" size={20} />
              Book Service Now
            </a>
            <a href="#services" className="btn-secondary group">
              Explore Services
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20} />
              
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            className="mt-10 flex items-center gap-6 text-sm font-semibold text-text-light">
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              24/7 Emergency Service
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Licensed & Insured
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}