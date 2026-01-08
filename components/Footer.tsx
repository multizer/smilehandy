"use client";

import Link from "next/link";
import { MonitorCog, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="#home" className="flex items-center gap-2 group">
                            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                                <MonitorCog className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold">Smile Handyman</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Your trusted partner for home repairs, tech support, and installations in Manhattan. Fast, friendly, and reliable.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-orange-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-orange-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-orange-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#home" className="hover:text-orange-500 transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                            <li><Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link href="#faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
                            <li><Link href="/privacy-policy" target="_blank" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li>Computer Repair & Tech</li>
                            <li>Wi-Fi & Network Setup</li>
                            <li>TV Mounting</li>
                            <li>Smart Home Devices</li>
                            <li>IKEA Furniture Assembly</li>
                            <li>LED Light Installation</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>Manhattan, NY</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>(917) 818-0994</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>smilehandyman1000@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} smilehandyman. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
