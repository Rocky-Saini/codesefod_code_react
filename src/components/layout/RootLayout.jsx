import React from "react";
import Header from "./../shared/Header";
import Footer from "./../shared/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
            >
                <source
                    src="/public/bannerVideo2.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Optional dark overlay on top of video for readability */}
            <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[-1]" />

            {/* Page content */}
            <Header />
            <main className="relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
