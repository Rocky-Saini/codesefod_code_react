import React from "react";

const About = () => {
    return (
        <div className="rounded-lg shadow-2xl p-6 sm:p-10">

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                    About <span className="text-purple-600">Codesefod</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Empowering businesses with cutting-edge software solutions.
                </p>
                <div className="mt-8">
                    <blockquote className="text-xl italic text-gray-400">
                        "Innovation is the outcome of a habit, not a random act."
                        <span className="block mt-2 text-sm font-medium text-gray-500">
                            – Rocky Saini
                        </span>
                    </blockquote>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mt-16 max-w-4xl mx-auto">
                <div className="bg-gray-900 rounded-lg shadow-2xl p-6 sm:p-10">
                    <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                    <p className="mt-4 text-gray-300">
                        At <span className="text-purple-600">Codesefod</span>, our mission is to deliver innovative and scalable software solutions that drive growth and efficiency for businesses worldwide. We believe in the power of technology to transform ideas into reality.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center">Our Services</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-900 rounded-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold text-white">Custom Software Development</h3>
                        <p className="mt-2 text-gray-300">
                            Tailored solutions to meet your unique business needs.
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold text-white">Web & Mobile App Development</h3>
                        <p className="mt-2 text-gray-300">
                            Build responsive and user-friendly applications.
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold text-white">Cloud Solutions</h3>
                        <p className="mt-2 text-gray-300">
                            Scalable and secure cloud infrastructure for your business.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center">Meet Our Team</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-900 rounded-lg shadow-2xl p-6 text-center">
                        <div className="w-24 h-24 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            RS
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-white">Rocky Saini</h3>
                        <p className="mt-2 text-gray-300">CEO & Founder</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg shadow-2xl p-6 text-center">
                        <div className="w-24 h-24 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            MP
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-white">Mayank Panchal</h3>
                        <p className="mt-2 text-gray-300">CTO</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg shadow-2xl p-6 text-center">
                        <div className="w-24 h-24 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            AP
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-white">Ashish Pradhan</h3>
                        <p className="mt-2 text-gray-300">Lead Developer</p>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
                <blockquote className="text-xl italic text-gray-400">
                    "The best way to predict the future is to invent it."
                    <span className="block mt-2 text-sm font-medium text-gray-500">
                        – Alan Kay
                    </span>
                </blockquote>
            </div>
        </div>
    );
};

export default About;