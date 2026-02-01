import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChatFAB from "@/components/LiveChatFAB";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "스마일 핸디맨",
    template: "%s | 스마일 핸디맨"
  },
  alternates: {
    canonical: "https://www.smilehandyman.com/ko",
    languages: {
      "en-US": "https://www.smilehandyman.com",
      "ko-KR": "https://www.smilehandyman.com/ko",
    },
  },
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <LiveChatFAB />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
