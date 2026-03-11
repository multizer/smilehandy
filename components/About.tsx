"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Facebook, ShieldCheck } from "lucide-react";
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
                                    src="/aboutus2.png"
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

                            {/* Community Sundays Section - Hidden for now, easy to re-enable
                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                                    <h3 className="text-xl font-bold text-gray-900">Community Sundays</h3>
                                </div>
                                <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
                                    <p>
                                        Community Sundays is a personal community project started by Kenny, owner of Smile Handyman.
                                        It&apos;s a simple effort to give back through hands-on help for local residents in need.
                                    </p>
                                    <p>
                                        This initiative is separate from our regular paid services and may evolve into a nonprofit in the future.
                                    </p>
                                    <div className="pt-2">
                                        <p className="font-medium text-gray-900 mb-2">Learn more at:</p>
                                        <a
                                            href="https://www.supportnewyork.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline bg-white px-4 py-2 rounded-xl border border-orange-100 shadow-sm transition-all hover:shadow-md"
                                        >
                                            👉 https://www.supportnewyork.org/
                                        </a>
                                    </div>
                                </div>
                            </div>
                            */}

                            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Our Service Guarantee</h3>
                                </div>
                                <div className="text-gray-700 text-sm space-y-3 leading-relaxed">
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold mt-1">✓</span>
                                        <span><span className="font-semibold text-gray-900">No Fix, No Fee:</span> If we cannot solve your problem, you won't pay a dime.</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold mt-1">✓</span>
                                        <span><span className="font-semibold text-gray-900">Transparent Pricing:</span> We offer flat rates with no hidden fees or surprises.</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold mt-1">✓</span>
                                        <span><span className="font-semibold text-gray-900">Peace of Mind:</span> We ensure everything is tested, cleaned, and simplified before we leave.</span>
                                    </p>
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
