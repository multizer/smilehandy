"use client";

import { motion } from "framer-motion";
import { Tv, Wifi, Hammer, Monitor, Zap, Home } from "lucide-react";

const services = [
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "TV · 모니터 벽걸이 설치",
        description:
            "맨하탄 TV 설치, 브라켓 선정부터 매립형 배선 정리, 수평 체크까지 안전 기준에 맞춰 시공합니다. 건식·콘크리트 벽 모두 가능하며 깔끔한 마감까지 책임집니다.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        title: "Wi‑Fi · 인터넷 최적화",
        description:
            "메시/익스텐더 구성, 속도 저하 점검, 공유기 위치 최적화로 집 전체 속도를 끌어올립니다. 스트리밍·재택근무 환경에 맞춰 세팅하고 테스트까지 완료합니다.",
        color: "bg-sky-100 text-sky-600",
    },
    {
        icon: <Tv className="w-6 h-6" />,
        title: "셋톱박스 · AV 정리",
        description:
            "셋톱박스, 사운드바, 콘솔 연결과 전선 정리를 깔끔하게 묶어 거실을 넓게 씁니다. 수평·화질 테스트까지 완료 후 인수인계합니다.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: <Home className="w-6 h-6" />,
        title: "스마트홈 · 조명 설치",
        description: "스마트 조명, 스위치, 락, 블라인드 설치와 앱 연동을 지원합니다. 안전 차단, 전원 테스트 후 사용법까지 안내드립니다.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: <Hammer className="w-6 h-6" />,
        title: "맨하탄 가구조립 · 작은 수리",
        description:
            "IKEA·Wayfair 등 가구조립, 문고리·경첩·선반·타월바 교체 등 생활 수리를 빠르게 처리합니다. 맨하탄 가구조립 키워드로 찾으시는 작업을 모두 맡겨 주세요.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "LED 교체 · 포인트 조명",
        description: "노후 LED/전구 교체, 간접조명 설치, 밝기·색온도 세팅으로 공간 분위기를 맞춥니다. 안전 차단 후 작업하며 깨끗하게 정리합니다.",
        color: "bg-yellow-100 text-yellow-600",
    },
];

const ServicesKO = () => {
    return (
        <section id="services" className="py-20 bg-white scroll-mt-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">서비스 안내</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">맨하탄 한인 핸디맨 서비스</h2>
                    <p className="text-gray-600">
                        TV 설치, Wi‑Fi 최적화, 맨하탄 가구조립부터 스마트홈과 작은 수리까지 한 번에 해결합니다.{" "}
                        <span className="text-orange-600 font-medium">맨하탄 핸디맨</span>으로 검색하셨다면 바로 연락 주세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-white group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesKO;
