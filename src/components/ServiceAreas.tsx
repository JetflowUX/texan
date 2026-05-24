import React from 'react';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import serviceAreasImage from '../assets/service-areas.svg';
const areas = [
'Fort Worth',
'Arlington',
'Keller',
'Southlake',
'Grapevine',
'Colleyville',
'Bedford',
'Hurst',
'Euless',
'North Richland Hills'];

export function ServiceAreas() {
  return (
    <section id="areas" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:w-1/2">
            
            <div className="inline-flex items-center justify-center p-3 bg-primary-light/20 text-primary rounded-xl mb-6">
              <Map size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Proudly Serving Tarrant County & Beyond
            </h2>
            <p className="text-lg text-text-light mb-8">
              We bring premium HVAC services directly to your doorstep. Our
              fleet is fully equipped and ready to dispatch to your location for
              fast, efficient service.
            </p>

            <div className="flex flex-wrap gap-3">
              {areas.map((area, index) =>
              <span
                key={index}
                className="px-4 py-2 bg-chip text-primary font-bold text-sm rounded-full border border-primary-light/30">
                
                  {area}
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:w-1/2 w-full">
            
            <div className="relative rounded-xl overflow-hidden shadow-level-2 aspect-video lg:aspect-square max-h-[500px]">
              <img
                src={serviceAreasImage}
                alt="Stylized Tarrant County skyline and route map"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}