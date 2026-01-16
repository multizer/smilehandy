"use client";

import { motion } from "framer-motion";
import { Tv, Wifi, Hammer, Monitor, Zap, Home } from "lucide-react";

const services = [
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "컴퓨터 수리 및 기술 지원",
        description: "윈도우 설치, 마이그레이션, 데이터 복구, 백업, 트러블슈팅 등 광범위한 전문 서비스를 제공합니다.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        title: "Wi-Fi 및 네트워크 설정",
        description: "음영 지역 제거, 메시 시스템 설치, 라우터 설정 및 가정, 중소규모 네트워크 설치 지원.",
        color: "bg-sky-100 text-sky-600",
    },
    {
        icon: <Tv className="w-6 h-6" />,
        title: "TV 벽걸이 설치",
        description: "모든 크기의 TV 안전 설치. 전선 정리 및 숨김 옵션 선택 가능.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: <Home className="w-6 h-6" />,
        title: "스마트 홈 장치",
        description: "스마트 도어락, 비디오 벨, 보안 카메라 및 음성 인식 도우미 설치.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: <Hammer className="w-6 h-6" />,
        title: "이케아 가구 조립",
        description: "이케아, 웨이페어, 아마존 가구 전문 조립 서비스. 빠르고 정확하게 조립해 드립니다.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "LED 조명 설치",
        description: "LED 스트립 조명, 저전압 하부장 조명 및 스마트 전구 설치.",
        color: "bg-yellow-100 text-yellow-600",
    },
];

const ServicesKO = () => {
    return (
        <section id="services" className="py-20 bg-white scroll-mt-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">서비스 종류</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">전문가의 고품격 서비스</h2>
                    <p className="text-gray-600">
                        귀하의 가정을 원활하게 유지하기 위한 폭넓은 핸디맨 및 테크 서비스를 제공합니다.
                        어르신들을 위한 특별 지원과 저희만의 특별한 <span className="text-orange-600 font-medium">커뮤니티 선데이</span> 활동을 확인해 보세요.
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
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesKO;
