"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            See Our Impact in Action
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
            Discover how San Pablo EDC transforms lives and strengthens our community through 
            innovative programs and dedicated support
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            
            {/* Video embed container */}
            <div className="relative p-4 md:p-8">
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/sGlnA6rB184?si=9U3GLE8F8BjQupU1" 
                  title="San Pablo EDC - Community Impact Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                
                {/* Optional overlay for styling */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Video caption/description */}
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Play className="h-5 w-5" />
                  <span className="font-semibold">Watch Our Story</span>
                </div>
                <p className="text-secondary/70 text-sm md:text-base max-w-2xl mx-auto">
                  Learn about our mission, programs, and the positive changes we&apos;re making 
                  in the San Pablo community every day
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Floating stats or highlights around video */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2012</div>
              <div className="text-xs text-secondary/70">Established</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-xs text-secondary/70">Lives Impacted</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}