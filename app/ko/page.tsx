import type { Metadata } from "next";
import HeroKO from "@/components/ko/HeroKO";
import ServicesKO from "@/components/ko/ServicesKO";
import FAQKO from "@/components/ko/FAQKO";
import AboutKO from "@/components/ko/AboutKO";
import ContactFormKO from "@/components/ko/ContactFormKO";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Smile Handyman | 스마일 핸디맨 · 맨하탄 핸디맨 · 맨하탄 가구조립",
    description:
        "스마일 핸디맨(Smile Handyman)은 맨하탄 핸디맨, 맨하탄 가구조립, TV 설치, Wi‑Fi/스마트홈 세팅, 컴퓨터수리 자원봉사, 핸디맨 자원봉사를 한 번에 해결합니다. UWS·UES·맨해튼 전역 당일 방문과 투명한 견적을 제공합니다.",
    keywords: [
        "스마일 핸디맨",
        "스마일핸디맨",
        "맨하탄 핸디맨",
        "맨하탄핸디맨",
        "맨해튼 핸디맨",
        "맨하탄 가구조립",
        "맨하탄가구조립",
        "TV 설치 맨하탄",
        "Wi-Fi 설치 맨하탄",
        "스마트홈 설치 맨해튼",
        "핸디맨 자원봉사",
        "컴퓨터수리 자원봉사",
        "스마일핸디맨",
        "스마일 핸디맨",
        "맨하탄 한인 핸디맨",
    ],
    alternates: {
        canonical: "https://www.smilehandyman.com/ko",
    },
    openGraph: {
        title: "Smile Handyman | 맨해튼 전문가 인공지능 컴퓨터 수리 및 홈 서비스",
        description: "맨해튼의 신뢰받는 테크 지원 및 핸디맨 서비스. 컴퓨터 수리, 와이파이 설정, TV 설치, 이케아 조립 전문. 어르신과 도움이 필요한 분들을 위한 '커뮤니티 선데이' 무료 서비스 운영 중.",
        url: "https://www.smilehandyman.com/ko",
        siteName: "Smile Handyman",
        images: [
            {
                url: "/ogimage.png",
                width: 1200,
                height: 630,
                alt: "스마일 핸디맨 맨해튼",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    verification: {
        google: "ReTgLuAOHjkcWCYvr0gHUPtgQQW9xUgyqyoPmh7-BLY",
    },
};

export default function KoreanHome() {
    return (
        <main className="min-h-screen">
            {/* Google Ads Tag (gtag.js) */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17812783072" strategy="afterInteractive" />
            <Script id="google-ads-tag" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17812783072');
                `}
            </Script>

            {/* SEO Structured Data */}
            <Script id="json-ld-ko" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Smile Handyman | 스마일 핸디맨 (맨하탄 핸디맨)",
                    "description": "스마일 핸디맨은 맨하탄 핸디맨, 맨하탄 가구조립, TV 설치, Wi‑Fi/스마트홈 세팅, 컴퓨터수리 자원봉사, 핸디맨 자원봉사를 제공하는 한인 핸디맨 서비스입니다.",
                    "url": "https://www.smilehandyman.com/ko",
                    "telephone": "+1-212-XXX-XXXX",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Manhattan",
                        "addressRegion": "NY",
                        "addressCountry": "US",
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 40.7831,
                        "longitude": -73.9712,
                    },
                    "hasMap": "https://www.google.com/maps?cid=YOUR_CID_HERE",
                    "areaServed": ["Manhattan", "Upper West Side", "Upper East Side", "Chelsea", "Midtown"],
                    "knowsLanguage": ["Korean", "English"],
                })}
            </Script>

            <HeroKO />
            <ServicesKO />
            <FAQKO />
            <AboutKO />
            <ContactFormKO />
        </main>
    );
}
