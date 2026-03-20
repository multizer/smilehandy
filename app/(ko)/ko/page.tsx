import type { Metadata } from "next";
import HeroKO from "@/components/ko/HeroKO";
import ServicesKO from "@/components/ko/ServicesKO";
import FAQKO from "@/components/ko/FAQKO";
import AboutKO from "@/components/ko/AboutKO";
import ContactFormKO from "@/components/ko/ContactFormKO";
import Script from "next/script";

export const metadata: Metadata = {
    title: {
        absolute: "맨하탄 핸디맨 | 집수리"
    },
    description:
        "저희는 맨하탄 핸디맨으로 최고의 서비스 만족을 목표로 합니다. 집수리, 홈캠, 스마트 시스템 등을 서비스하고 있습니다.",
    keywords: [
        "맨하탄 핸디맨",
        "맨하탄 한인 핸디맨",
        "맨하탄 가구조립",
        "스마일 핸디맨",
        "맨하탄 컴퓨터수리",
        "IT 핸디맨",
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
        title: "맨하탄 핸디맨 | 집수리",
        description: "맨하탄의 신뢰받는 한인 핸디맨. 가구조립, 컴퓨터 수리, TV 설치, Wi-Fi 설정 전문.",
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

            {/* SEO Structured Data - LocalBusiness */}
            <Script id="json-ld-ko" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "@id": "https://www.smilehandyman.com/#business",
                    "name": "스마일 핸디맨 (Smile Handyman)",
                    "image": "https://www.smilehandyman.com/ogimage.png",
                    "url": "https://www.smilehandyman.com/ko",
                    "telephone": "+1-917-397-3145",
                    "priceRange": "$$",
                    "description": "맨하탄의 신뢰받는 한인 핸디맨. 가구조립, 컴퓨터 수리, TV 설치, Wi-Fi 설정 등 IT와 홈 서비스를 제공합니다.",
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

            {/* SEO Structured Data - FAQPage */}
            <Script id="json-ld-faq-ko" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "예약 당일에 바로 서비스를 받을 수 있나요?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "당일 서비스는 보장해 드리기 어렵습니다. 작업마다 필요한 도구, 준비 과정, 혹은 현장 방문이 선행되어야 할 수도 있기 때문입니다. 하지만 예약 후 최대한 빠르게 연락드려 상황을 파악하고 최적의 일정을 조율해 드립니다."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "기본 정찰제($120)에는 어떤 작업들이 포함되나요?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Wi-Fi 문제, TV 설치, 프린터 설정, 스마트 기기 등 대부분의 일반적인 가정 및 소규모 사업장 테크 문제는 $120 정찰제(Tier 1/2 기준)가 적용됩니다. 정찰제는 방문당 하나의 독립된 작업 항목에 적용되며, 작업 시간에 관계없이 동일합니다."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "숨겨진 추가 비용이 있나요?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "절대 없습니다. 저희 가격은 항상 투명하고 미리 안내해 드립니다. 예상치 못한 상황이 발생하더라도, 항상 먼저 설명해 드리고 고객님의 동의를 얻은 후 진행합니다."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "문제를 해결하지 못해도 비용을 내야 하나요?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "아니요. 문제를 해결하지 못하면 어떤 비용도 청구하지 않습니다. 저희는 오직 완료되고 성공적인 수리나 설치에 대해서만 비용을 받습니다. 결과가 없으면 비용도 없습니다."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "취소하거나 일정을 변경하고 싶으면 어떻게 하나요?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "방문 전이라면 언제든지 수수료 없이 취소나 변경이 가능합니다. 문자나 문의 양식을 통해 미리 알려주시기만 하면 됩니다."
                            }
                        }
                    ]
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
