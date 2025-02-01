import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/codesefod-logo.png" alt="CodeSeFod Logo" className="h-6 mr-2" />
                <span className="font-bold text-lg tracking-widest">CodeSeFod</span>
            </div>

            {/* Menu Items */}
            <ul className="hidden md:flex gap-4">
                <li className="hover:text-gray-400 flex items-center">
                    <Link to="/services">Services</Link> <FaChevronDown className="ml-1 text-xs" />
                </li>
                <li className="hover:text-gray-400"><Link to="/">Home</Link></li>
                <li className="hover:text-gray-400"><Link to="/about">About</Link></li>
                <li className="hover:text-gray-400"><Link to="/blog">Blog</Link></li>
                <li className="hover:text-gray-400"><Link to="/careers">Careers</Link></li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="px-4 py-1 rounded-lg hover:bg-white hover:text-black transition">
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
