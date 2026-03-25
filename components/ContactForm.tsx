"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, User } from "lucide-react";
import { sendEmail } from "@/app/actions";
import { useRouter } from "next/navigation";

const ContactForm = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                router.push("/thank-you");
            } else {
                setError(result.error || "Something went wrong. Please try again later.");
            }
        } catch (err) {
            setError("Server error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact-form" className="py-20 bg-slate-50 scroll-mt-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                        {/* Info Side */}
                        <div className="bg-blue-900 p-8 md:p-12 text-white md:w-2/5">
                            <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Contact Us</span>
                            <h2 className="text-3xl font-bold mt-2 mb-6">Have Questions?</h2>
                            <p className="text-blue-100 mb-10 leading-relaxed">
                                Fill out the form below for bookings or quotes. We&apos;ll get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-800/50 p-2.5 rounded-lg">
                                        <Phone className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-300">Call/Text</div>
                                        <div className="font-semibold">(917) 818-0994 (Text Only)</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-800/50 p-2.5 rounded-lg">
                                        <Mail className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-300">Email</div>
                                        <div className="font-semibold">smilehandymanny@gmail.com</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-blue-800/30 rounded-2xl border border-blue-700/50">
                                <p className="text-sm text-blue-100 italic">
                                    &ldquo;Your friendly tech expert in Manhattan. Professional service, guaranteed.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-8 md:p-12 md:w-3/5">
                            <form action={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <User className="w-4 h-4 text-blue-600" /> Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-blue-600" /> Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="000-000-0000"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-blue-600" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="example@gmail.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Describe the issue or service you need."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 text-gray-900"
                                    ></textarea>
                                </div>

                                <AnimatePresence mode="wait">
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm"
                                        >
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    Your data is handled securely and only used to provide the requested service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
