import React from "react";
import { deliveryArr } from "../../../constants/data.js";

const DeliveryProcess = () => {
    return (
        <div className="container py-20 text-center bg-slate-100">
            <div className="flex flex-col sm:gap-8">
                <h2 className="section-title">
                    Our Delivery Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {deliveryArr.map((val) => (
                        <div
                            key={val.id}
                            className="aspect-[2/1] p-6 bg-white rounded-lg shadow transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer flex flex-col justify-center items-center"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                Step {val.step}
                            </h3>
                            <p className="text-lg text-gray-600">
                                {val.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliveryProcess;
