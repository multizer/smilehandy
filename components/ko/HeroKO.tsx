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
                                <span>맨하탄 스마일 핸디맨 컴퓨터 문제 해결</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm">
                                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                <span>맨해튼 전 지역 방문 · 당일 견적</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                            <Link
                                href="#about"
                                className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-orange-200 transition-colors"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                커뮤니티 선데이 자원봉사 안내
                            </Link>

                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-live-chat"))}
                                className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-200 transition-colors"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                AI 채팅으로 바로 문의
                            </button>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            맨하탄 핸디맨 컴퓨터 수리 <br className="hidden lg:block" />한 번에 해결해 드립니다
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            스마일 핸디맨은 업퍼웨스트사이드(UWS), 업퍼이스트사이드(UES), 첼시, 미드타운 등 맨해튼 전역에서
                            가장 신뢰받는 테크 전문가입니다. 컴퓨터 수리, 와이파이 설정, TV 설치 및
                            핸디맨 가구 조립 등 일상에 필요한 모든 기술 지원을 한국어로 편하게 받으세요.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#services"
                                className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/25 flex items-center justify-center gap-2 group"
                            >
                                스마일 핸디맨 서비스 보기
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform pointer-events-none" />
                            </Link>
                            <Link
                                href="#faq"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                            >
                                스마일 핸디맨 FAQ
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
                            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full text-blue-700 border border-blue-100">
                                <Building2 className="w-4 h-4" />
                                <span>맨하탄 · UWS · UES 전 지역</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                당일·주말 예약 가능
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                라이선스·보험 보유
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
                                alt="Smile Handyman 맨하탄 핸디맨 · 맨하탄 가구조립 · TV 설치"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 fill-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">100% 만족 보장</div>
                                    <div className="text-sm text-gray-500">안전 기준 준수 · 투명한 견적 · 꼼꼼한 마감</div>
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
