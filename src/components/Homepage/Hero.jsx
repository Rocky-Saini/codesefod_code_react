import React from "react";

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="flex h-full max-sm:flex-col">
                    <div className="flex-1 max-sm:order-2">
                        <div className="flex flex-col justify-center h-full gap-8">
                            <h1 className="text-5xl font-bold flex flex-col gap-4">
                                Build your next app with{" "}
                                <span className="text-white uppercase ">
                                    Codesefod
                                </span>
                            </h1>
                            <p className="text-lg mt-5">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Donec malesuada lorem
                                maximus mauris scelerisque,
                                at rutrum turpis euismod. Ut
                                ac ligula sapien.
                            </p>
                            <button className="btn btn-filled">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 max-sm:order-1">
                        <img
                            src="/elem.png"
                            className="object-contain w-[min(450px,100%)] aspect-square mx-auto"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
