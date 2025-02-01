import React from "react";
import Header from "./../shared/Header";
import Footer from "./../shared/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
