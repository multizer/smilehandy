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
        "스마일 핸디맨(Smile Handyman)은 맨하탄 핸디맨, 맨하탄 가구조립, TV 설치, Wi‑Fi/스마트홈 세팅, 컴퓨터수리 자원봉사, 핸디맨 자원봉사를 한 번에 해결합니다. UWS·UES·맨하탄 전역 당일 방문과 투명한 견적을 제공합니다.",
    keywords: [
        "스마일 핸디맨",
        "스마일핸디맨",
        "맨하탄 핸디맨",
        "맨하탄핸디맨",
        "맨하탄 핸디맨",
        "맨하탄 한인 가구조립",
        "맨하탄한인 가구조립",
        "맨하탄한인 TV벽설치",
        "맨하탄한인 Wi-Fi 설치",
        "맨하탄한인 스마트홈 설치",
        "한인핸디맨 자원봉사",
        "한인컴퓨터수리 자원봉사",
        "맨하탄한인 컴퓨터수리",
        "맨하탄한인 카메라설치",
        "맨하탄한인 비디오벨 설치",
        "맨하탄 한국어 가구조립",
        "맨하탄한국어 가구조립",
        "맨하탄한국어 TV벽설치",
        "맨하탄한국어 Wi-Fi 설치",
        "맨하탄한국어 스마트홈 설치",
        "한국어핸디맨 자원봉사",
        "한국어컴퓨터수리 자원봉사",
        "맨하탄한국어 컴퓨터수리",
        "맨하탄한국어 카메라설치",
        "맨하탄한국어 비디오벨 설치",
        "맨하탄 한인 핸디맨",
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
        title: "Smile Handyman | 맨하탄 IT 핸디맨, 컴퓨터출장수리",
        description: "맨하탄의 신뢰받는 테크 지원 및 핸디맨 서비스. 컴퓨터 수리, 와이파이 설정, TV 설치, 이케아 조립 전문. 어르신과 도움이 필요한 분들을 위한 '커뮤니티 선데이' 무료 서비스 운영 중.",
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
                    "name": "Smile Handyman | 스마일 핸디맨 (맨하탄 핸디맨)",
                    "description": "스마일 핸디맨은 맨하탄 핸디맨, 맨하탄 가구조립, TV 설치, Wi‑Fi/스마트홈 세팅, 컴퓨터수리 자원봉사, 핸디맨 자원봉사를 제공하는 한인 핸디맨 서비스입니다.",
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
