"use client";

import { motion } from "framer-motion";
import { Tv, Wifi, Hammer, Monitor, Zap, Home } from "lucide-react";

const services = [
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "Computer Repair & Tech",
        description: "Troubleshooting, upgrades, and setup for PCs, Macs, and printers. Expert tech support.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        title: "Wi-Fi & Network Setup",
        description: "Eliminating dead zones, installing mesh systems, and router configuration for fast internet.",
        color: "bg-sky-100 text-sky-600",
    },
    {
        icon: <Tv className="w-6 h-6" />,
        title: "TV Mounting",
        description: "Secure mounting for TVs of all sizes. Wire concealment options available.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: <Home className="w-6 h-6" />,
        title: "Smart Home Devices",
        description: "Installation of smart locks, video doorbells, cameras, and voice assistants.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: <Hammer className="w-6 h-6" />,
        title: "IKEA Furniture Assembly",
        description: "Specialized assembly for IKEA, Wayfair, and Amazon furniture. Fast and accurate.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "LED Light Installation",
        description: "Installation of LED strips, low-voltage under-cabinet lighting, and smart bulbs.",
        color: "bg-yellow-100 text-yellow-600",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white scroll-mt-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">What We Do</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Professional Services</h2>
                    <p className="text-gray-600">
                        We provide a wide range of handyman and tech services to keep your home running smoothly,
                        including specialized support for seniors and our unique <span className="text-orange-600 font-medium">Community Sundays</span> initiative.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-white group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
