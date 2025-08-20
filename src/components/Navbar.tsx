"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);


  const handleMouseEnter = (dropdown: string) => {
    setDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image 
                src="/sanpablologo.png" 
                alt="San Pablo EDC Logo" 
                width={160}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-secondary hover:text-primary hover:bg-gray-50 px-4 py-3 text-base font-semibold flex items-center rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Services
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    dropdownOpen === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-10 transition-all duration-300 ease-out ${
                  dropdownOpen === 'services' 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                  <div className="py-2">
                    <a href="#" className="group flex items-center px-5 py-3 text-sm font-medium text-secondary hover:bg-blue-50 hover:text-primary transition-all duration-150">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      Business Development
                    </a>
                    <a href="#" className="group flex items-center px-5 py-3 text-sm font-medium text-secondary hover:bg-blue-50 hover:text-primary transition-all duration-150">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      Job Training
                    </a>
                    <a href="#" className="group flex items-center px-5 py-3 text-sm font-medium text-secondary hover:bg-blue-50 hover:text-primary transition-all duration-150">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      Removing Barriers
                    </a>
                  </div>
                </div>
              </div>

              {/* Programs Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => handleMouseEnter('programs')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-secondary hover:text-primary hover:bg-gray-50 px-4 py-3 text-base font-semibold flex items-center rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Programs
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    dropdownOpen === 'programs' ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-10 transition-all duration-300 ease-out ${
                  dropdownOpen === 'programs' 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                  <div className="py-2">
                    <a href="#" className="group flex items-center px-5 py-3 text-sm font-medium text-secondary hover:bg-blue-50 hover:text-primary transition-all duration-150">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      WIOA
                    </a>
                    <a href="#" className="group flex items-center px-5 py-3 text-sm font-medium text-secondary hover:bg-blue-50 hover:text-primary transition-all duration-150">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      Connect to Opportunity
                    </a>
                    <a href="#" className="group flex items-center px-5 py-3 text-sm font-medium text-secondary hover:bg-blue-50 hover:text-primary transition-all duration-150">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      Entrepreneurship
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="text-secondary hover:text-primary hover:bg-gray-50 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-primary/90 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-4 py-3 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-150">
              Services
            </a>
            <a href="#" className="block px-4 py-3 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-150">
              Programs
            </a>
            <a href="#" className="block px-4 py-3 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-150">
              Contact
            </a>
            <div className="px-4 py-3">
              <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}