import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineLoading3Quarters, AiOutlineCheckCircle } from "react-icons/ai";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        service: "",
        technologies: [],
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobileNumber" && !/^\d{0,10}$/.test(value)) return;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleMultiSelectChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(opt => opt.value);
        setFormData((prev) => ({
            ...prev,
            technologies: selectedOptions,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("https://codesefod-application-latest.onrender.com/api/contact/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", mobileNumber: "", service: "", technologies: [], message: "" });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong!");
        }
        setIsLoading(false);
    };

    return (
        <div className="rounded-lg shadow-2xl p-6 sm:p-10">

            <div className="max-w-3xl mx-auto rounded-lg shadow-2xl overflow-hidden">
                <div className="px-6 py-8 sm:p-10">
                    <h2 className="text-3xl font-extrabold text-white text-center">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-300 text-center">We'd love to hear from you! Please fill out the form below.</p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Your Name" />
                        <input id="mobileNumber" name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} required className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Your Mobile Number" />
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Your Email" />
                        <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 bg-gray-800 text-white rounded">
                            <option value="" disabled>Select a service</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-app-development">Mobile App Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="software-consulting">Software Consulting</option>
                            <option value="cloud-services">Cloud Services</option>
                            <option value="devops">DevOps</option>
                            <option value="ai-ml-solutions">AI/ML Solutions</option>
                            <option value="data-analytics">Data Analytics</option>
                            <option value="cybersecurity">Cybersecurity</option>
                            <option value="blockchain-development">Blockchain Development</option>
                        </select>
                        <select id="technologies" name="technologies" multiple value={formData.technologies} onChange={handleMultiSelectChange} required className="w-full p-2 bg-gray-800 text-white rounded">
                            {["java", "spring-boot", "mysql", "mongodb", "react", "nodejs", "python", "django", "angular", "vuejs", "docker", "kubernetes", "aws", "azure", "gcp", "terraform", "jenkins", "git", "graphql", "redis", "kafka", "elasticsearch", "typescript", "flutter", "swift", "kotlin"].map((tech) => (
                                <option key={tech} value={tech}>{tech.charAt(0).toUpperCase() + tech.slice(1)}</option>
                            ))}
                        </select>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Your Message"></textarea>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 rounded shadow text-white bg-purple-600 hover:bg-purple-700">
                            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mr-2" /> : null}
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Semi-transparent loading overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white bg-opacity-20 p-8 rounded-full">
                        <AiOutlineLoading3Quarters className="animate-spin text-purple-500 text-6xl mx-auto" />
                    </div>
                </div>
            )}

            {/* Simplified Success Dialog */}
            {isSuccess && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 animate-fadeIn">
                        <div className="text-center">
                            <AiOutlineCheckCircle className="mx-auto text-green-500 text-6xl" />
                            <h3 className="text-xl font-medium text-gray-900 mt-4">
                                Message Sent Successfully!
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Thank you for reaching out to us. We will get back to you shortly.
                            </p>
                            <button
                                type="button"
                                className="mt-6 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
                                onClick={() => setIsSuccess(false)}
                            >
                                Great!
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add this keyframe animation to your CSS */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Contact;