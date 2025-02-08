import React from 'react'
import {Github, Twitter, Mail}  from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">TaskMaster</h3>
            <p className="text-blue-200">
              Simplify your workflow with our intuitive task management system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-200 hover:text-white">About</a></li>
              <li><a href="/features" className="text-blue-200 hover:text-white">Features</a></li>
              <li><a href="/pricing" className="text-blue-200 hover:text-white">Pricing</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                {/* <Github className="h-6 w-6" /> */}
              </a>
              <a href="#" className="hover:text-blue-200">
                {/* <Twitter className="h-6 w-6" /> */}
              </a>
              <a href="#" className="hover:text-blue-200">
                {/* <Mail className="h-6 w-6" /> */}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;