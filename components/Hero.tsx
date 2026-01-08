"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm mb-6">
                            <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                            <span>Manhattan&apos;s Premier Home Tech Support</span>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                            <Link href="#about" className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-orange-200 transition-colors">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                Community Sundays Now Active
                            </Link>

                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-live-chat'))}
                                className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-200 transition-colors"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                AI Live Chat Support
                            </button>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Expert Computer Support & <span className="text-blue-900">Home Services</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Your trusted tech expert in Manhattan. We specialize in computer repair, smart home setup,
                            and light home installations like TV mounting and IKEA assembly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#services"
                                className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/25 flex items-center justify-center gap-2 group"
                            >
                                Explore Services
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform pointer-events-none" />
                            </Link>
                            <Link
                                href="#faq"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                            >
                                How It Works
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
                            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full text-blue-700 border border-blue-100">
                                <Building2 className="w-4 h-4" />
                                <span>Home & Office</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                Fully Insured
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                Transparent Pricing
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
                            <Image
                                src="/home2.png"
                                alt="Smile Handyman Hero Image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 fill-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Satisfaction Guaranteed</div>
                                    <div className="text-sm text-gray-500">Quality Workmanship</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
