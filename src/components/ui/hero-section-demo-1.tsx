"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function HeroSectionOne() {
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasScrolled, setHasScrolled] = useState(false);

  // For parallax scrolling effect
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollY, [0, 300], [0, 100]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  // For reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
        controls.start({
          scale: [1.05, 1],
          opacity: [0.8, 1],
          transition: { duration: 0.8 }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasScrolled]);

  return (
    <ParallaxProvider>
      <div 
        ref={heroRef}
        className="relative w-full min-w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F0E6] to-[#F0E6D8] py-16 md:py-32"
      >
        {/* Background elements */}
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#B04720] to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-[#B04720] to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-[#B04720] to-transparent" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 py-10 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content with Parallax */}
            <motion.div 
              className="flex flex-col"
              style={{ y: textY }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Parallax translateY={[-10, 10]} className="mb-4">
                <motion.h1
                  className="relative z-10 max-w-4xl text-left text-4xl font-bold text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Get the resources you need to do{" "}
                  <span className="bg-gradient-to-r from-[#B04720] to-[#C65A34] bg-clip-text text-transparent">
                    great things
                  </span>
                </motion.h1>
              </Parallax>
              
              <Parallax translateY={[-5, 15]} className="mb-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative z-10 mt-6 max-w-2xl text-left text-lg font-normal text-neutral-600 dark:text-neutral-400"
                >
                  Since 2012, San Pablo EDC has been the engine of economic development 
                  in our community, providing business development, job training, 
                  and removing barriers to employment.
                </motion.p>
              </Parallax>

              <Parallax translateY={[0, 20]}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <button className="transform rounded-lg bg-gradient-to-r from-[#B04720] to-[#C65A34] px-8 py-4 font-medium text-white shadow-lg shadow-[#B04720]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#B04720]/30 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </Parallax>
            </motion.div>

            {/* Image with Parallax Effect */}
            <Parallax translateY={[20, -20]} className="z-10">
              <motion.div 
                animate={controls}
                className="relative z-10 transform transition duration-700"
                style={{ y: imageY, opacity }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="aspect-[16/10] w-full">
                    <Image 
                      src="/People Collaborating.jpg" 
                      alt="People collaborating in a modern workspace" 
                      fill
                      className="object-cover rounded-2xl transition-transform duration-1000 hover:scale-110"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#B04720]/10 via-transparent to-transparent mix-blend-multiply"></div>
                  </div>
                </div>
                
                {/* Floating elements that move on scroll */}
                <motion.div 
                  className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-[#B04720]/10 backdrop-blur-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#1D3553]/10 backdrop-blur-sm"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </Parallax>
          </div>
        </div>
        
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-b from-[#B04720]/10 to-transparent blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-t from-[#1D3553]/10 to-transparent blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
      </div>
    </ParallaxProvider>
  );
}