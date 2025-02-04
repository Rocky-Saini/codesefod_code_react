import React from "react";

const Hero = () => {
    return (
        <section>
            <div className="container min-h-screen py-20 ">
                <div className="flex h-full max-sm:flex-col">
                    <div className="flex-1 max-sm:order-2">
                        <div className="flex flex-col justify-center h-full gap-8">
                            <h1 className="text-5xl font-bold flex flex-col gap-4">
                                Build your next app with {" "}
                                <span className="text-white uppercase ">Codesefod</span>
                            </h1>
                            <p className="text-lg mt-5">
                            Our mission is to deliver innovative and scalable software solutions that drive growth and efficiency for businesses worldwide. We believe in the power of technology to transform ideas into reality.
                            </p>
                            <button className="btn btn-filled">Get Started</button>
                        </div>
                    </div>
                    <div className="flex-1 max-sm:order-1">
                        <img
                            src="/elem.png"
                            className="object-contain w-[min(450px,100%)] aspect-square mx-auto"
                            style={{ animation: "spin 15s linear infinite" }}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Our Clients Section */}
            <div className="container py-20 text-center bg-gray-100">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Clients</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <img src="/pwc.svg" alt="PWC" className="w-32 h-16 object-contain" />
                    <img src="/invstt.svg" alt="invstt" className="w-32 h-16 object-contain" />
                    <img src="/mahindra.svg" alt="mahindra" className="w-32 h-16 object-contain" />
                    <img src="/havells.svg" alt="havells" className="w-32 h-16 object-contain" />
                </div>
            </div>

            {/* Our Delivery Process Section */}
            <div className="container py-20 text-center bg-gray-100">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Delivery Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Step 1</h3>
                        <p className="text-gray-600">Requirement Analysis & Planning</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Step 2</h3>
                        <p className="text-gray-600">Design & Development</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Step 3</h3>
                        <p className="text-gray-600">Testing & Deployment</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
