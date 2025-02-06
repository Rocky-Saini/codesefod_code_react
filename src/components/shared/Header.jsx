import React, { Fragment } from "react";
import { Link, useLocation } from "react-router";
import { navArr } from "./../../../constants/data";
import { useCSF } from "../context/CSF.js";

const Header = () => {
    const location = useLocation();
    const { menuOpen, setMenuOpen } = useCSF();

    return (
        <header
            className={`${
                menuOpen && "active"
            } backdrop-blur-xs bg-[rgba(0,0,0,.9)]`}
        >
            <div className="container">
                <div className="flex justify-between items-center py-4 ">
                    <div className="left">
                        <Link
                            to="/"
                            className="logo flex gap-2 sm:gap-4 items-center"
                        >
                            <img
                                src="/logo.png"
                                alt=""
                                className="w-8 sm:w-10 aspect-square object-contain"
                            />
                            <h3 className="inline text-xl sm:text-2xl font-black tracking-wider">
                                Codesefod
                            </h3>
                        </Link>
                    </div>
                    <nav className="flex justify-center items-center gap-8 max-sm:hidden">
                        {navArr.map((nav, index) => {
                            const isActive =
                                location.pathname ===
                                nav.url;
                            return (
                                <Fragment key={index}>
                                    <Link
                                        to={nav.url}
                                        className={`nav-link ${
                                            isActive
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {nav.title}
                                    </Link>
                                </Fragment>
                            );
                        })}
                    </nav>
                    <div className="right flex items-center justify-end max-sm:hidden">
                        <Link className="btn btn-outline">
                            Login
                        </Link>
                    </div>
                    <div
                        className="hamburger cursor-pointer"
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="dropdown -z-10 ">
                <nav className="dropdown-nav m-auto flex flex-col gap-4  ">
                    {navArr.map((nav, index) => {
                        const isActive =
                            location.pathname === nav.url;
                        return (
                            <Fragment key={index}>
                                <Link
                                    to={nav.url}
                                    className={`nav-link text-center ${
                                        isActive
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {nav.title}
                                </Link>
                            </Fragment>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default Header;
