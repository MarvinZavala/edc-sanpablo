"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrustedBySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sponsors = [
    {
      name: "AC Transit",
      logo: "/sponsors/actransitlogo.png",
      alt: "AC Transit Logo"
    },
    {
      name: "Bank of Montreal",
      logo: "/sponsors/banque-de-montreal-seeklogo.svg", 
      alt: "Bank of Montreal Logo"
    },
    {
      name: "Wells Fargo",
      logo: "/sponsors/wells-fargo-seeklogo.png",
      alt: "Wells Fargo Logo"
    },
    {
      name: "Mechanics Bank",
      logo: "/sponsors/mechanics-bank-seeklogo.svg",
      alt: "Mechanics Bank Logo"
    },
    {
      name: "Community Partner",
      logo: "/sponsors/image.png",
      alt: "Community Partner Logo"
    }
  ];


  if (!mounted) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F0E6] via-white to-[#F0E6D8] overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#B04720]/20 to-[#C65A34]/20 rounded-full blur-xl animate-blob"></div>
        <div className="absolute top-1/3 -left-10 w-60 h-60 bg-gradient-to-br from-[#C65A34]/20 to-[#D06D48]/20 rounded-full blur-xl animate-blob" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-br from-[#B04720]/20 to-[#C65A34]/20 rounded-full blur-xl animate-blob" style={{ animationDelay: '5s' }}></div>
        <div className="absolute left-1/4 top-1/2 w-24 h-24 bg-gradient-to-br from-[#1D3553]/20 to-[#2A4A75]/20 rounded-full blur-xl animate-blob" style={{ animationDelay: '7s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Trusted by the most{" "}
                <span className="inline-block relative">
                  <span className="bg-gradient-to-r from-[#B04720] to-[#C65A34] bg-clip-text text-transparent">
                    innovative teams
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B04720] to-[#C65A34] transform scale-x-0 origin-left animate-expand"></span>
                </span>
              </h2>
              <p className="text-xl text-secondary/80 leading-relaxed max-w-lg">
                We partner with leading organizations and financial institutions 
                to provide comprehensive economic development solutions that drive 
                real community impact and sustainable growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button className="bg-gradient-to-r from-[#B04720] to-[#C65A34] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-500 flex items-center justify-center group shadow-lg hover:shadow-[#B04720]/30 hover:shadow-xl relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#B04720] to-[#C65A34] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></span>
                <span className="relative z-10 flex items-center">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-500" />
                </span>
              </button>
              <button className="relative border-2 border-transparent text-secondary px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group overflow-hidden">
                <span className="absolute inset-0 border-2 border-[#B04720]/40 rounded-lg group-hover:border-[#B04720] transition-colors"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F5F0E6]/0 via-[#F5F0E6]/80 to-[#F5F0E6]/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                <span className="relative z-10">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Animated Logo Grid */}
          <div className="relative perspective-1000">
            {/* 3D Container */}
            <div className="transform-style-3d">
              {/* Main Grid */}
              <div className="grid grid-cols-2 gap-8 lg:gap-12">
                {sponsors.slice(0, 4).map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className={`flex items-center justify-center ${index % 2 === 1 ? 'mt-8 lg:mt-16' : ''}`}
                  >
                    <div 
                      className="relative w-36 h-36 lg:w-44 lg:h-44 transition-all duration-700 hover:scale-110 animate-logo-appear"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        transform: `translateZ(${(index % 2) * 20}px)`,
                        animation: mounted ? 
                          `logoAppear 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s forwards, 
                           logoFloat ${4 + index * 0.7}s ease-in-out ${index * 0.2}s infinite` : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-md transform scale-90 opacity-0 hover:opacity-70 transition-all duration-700"></div>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.alt}
                        fill
                        className="object-contain transition-all duration-500 hover:brightness-110 hover:saturate-150 logo-shadow"
                        sizes="(max-width: 768px) 150px, 200px"
                      />
                      <div className="absolute inset-0 logo-shine"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fifth Logo - Centered Below */}
              {sponsors[4] && (
                <div className="flex justify-center mt-8 lg:mt-16">
                  <div className="flex items-center justify-center">
                    <div 
                      className="relative w-36 h-36 lg:w-44 lg:h-44 transition-all duration-700 hover:scale-110"
                      style={{
                        animationDelay: '0.8s',
                        transform: 'translateZ(20px)',
                        animation: mounted ? 
                          'logoAppear 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards, logoFloat 5s ease-in-out 0.8s infinite' : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-md transform scale-90 opacity-0 hover:opacity-70 transition-all duration-700"></div>
                      <Image
                        src={sponsors[4].logo}
                        alt={sponsors[4].alt}
                        fill
                        className="object-contain transition-all duration-500 hover:brightness-110 hover:saturate-150 logo-shadow"
                        sizes="(max-width: 768px) 150px, 200px"
                      />
                      <div className="absolute inset-0 logo-shine"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accent Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#B04720]/5 to-[#C65A34]/5 rounded-full blur-lg"></div>
            <div className="absolute -bottom-16 -left-10 w-60 h-60 bg-gradient-to-br from-[#C65A34]/5 to-[#1D3553]/5 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        /* 3D Perspective */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        /* Logo Animations */
        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.8) translateZ(0);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05) translateZ(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) translateZ(0);
          }
        }
        
        @keyframes logoFloat {
          0% {
            transform: translateY(0) translateZ(0) rotateY(0deg);
          }
          25% {
            transform: translateY(-7px) translateZ(10px) rotateY(2deg);
          }
          50% {
            transform: translateY(0) translateZ(20px) rotateY(0deg);
          }
          75% {
            transform: translateY(7px) translateZ(10px) rotateY(-2deg);
          }
          100% {
            transform: translateY(0) translateZ(0) rotateY(0deg);
          }
        }
        
        /* Text Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.5s forwards;
        }
        
        /* Blob Animations */
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }
        
        /* Logo Shine Effect */
        .logo-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%
          );
          animation: shine 6s ease-in-out infinite;
          transform: rotate(25deg);
          pointer-events: none;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(25deg);
          }
          15%, 100% {
            transform: translateX(100%) rotate(25deg);
          }
        }
        
        /* Logo Shadow Effect */
        .logo-shadow {
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
        }
      `}</style>
    </section>
  );
}