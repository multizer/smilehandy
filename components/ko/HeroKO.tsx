"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroKO = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm">
                                <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                                <span>맨하탄 최고의 홈 테크 지원 서비스</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm">
                                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                <span>한국인 직원 직접 방문</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                            {/* 커뮤니티 선데이 링크 - 필요시 주석 해제하여 사용
                            <Link href="#about" className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-orange-200 transition-colors">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                커뮤니티 선데이 진행 중
                            </Link>
                            */}

                            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                                </span>
                                실시간 예약 가능
                            </div>

                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-live-chat'))}
                                className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-200 transition-colors"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                AI 라이브 채팅 상담
                            </button>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            맨하탄 컴퓨터 수리 <br className="hidden lg:block" />및 <span className="text-blue-900">홈 서비스 핸디맨</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            맨하탄 컴퓨터수리 당일 핸디맨 서비스등 폭넓은 홈서비를 제공합니다.
                            스마일 핸디맨은 가구조립, LED조명설치, CCTV 등을 비롯한 각종 집안수리 서비스를 하고 있으며
                            유명한 맨하탄 핸디맨입니다.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#services"
                                className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/25 flex items-center justify-center gap-2 group"
                            >
                                서비스 둘러보기
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform pointer-events-none" />
                            </Link>
                            <Link
                                href="#faq"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                            >
                                이용 안내
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
                            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full text-blue-700 border border-blue-100">
                                <Building2 className="w-4 h-4" />
                                <span>가정 및 사무실</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                정식 보험 가입
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                투명한 정찰제
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
                            <Image
                                src="/home2.png"
                                alt="맨하탄 컴퓨터 수리 및 뉴욕 한국인 핸디맨 서비스 - Smile Handyman"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 fill-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">100% 만족 보장</div>
                                    <div className="text-sm text-gray-500">최고의 기술력을 약속합니다</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroKO;
