import React, { Fragment } from "react";
import { Link, useLocation } from "react-router";
import { navArr } from "./../../../constants/data";

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <div className="container">
                <div className="flex justify-between items-center py-4">
                    <div className="left">
                        <Link
                            to="/"
                            className="logo flex gap-4 items-center"
                        >
                            <img
                                src="/logo.png"
                                alt=""
                                className="w-10 aspect-square object-contain"
                            />
                            <h3 className="inline text-2xl font-black tracking-wider">
                                Codesefod
                            </h3>
                        </Link>
                    </div>
                    <nav className="flex justify-center items-center gap-8">
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
                    <div className="right flex items-center justify-end">
                        <Link className="btn btn-outline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
