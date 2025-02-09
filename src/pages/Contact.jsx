import React from "react";

const Contact = () => {
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
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-300">
                                Mobile Number
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="" disabled selected>Select a service</option>
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
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
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
