"use client";

import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">
                San Pablo EDC
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transforming lives and strengthening the local economy since 2012. 
                Your partner in economic and professional development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Business Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Job Training
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Removing Barriers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    WIOA Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Connect to Opportunity
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-white/80">
                    <div>1970 Rumrill Blvd, Suite 200</div>
                    <div>San Pablo, CA 94806</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="tel:+15105550123" className="text-white/80 hover:text-primary transition-colors">
                    (510) 555-0123
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="mailto:info@sanpabloedc.org" className="text-white/80 hover:text-primary transition-colors">
                    info@sanpabloedc.org
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-white/80">
                    <div>Mon - Fri: 9:00 AM - 5:00 PM</div>
                    <div>Sat: 10:00 AM - 2:00 PM</div>
                    <div>Sun: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary/30 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Stay Informed
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, 
              events and economic development opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-secondary/80 border border-secondary/50 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 San Pablo Economic Development Corporation. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-primary text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-white/80 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-primary text-sm transition-colors">
                Accessibility
              </a>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-secondary/80 hover:bg-primary/80 text-white p-2 rounded-lg transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}