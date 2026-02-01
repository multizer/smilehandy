import type { Metadata } from "next";
import HeroKO from "@/components/ko/HeroKO";
import ServicesKO from "@/components/ko/ServicesKO";
import FAQKO from "@/components/ko/FAQKO";
import AboutKO from "@/components/ko/AboutKO";
import ContactFormKO from "@/components/ko/ContactFormKO";
import Script from "next/script";

export const metadata: Metadata = {
    title: {
        absolute: "스마일 핸디맨 | 맨하탄 컴퓨터수리 · 핸디맨 · 가구조립"
    },
    description:
        "스마일 핸디맨은 맨하탄 지역 컴퓨터 수리, 가구 조립, TV 설치 등 IT와 홈 서비스를 제공하는 전문 핸디맨입니다.",
    keywords: [
        "스마일 핸디맨",
        "맨하탄 핸디맨",
        "맨하탄 가구조립",
        "맨하탄 컴퓨터수리",
        "IT 핸디맨",
        "자원봉사 핸디맨"
    ],
    alternates: {
        canonical: "https://www.smilehandyman.com/ko",
        languages: {
            "en-US": "https://www.smilehandyman.com",
            "ko-KR": "https://www.smilehandyman.com/ko",
            "x-default": "https://www.smilehandyman.com",
        },
    },
    openGraph: {
        title: "스마일 핸디맨 | 맨하탄 컴퓨터수리 · 핸디맨 · 가구조립",
        description: "맨하탄의 신뢰받는 IT 지원 및 핸디맨 서비스. 컴퓨터 수리, TV 설치, 이케아 조립 전문.",
        url: "https://www.smilehandyman.com/ko",
        siteName: "Smile Handyman",
        images: [
            {
                url: "/ogimage.png",
                width: 1200,
                height: 630,
                alt: "스마일 핸디맨 맨하탄",
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
                    "name": "스마일 핸디맨 (Smile Handyman)",
                    "description": "맨하탄 컴퓨터 수리, 가구 조립, TV 설치 등 IT와 홈 서비스를 제공하는 전문 핸디맨 서비스입니다.",
                    "url": "https://www.smilehandyman.com/ko",
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
