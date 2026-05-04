import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const reviews = [
{
  name: 'Sarah Jenkins',
  location: 'Keller, TX',
  text: 'Absolutely phenomenal service. Our AC went out in the middle of July, and they were here within hours. The technician was professional, explained everything clearly, and had us cooling down in no time.',
  rating: 5
},
{
  name: 'Michael Rodriguez',
  location: 'Fort Worth, TX',
  text: "I've used several HVAC companies over the years, but Texan Heating & Air is by far the best. Their maintenance plan is totally worth it. Honest pricing and pristine work.",
  rating: 5
},
{
  name: 'Emily Thompson',
  location: 'Southlake, TX',
  text: 'They installed a completely new system for our home. The crew was respectful of our property, laid down drop cloths, and cleaned up perfectly. The new system is incredibly quiet and efficient.',
  rating: 5
}];

export function Testimonials() {
  return (
    <section className="section-padding bg-neutral">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-text-light">
            See why hundreds of homeowners in the Fort Worth area trust us with
            their comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) =>
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
            className="bg-white p-8 rounded-xl shadow-level-1 relative">
            
              <Quote
              className="absolute top-6 right-6 text-neutral-dark opacity-50"
              size={40} />
            

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(review.rating)].map((_, i) =>
              <Star key={i} size={18} fill="currentColor" />
              )}
              </div>

              <p className="text-text-light mb-8 relative z-10 leading-relaxed italic">
                "{review.text}"
              </p>

              <div>
                <p className="font-bold text-primary">{review.name}</p>
                <p className="text-xs text-text-light font-medium uppercase tracking-wider mt-1">
                  {review.location}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}