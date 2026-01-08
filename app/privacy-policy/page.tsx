import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-32 md:py-40 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 border-b pb-6 border-slate-200">Privacy Policy</h1>

                <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
                    <section>
                        <p className="font-semibold text-slate-900">Effective Date: 01/01/2026</p>
                        <p className="mt-4">
                            Smile Handyman respects your privacy and is committed to protecting your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Information We Collect</h2>
                        <p className="mb-4">We may collect personal information such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Service address</li>
                            <li>Service details you choose to share</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">How We Use Information</h2>
                        <p className="mb-4">Your information is used only to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and manage services</li>
                            <li>Communicate about appointments or inquiries</li>
                            <li>Improve customer experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Information Sharing</h2>
                        <p className="mb-4">We do not sell personal information.</p>
                        <p>
                            Information is shared only when necessary to deliver services or comply with legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Data Security</h2>
                        <p>
                            We take reasonable steps to protect personal data, but no method of transmission or storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Third-Party Tools</h2>
                        <p>
                            Our website may use third-party tools (such as scheduling or chat services).
                            These providers may process limited data according to their own privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Your Choices</h2>
                        <p>
                            You may request access, correction, or deletion of your personal information by contacting us.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Contact</h2>
                        <p className="mb-4">For privacy-related questions, please contact us at:</p>
                        <p className="text-xl font-bold text-blue-900">Text: (917) 818-0994</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
