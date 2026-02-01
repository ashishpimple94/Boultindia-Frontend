import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/logos/logo2.png" 
                alt="Boult Logo"
                className="h-12 w-auto mb-3"
              />
              <p className="text-xs text-gray-400 font-body">Innovate | Perform | Protect</p>
            </div>
            <p className="text-gray-400 text-sm font-body leading-relaxed">
              V Tech Multi Solutions offers an extensive range of Vehicle Care and Maintenance products under the brand name BOULT.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Useful Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/" className="font-body hover:text-orange-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="font-body hover:text-orange-500 transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="font-body hover:text-orange-500 transition duration-300">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/account" className="font-body hover:text-orange-500 transition duration-300">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">+91 96651 54496</p>
                    <p className="text-gray-500 text-xs">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">vtechmultisolutions@gmail.com</p>
                    <p className="text-gray-500 text-xs">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">Office No. 404, Patel Plaza</p>
                    <p className="text-gray-500 text-xs">Miramandal Chowk, Parivati, Pune-411009 Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Policies</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-500 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/return-refund-policy" className="hover:text-orange-500 transition duration-300">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:text-orange-500 transition duration-300">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-orange-500 transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-orange-500 transition duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest Projects */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Latest Projects</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Bike & Car Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Spray Paints
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Car Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Detailing & Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Oil Additives & Flushes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section - Social Media Only */}
        <div className="flex justify-center items-center gap-6">
          {/* Social Media */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/boultindia" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-orange-600 text-white p-2 transition duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/boultindia" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-orange-600 text-white p-2 transition duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://www.youtube.com/@Boultindia" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-orange-600 text-white p-2 transition duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bg-black py-4 text-center">
        <img 
          src="/img18-2-2-1.png" 
          alt="Boult India"
          className="mx-auto max-h-16 w-auto object-contain"
        />
      </div>

      {/* Copyright - Centered with Hyperlink */}
      <div className="bg-gray-900 py-4 text-center">
        <p className="text-gray-400 text-sm font-body">
          Copyright © 2026 Boult India. Design & Developed By{' '}
          <a 
            href="https://xtendonline.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition duration-300 font-semibold"
          >
            Xtend Online Media Pvt Ltd
          </a>
        </p>
      </div>

      {/* Back to Top Button - At Very Bottom */}
      <div className="bg-black py-4 text-center border-t border-gray-800">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-400 hover:text-orange-500 transition text-sm font-body font-semibold"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}
