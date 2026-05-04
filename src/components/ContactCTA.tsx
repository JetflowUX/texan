import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';
export function ContactCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="bg-white rounded-2xl shadow-level-3 p-8 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-3/5 text-center md:text-left">
            <motion.h2
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
              className="text-3xl md:text-4xl font-extrabold mb-4">
              
              Ready for Perfect Comfort?
            </motion.h2>
            <motion.p
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
                delay: 0.1
              }}
              className="text-lg text-text-light mb-0">
              
              Schedule your service today. Our expert technicians are standing
              by to restore your home's comfort quickly and professionally.
            </motion.p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="md:w-2/5 flex flex-col gap-4 w-full">
            
            <a
              href="tel:817-734-3073"
              className="flex items-center justify-center gap-3 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-dark hover:shadow-level-2 transition-all w-full group">
              
              <PhoneCall size={24} className="group-hover:animate-pulse" />
              Call 817-734-3073
            </a>
            <button className="flex items-center justify-center gap-3 bg-neutral text-primary border border-neutral-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-dark transition-all w-full">
              <CalendarCheck size={24} />
              Book Online
            </button>
          </motion.div>
        </div>
      </div>
    </section>);

}