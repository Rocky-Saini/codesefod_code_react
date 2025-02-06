import React from "react";
import { navArr } from "./../../../constants/data";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className=" text-gray-300 py-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid sm:grid-cols-3 gap-8 sm:gap-36 lg:gap-48">
                    {/* Logo and About */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="footer-logo">
                            CodeSeFod
                        </h2>
                        <p className="text-sm mt-2 max-w-xs">
                            A premier software agency in
                            Noida, delivering cutting-edge
                            solutions for modern businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="footer-heading">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-4">
                            {navArr.map((val) => {
                                return (
                                    <Link
                                        to={val.url}
                                        className="nav-link"
                                    >
                                        {val.title}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="footer-heading">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 text-xl"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 text-xl"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 text-xl"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 text-xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()}{" "}
                        CodeSeFod. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
