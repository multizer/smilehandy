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
  title: {
    default: "Smile Handyman | Expert Computer Support & Home Services in Manhattan",
    template: "%s | Smile Handyman"
  },
  description: "Manhattan's trusted tech support and handyman service. We specialize in computer repair, Wi-Fi setup, TV mounting, and IKEA furniture assembly. Friendly, local, and professional.",
  keywords: ["Manhattan Handyman", "Computer Repair NY", "Tech Support Manhattan", "IKEA Assembly NYC", "TV Mounting Service", "Smart Home Setup", "Wi-Fi Fixing NYC"],
  authors: [{ name: "Smile Handyman" }],
  openGraph: {
    title: "Smile Handyman | Expert Computer Support in Manhattan",
    description: "Your friendly local tech expert. Computer repair, smart home setup, and furniture assembly.",
    url: "https://www.smilehandyman.com",
    siteName: "Smile Handyman",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
