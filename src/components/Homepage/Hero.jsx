import React from "react";

const Hero = () => {
    const handleGetStartted = () => {
        const elem = document.querySelector("#footer");
        elem.scrollIntoView();
    };

    return (
        <section>
            <div className="container min-h-[40dvh] py-12 sm:py-10 ">
                <div className="flex h-full max-sm:flex-col">
                    <div className="flex-1 max-sm:order-2">
                        <div className="flex flex-col justify-center h-full gap-4 sm:gap-8">
                            <h1
                                style={{
                                    textShadow:
                                        "1px 1px 2px #ffffff1a",
                                }}
                                className="new-font text-balance text-3xl sm:text-5xl font-bold flex flex-col gap-1 sm:gap-4 m-0"
                            >
                                Transform your ideas into
                                reality with{" "}
                                <span className="text-white max-sm:text-xl uppercase">
                                    Codesefod
                                </span>
                            </h1>

                            <p className="sm:text-lg sm:mt-5">
                                Our mission is to deliver
                                innovative and scalable
                                software solutions that
                                drive growth and efficiency
                                for businesses worldwide. We
                                believe in the power of
                                technology to transform
                                ideas into reality.
                            </p>
                            <button
                                className="btn btn-outline"
                                onClick={handleGetStartted}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 max-sm:order-1">
                        <img
                            src="/elem.png"
                            className="object-contain w-[250px] sm:w-[min(450px,100%)] aspect-square mx-auto"
                            style={{
                                animation:
                                    "spin 15s linear infinite",
                            }}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Our Delivery Process Section */}
        </section>
    );
};

export default Hero;
