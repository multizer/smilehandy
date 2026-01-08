"use client";

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Link from 'next/link';

export default function LiveChatFAB() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-live-chat', handleOpen);
        return () => window.removeEventListener('open-live-chat', handleOpen);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div className="bg-white p-6 rounded-lg shadow-xl w-80 border border-gray-200 animate-in fade-in slide-in-from-bottom-5 duration-200">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">Chat with our Service Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                        Get quick answers about our services, pricing, and availability from a custom-trained ChatGPT.
                    </p>

                    <div className="bg-blue-50 p-3 rounded-md mb-4 border border-blue-100">
                        <p className="text-xs text-blue-800 font-medium mb-1">Disclaimer</p>
                        <p className="text-xs text-blue-700">
                            This chat provides general guidance only.
                            Final service details, pricing, and scheduling are always confirmed by our team.
                        </p>
                    </div>

                    <p className="text-sm text-gray-500 mb-3">
                        By continuing, you agree to proceed on this basis.
                    </p>

                    <Link
                        href="https://chatgpt.com/g/g-695802a7eb0c8191a5a7faf1243b02bd-smile-handyman-assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-md font-semibold transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Continue
                    </Link>
                </div>
            )}

            <button
                onClick={togglePopup}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 group ${isOpen ? 'bg-gray-700 rotate-90' : 'bg-blue-600 hover:bg-blue-700 hover:scale-110'}`}
                aria-label={isOpen ? "Close Chat" : "Open Live Chat"}
            >
                {isOpen ? (
                    <X className="w-8 h-8 text-white" />
                ) : (
                    <MessageCircle className="w-8 h-8 text-white" />
                )}
                {!isOpen && (
                    <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Live Chat
                    </span>
                )}
            </button>
        </div>
    );
}
