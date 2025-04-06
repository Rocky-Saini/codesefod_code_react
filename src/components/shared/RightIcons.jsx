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

const RightIcons = ({ handleSearchSubmit }) => {
    return (
        <div className="justify-center flex items-center gap-4 text-white text-lg">
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

            <div className="relative group">
                <FaGlobe
                    className="hover:text-indigo-400 cursor-pointer"
                    title="Availability"
                />
                <div className="absolute hidden group-hover:flex flex-col bg-white text-black text-sm p-3 rounded-lg shadow-lg top-full mt-2 right-0 w-48 z-50">
                    <h6 className="font-bold text-base mb-2 text-center">
                        We're Available In
                    </h6>
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
        </div>
    );
};

export default RightIcons;
