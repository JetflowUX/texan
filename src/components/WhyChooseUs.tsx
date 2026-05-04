import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, MapPin } from 'lucide-react';
const pillars = [
{
  icon: Star,
  title: '5.0 Google Reviews',
  description:
  'Consistently rated 5 stars by our community for exceptional service and reliability.',
  highlight: 'text-yellow-500'
},
{
  icon: Shield,
  title: 'Licensed & Insured',
  description:
  'Fully licensed (TACL B00653E) and insured for your complete peace of mind.',
  highlight: 'text-primary'
},
{
  icon: Clock,
  title: '24/7 Emergency',
  description:
  'Round-the-clock support when you need it most. We are always just a call away.',
  highlight: 'text-secondary'
},
{
  icon: MapPin,
  title: 'Locally Owned',
  description:
  'Proudly serving Fort Worth and surrounding areas with Texan hospitality.',
  highlight: 'text-primary'
}];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-neutral border-y border-neutral-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {pillars.map((pillar, index) =>
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
            className="flex flex-col items-center text-center">
            
              <div
              className={`mb-4 p-4 bg-white rounded-xl shadow-level-1 ${pillar.highlight}`}>
              
                <pillar.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}