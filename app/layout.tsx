import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChatFAB from "@/components/LiveChatFAB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smilehandyman.com"),
  title: {
    default: "Smile Handyman | Expert Computer Support & Home Services in Manhattan",
    template: "%s | Smile Handyman"
  },
  description: "Manhattan's trusted tech support and handyman service. Specializing in computer repair, Wi-Fi setup, TV mounting, and IKEA assembly. Featuring 'Community Sundays'—free services for seniors and those in need.",
  keywords: [
    "Manhattan Handyman",
    "Computer repair",
    "Computer Repair NY",
    "Tech Support Manhattan",
    "IKEA Assembly NYC",
    "TV Mounting Service",
    "Smart Home Setup",
    "Wi-Fi Fixing NYC",
    "Community Sundays",
    "Free Handyman Manhattan",
    "Senior Tech Support NYC",
    "Volunteer Handyman Manhattan",
    "Charity Tech Help NYC",
    "Free Computer Repair Manhattan",
    "Computer Repair Volunteer NYC"
  ],
  authors: [{ name: "Smile Handyman" }],
  openGraph: {
    title: "Smile Handyman | Expert Computer Support & Home Services in Manhattan",
    description: "Your friendly local tech expert. Serving Manhattan with expert computer repair, furniture assembly, and our weekly 'Community Sundays' program.",
    url: "https://www.smilehandyman.com",
    siteName: "Smile Handyman",
    images: [
      {
        url: "/og-image.png", // Recommended to have an OG image
        width: 1200,
        height: 630,
        alt: "Smile Handyman Manhattan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.smilehandyman.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smile Handyman",
  "image": "https://www.smilehandyman.com/logo.png", // Assuming logo path
  "@id": "https://www.smilehandyman.com",
  "url": "https://www.smilehandyman.com",
  "telephone": "", // Add telephone if available
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Manhattan",
    "addressRegion": "NY",
    "postalCode": "",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7831,
    "longitude": -73.9712
  },
  "description": "Expert Computer Support & Home Services in Manhattan. Specialized in Computer Repair, TV Mounting, and Community Sundays.",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "13:00",
      "name": "Community Sundays"
    }
  ],
  "sameAs": [
    "https://github.com/multizer/smilehandy"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <LiveChatFAB />
        <Footer />
      </body>
    </html>
  );
}
