"use client";

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function LiveChatFAB() {
    const [isOpen, setIsOpen] = useState(false);
    const chatOrigin =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : (process.env.NEXT_PUBLIC_CHATBOT_URL ?? 'https://chatbot-smilehandyman.vercel.app');
    const chatSrc = `${chatOrigin.replace(/\/$/, '')}/?autoOpen=true&hideControl=true`;

    const togglePopup = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-live-chat', handleOpen);
        return () => window.removeEventListener('open-live-chat', handleOpen);
    }, []);

    return (
        <>
            {/* Chatbot iframe panel */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '70px',
                    right: '4px',
                    width: '420px',
                    height: '640px',
                    zIndex: 9999,
                    overflow: 'hidden',
                    display: isOpen ? 'block' : 'none',
                    background: 'transparent',
                }}
            >
                <iframe
                    src={chatSrc}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block',
                    }}
                    allow="clipboard-write"
                    title="Smile Handyman Chat Assistant"
                />
            </div>

            {/* FAB Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={togglePopup}
                    className={`flex items-center justify-center gap-2 rounded-full shadow-lg transition-all duration-300 ${
                        isOpen
                            ? 'w-14 h-14 bg-gray-700 rotate-90'
                            : 'px-6 h-14 bg-blue-600 hover:bg-blue-700 hover:scale-105'
                    }`}
                    aria-label={isOpen ? 'Close Chat' : 'Open Chat'}
                >
                    {isOpen ? (
                        <X className="w-8 h-8 text-white" />
                    ) : (
                        <>
                            <MessageCircle className="w-6 h-6 text-white" />
                            <span className="text-white font-bold text-lg">Chat</span>
                        </>
                    )}
                </button>
            </div>
        </>
    );
}
