import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20 lg:px-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">
                <section>
                    <p className="font-semibold">Effective Date: 01/01/2026</p>
                    <p className="mt-4">
                        Smile Handyman respects your privacy and is committed to protecting your personal information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">Information We Collect</h2>
                    <p className="mb-2">We may collect personal information such as:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Service address</li>
                        <li>Service details you choose to share</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">How We Use Information</h2>
                    <p className="mb-2">Your information is used only to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Provide and manage services</li>
                        <li>Communicate about appointments or inquiries</li>
                        <li>Improve customer experience</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">Information Sharing</h2>
                    <p className="mb-2">We do not sell personal information.</p>
                    <p>
                        Information is shared only when necessary to deliver services or comply with legal obligations.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">Data Security</h2>
                    <p>
                        We take reasonable steps to protect personal data, but no method of transmission or storage is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">Third-Party Tools</h2>
                    <p>
                        Our website may use third-party tools (such as scheduling or chat services).
                        These providers may process limited data according to their own privacy policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">Your Choices</h2>
                    <p>
                        You may request access, correction, or deletion of your personal information by contacting us.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-white">Contact</h2>
                    <p className="mb-2">For privacy-related questions, please contact us at:</p>
                    <p className="font-semibold">Text: (917) 818-0994</p>
                </section>
            </div>
        </div>
    );
}
