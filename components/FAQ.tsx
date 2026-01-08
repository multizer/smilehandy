"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Can I get service the same day I book?",
        answer: "We don’t promise same-day service, because every job is different. Some tasks require special tools, extra prep, or even a site visit first. But we’ll always contact you quickly after booking to assess the issue and set the right schedule.\nNo stress, no guesswork—just a plan that works for your home."
    },
    {
        question: "Do you also provide services for offices or business clients?",
        answer: "Yes. We provide support for homes, small offices, and business clients.\n\nFor business clients, our flat-rate service applies to standalone issues or individual devices.\nIssues connected to shared networks, servers, or multiple systems may require a separate quote.\nIf you’re not sure whether your issue is standalone, we’re happy to review it and provide a free on-site estimate.\nClear expectations, upfront pricing, and reliable service — for homes and businesses alike."
    },
    {
        question: "What kinds of problems are usually covered by the $140 flat rate?",
        answer: "Almost all common home and small business tech problems — such as Wi-Fi issues, TV mounting, printer setup, or smart devices — are covered by our $140 flat rate. (*Tier 1 / Tier 2 - Ask)\nThe flat rate covers one standalone item or task per visit, regardless of how long it takes.\nFor computer services, the flat rate applies to one standalone issue (for example, one computer problem or one isolated device issue).\nIn office or business environments, issues connected to shared networks, servers, or multiple devices are not considered standalone and may require a separate quote.\nCertain simple home tasks may include multiple items at the same rate, such as:\n• Up to 2 LED light fixture installations\n• Up to 4 chairs assembled\n• Or similar tasks of comparable scope\nIf your request involves multiple items, multiple computer issues, or network-connected systems, we’ll review the details and confirm what’s included and the price upfront.\n\nIf you’re not sure what the issue is, we’re happy to provide a free on-site estimate before any work begins.\nClear communication, fair pricing, and doing the job right — that’s our promise."
    },
    {
        question: "What if I need to cancel or reschedule?",
        answer: "No worries at all. Plans change—we get it.\nYou can cancel or reschedule anytime before your visit, free of charge.\nJust give us a quick heads-up through text or our contact form.\nEasy booking, easy changes. We make home help simple from start to finish."
    },
    {
        question: "Do I have to describe my problem in detail when booking?",
        answer: "Yes, please! The more we know upfront, the better we can plan your visit. If needed, we may offer a free on-site check first—especially if you're not sure what’s wrong. That way, we can give you a realistic plan and quote."
    },
    {
        question: "Are there any hidden fees?",
        answer: "Never. Our pricing is always clear and upfront. If something unexpected comes up, we’ll always explain first and get your okay."
    },
    {
        question: "What if you can't fix the issue? Will I still be charged?",
        answer: "Nope. If we can’t solve the problem, you won’t pay a thing. We only charge for completed, successful fixes or installations.\n\nIt’s simple — no results, no cost."
    },
    {
        question: "Who will come to my home?",
        answer: "A trusted, uniformed member of our Smile Handyman team will arrive—always background-checked and trained. Before the visit, you'll receive a text message with their name, photo, and a quick profile so you know exactly who to expect.\n\nLocal. Verified. Friendly. We make sure you feel safe and comfortable from the start."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Common Questions</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">
                        Find answers to common questions about our services and booking process.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 text-orange-500">
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
