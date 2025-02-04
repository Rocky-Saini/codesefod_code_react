import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and About */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">CodeSeFod</h2>
            <p className="text-sm mt-2 max-w-xs">
              A premier software agency in Noida, delivering cutting-edge solutions for modern businesses.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} CodeSeFod. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
