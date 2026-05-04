import React from 'react';
import { motion } from 'framer-motion';
import {
  Snowflake,
  Flame,
  Wind,
  Wrench,
  ThermometerSun,
  ShieldCheck,
  ArrowRight } from
'lucide-react';
const services = [
{
  title: 'AC Repair',
  description:
  'Fast, reliable repairs to get your cooling system back up and running when you need it most.',
  icon: Snowflake,
  category: 'Cooling'
},
{
  title: 'AC Installation',
  description:
  'Premium, energy-efficient air conditioning systems installed by certified professionals.',
  icon: ThermometerSun,
  category: 'Cooling'
},
{
  title: 'Heating Repair',
  description:
  'Emergency heating repair services to keep your family warm and safe during cold snaps.',
  icon: Flame,
  category: 'Heating',
  isHeat: true
},
{
  title: 'Heating Installation',
  description:
  "Modern furnace and heat pump installations tailored to your home's specific needs.",
  icon: Wind,
  category: 'Heating',
  isHeat: true
},
{
  title: 'Indoor Air Quality',
  description:
  'Breathe easier with our advanced air purification and filtration solutions.',
  icon: ShieldCheck,
  category: 'Air Quality'
},
{
  title: 'Maintenance Plans',
  description:
  'Preventative maintenance to extend equipment life and lower your energy bills.',
  icon: Wrench,
  category: 'Maintenance'
}];

export function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Premium HVAC Services
          </h2>
          <p className="text-lg text-text-light">
            From emergency repairs to complete system replacements, our expert
            technicians deliver uncompromising quality and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white rounded-lg p-8 shadow-level-1 hover:shadow-level-2 transition-all duration-300 group relative overflow-hidden">
            
              <div className="flex justify-between items-start mb-6">
                <div
                className={`p-3 rounded-lg ${service.isHeat ? 'bg-secondary-light/30 text-secondary' : 'bg-primary-light/30 text-primary'}`}>
                
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <span className="px-3 py-1 bg-chip text-primary text-xs font-bold rounded-full">
                  {service.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-text-light mb-6 line-clamp-3">
                {service.description}
              </p>

              <a
              href="#contact"
              className={`inline-flex items-center font-bold text-sm ${service.isHeat ? 'text-secondary hover:text-secondary-dark' : 'text-primary hover:text-primary-dark'} transition-colors`}>
              
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}