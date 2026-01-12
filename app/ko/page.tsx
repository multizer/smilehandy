import type { Metadata } from "next";
import HeroKO from "@/components/ko/HeroKO";
import ServicesKO from "@/components/ko/ServicesKO";
import FAQKO from "@/components/ko/FAQKO";
import AboutKO from "@/components/ko/AboutKO";

export const metadata: Metadata = {
    title: "Smile Handyman | 맨해튼 전문가 인공지능 컴퓨터 수리 및 홈 서비스",
    description: "맨해튼의 신뢰받는 테크 지원 및 핸디맨 서비스. 컴퓨터 수리, 와이파이 설정, TV 설치, 이케아 조립 전문. 어르신과 도움이 필요한 분들을 위한 '커뮤니티 선데이' 무료 서비스 운영 중.",
    keywords: [
        "맨해튼 핸디맨",
        "뉴욕 한국인 컴퓨터 수리",
        "한국인직원 핸디맨",
        "맨해튼 테크 지원",
        "뉴욕 이케아 조립",
        "TV 설치 서비스",
        "스마트 홈 설정",
        "뉴욕 와이파이 수리",
        "커뮤니티 선데이",
        "맨해튼 무료 핸디맨",
        "뉴욕 어르신 테크 지원",
        "맨해튼 자원봉사 핸디맨"
    ],
    alternates: {
        canonical: "https://www.smilehandyman.com/ko",
    },
    verification: {
        google: "ReTgLuAOHjkcWCYvr0gHUPtgQQW9xUgyqyoPmh7-BLY",
    },
};

export default function KoreanHome() {
    return (
        <main className="min-h-screen">
            <HeroKO />
            <ServicesKO />
            <FAQKO />
            <AboutKO />
        </main>
    );
}
