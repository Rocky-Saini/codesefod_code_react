import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router";
import { navArr } from "./../../../constants/data";
import { useCSF } from "../context/CSF.js";
import {
    FaEnvelope,
    FaPhone,
    FaHeart,
    FaGlobe,
    FaSearch,
    FaQrcode,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const Header = () => {
    const location = useLocation();
    const { menuOpen, setMenuOpen } = useCSF();
    const [showQR, setShowQR] = useState(false);
    const [showBookmarkTip, setShowBookmarkTip] = useState(false);
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const shortcut = isMac ? "Cmd + D" : "Ctrl + D";

    const handleSearchSubmit = (e) => {
        if (e.key === "Enter" && searchQuery.trim() !== "") {
            const googleURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            window.open(googleURL, "_blank");
            setShowSearchPopup(false);
            setSearchQuery("");
        }
    };

    return (
        <>
            <header className={`${menuOpen ? "active" : ""} bg-black/30 backdrop-blur-sm`}>
                <div className="container">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="left">
                            <Link to="/" className="logo flex gap-2 sm:gap-4 items-center">
                                <img
                                    src="/logo.png"
                                    alt="Codesefod Logo"
                                    className="w-8 sm:w-10 aspect-square object-contain"
                                />
                                <h3 className="inline text-xl sm:text-2xl font-black tracking-wider">
                                    Codesefod
                                </h3>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex justify-center items-center gap-8 max-sm:hidden">
                            {navArr.map((nav, index) => {
                                const isActive = location.pathname === nav.url;
                                return (
                                    <Fragment key={index}>
                                        <Link
                                            to={nav.url}
                                            className={`nav-link ${isActive ? "active" : ""}`}
                                        >
                                            {nav.title}
                                        </Link>
                                    </Fragment>
                                );
                            })}
                        </nav>

                        {/* Right Icons */}
                        <div className="right flex items-center gap-4 max-sm:hidden text-white text-lg">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=codesefoditsolutions@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email Us"
                                title="Email"
                            >
                                <FaEnvelope className="hover:text-blue-400 transition" />
                            </a>

                            <a
                                href="tel:9027437997"
                                aria-label="Call Us"
                                title="Call"
                            >
                                <FaPhone className="hover:text-green-400 transition" />
                            </a>

                            <button
                                onClick={() => setShowQR(!showQR)}
                                aria-label="Scan to Call"
                                title="Scan to Call"
                            >
                                <FaQrcode className="hover:text-yellow-400 transition" />
                            </button>

                            <div className="relative">
                                <FaHeart
                                    className="hover:text-pink-400 cursor-pointer"
                                    title="Add to Bookmarks"
                                    onClick={() => {
                                        setShowBookmarkTip(true);
                                        setTimeout(() => setShowBookmarkTip(false), 4000);
                                    }}
                                />
                                {showBookmarkTip && (
                                    <div className="absolute top-full mt-2 bg-white text-black text-sm rounded shadow px-4 py-2 z-50">
                                        Press <strong>{shortcut}</strong> to bookmark this site.
                                    </div>
                                )}
                            </div>

                            <div className="relative group">
                                <FaGlobe className="hover:text-indigo-400 cursor-pointer" title="Availability" />
                                <div className="absolute hidden group-hover:flex flex-col bg-white text-black text-sm p-3 rounded-lg shadow-lg top-full mt-2 right-0 w-48 z-50">
                                    <h6 className="font-bold text-base mb-2 text-center">We're Available In</h6>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                            New Zealand
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                            Australia
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                            India
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Search Icon */}
                            <FaSearch
                                className="hover:text-gray-400 cursor-pointer"
                                title="Search"
                                onClick={() => setShowSearchPopup(true)}
                            />
                        </div>

                        {/* Mobile Hamburger */}
                        <div
                            className="hamburger cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div className="dropdown -z-10">
                    <nav className="dropdown-nav m-auto flex flex-col gap-4">
                        {navArr.map((nav, index) => {
                            const isActive = location.pathname === nav.url;
                            return (
                                <Fragment key={index}>
                                    <Link
                                        to={nav.url}
                                        className={`nav-link text-center ${isActive ? "active" : ""}`}
                                    >
                                        {nav.title}
                                    </Link>
                                </Fragment>
                            );
                        })}
                    </nav>
                </div>

                {/* QR Code */}
                {showQR && (
                    <div className="absolute top-20 right-4 bg-white p-4 rounded-lg shadow-lg z-50 text-center">
                        <h6 className="text-black font-semibold mb-2 text-sm">Scan to Call</h6>
                        <QRCode value="tel:9027437997" size={128} />
                    </div>
                )}
            </header>

            {/* Search Popup - Outside Header */}
            {showSearchPopup && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl relative border border-white/10">
                        <button
                            className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-2xl"
                            onClick={() => setShowSearchPopup(false)}
                            aria-label="Close Search"
                        >
                            &times;
                        </button>
                        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center text-white/90">
                            What do you want to search?
                        </h2>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchSubmit}
                            placeholder="Start typing to search on Google..."
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
