import React from "react";
import { clientsArr } from "../../../constants/data.js";

const Clients = () => {
    return (
        <div className="container py-20 text-center bg-gray-100">
            <div className="flex flex-col sm:gap-8">
                <h2 className="section-title">
                    Our Clients
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {clientsArr.map((client) => (
                        <img
                            key={client.id}
                            src={`/clients${client.image}`}
                            alt={client.name}
                            className="w-48 aspect-[4/3] object-contain rounded-2xl shadow transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
