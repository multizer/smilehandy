"use client";

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden relative shadow-xl">
                                <Image
                                    src="/aboutus1.png"
                                    alt="About Smile Handyman"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-6 rounded-3xl shadow-lg hidden md:block">
                                <div className="text-2xl font-bold mb-1">Manhattan</div>
                                <div className="text-sm font-medium opacity-90">Based &<br />Operated</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <span className="text-blue-900 font-semibold tracking-wide uppercase text-sm">About Us</span>

                        <div className="space-y-6 mt-2">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">Who We Are</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Smile Handyman is a Manhattan-based local tech support and installation service.
                                    We specialize in <span className="font-semibold text-orange-500">friendly, fast help</span> for everyday home tech—like computer setup, TV mounting, internet troubleshooting, and smart home devices.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our mission is to make home tech simple and stress-free for everyone, especially seniors and busy New Yorkers.
                                    We believe friendly service should be just around the corner.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                                    <h3 className="text-xl font-bold text-gray-900">Community Sundays</h3>
                                </div>
                                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                    Every Sunday, we offer a limited number of <span className="font-semibold">free community services</span>,
                                    with priority given to low-income residents, seniors, and people with disabilities.
                                </p>
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                    Services include TV mounting, single-level bed assembly, and simple computer help (Tier 1).
                                </p>
                                <div className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-orange-100">
                                    <p className="mb-1">Availability is limited, and scheduling is confirmed in advance by email.</p>
                                    <div className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                                        <Mail className="w-4 h-4" /> SmileHandymanNY@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
