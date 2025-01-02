import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Diamond className="h-10 w-10 text-red-600" />
              <span className="ml-3 text-2xl font-bold text-white">Dimond™</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Elevating Your Experience with Premium TVs and Speakers Across Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-500">Home</Link></li>
              <li><Link to="/products" className="hover:text-red-500">Products</Link></li>
              <li><Link to="/about" className="hover:text-red-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-500" />
                +251 11 234 5678
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-500" />
                info@dimond.et
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Dimond™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
