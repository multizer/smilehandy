import Link from "next/link";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | Smile Handyman",
    description: "Thank you for contacting Smile Handyman. We have received your message.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Your message has been successfully sent. <br />
                        Our team will review your inquiry and get back to you within 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            Return Home
                        </Link>
                        <Link
                            href="/#services"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                        >
                            Explore Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-sm text-gray-400">
                            Need immediate help? Feel free to text us at <span className="font-semibold text-gray-600">(917) 818-0994</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
