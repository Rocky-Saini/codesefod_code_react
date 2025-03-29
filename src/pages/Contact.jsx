import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        service: "",
        technologies: [],
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
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

        try {
            const response = await fetch("https://codesefod-application-latest.onrender.com/api/contact/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    mobileNumber: "",
                    service: "",
                    technologies: [],
                    message: "",
                });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="px-6 py-8 sm:p-10">
                    <h2 className="text-3xl font-extrabold text-white text-center">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 text-center">
                        We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300">
                                Mobile Number
                            </label>
                            <input
                                id="mobileNumber"
                                name="mobileNumber"
                                type="tel"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                                placeholder="Your Mobile Number"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                                Service
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                            >
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
                        </div>
                        <div>
                            <label htmlFor="technologies" className="block text-sm font-medium text-gray-300">
                                Technologies
                            </label>
                            <select
                                id="technologies"
                                name="technologies"
                                multiple
                                value={formData.technologies}
                                onChange={handleMultiSelectChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                            >
                                <option value="java">Java</option>
                                <option value="spring-boot">Spring Boot</option>
                                <option value="mysql">MySQL</option>
                                <option value="mongodb">MongoDB</option>
                                <option value="react">React</option>
                                <option value="nodejs">Node.js</option>
                                <option value="python">Python</option>
                                <option value="django">Django</option>
                                <option value="angular">Angular</option>
                                <option value="vuejs">Vue.js</option>
                                <option value="docker">Docker</option>
                                <option value="kubernetes">Kubernetes</option>
                                <option value="aws">AWS</option>
                                <option value="azure">Azure</option>
                                <option value="gcp">Google Cloud</option>
                                <option value="terraform">Terraform</option>
                                <option value="jenkins">Jenkins</option>
                                <option value="git">Git</option>
                                <option value="graphql">GraphQL</option>
                                <option value="redis">Redis</option>
                                <option value="kafka">Kafka</option>
                                <option value="elasticsearch">Elasticsearch</option>
                                <option value="typescript">TypeScript</option>
                                <option value="flutter">Flutter</option>
                                <option value="swift">Swift</option>
                                <option value="kotlin">Kotlin</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
