"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Facebook } from "lucide-react";
import Image from "next/image";

const AboutKO = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden relative shadow-xl">
                                <Image src="/aboutus2.png" alt="Smile Handyman 작업 현장" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-6 rounded-3xl shadow-lg hidden md:block">
                                <div className="text-2xl font-bold mb-1">Smile Handyman</div>
                                <div className="text-sm font-medium opacity-90">맨하탄 한인 핸디맨 · 가구조립 · IT핸디맨</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <span className="text-blue-900 font-semibold tracking-wide uppercase text-sm">About us</span>

                        <div className="space-y-6 mt-2">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">믿을 수 있는 맨하탄 한인 IT 핸디맨</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Smile Handyman은 맨하탄(UWS·UES)에서 TV 설치, Wi‑Fi/스마트홈 세팅, 맨하탄 가구조립, 작은 수리까지
                                    투명한 견적과 꼼꼼한 마감으로 제공하는 핸디맨 서비스입니다. 방문 전 사전 상담으로 필요한 브라켓과 부품을
                                    준비해 시간을 절약합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">꼼꼼하고 책임감 있는 서비스</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    사전 상담과 방문 확인으로 시간 낭비 없이 준비된 상태로 방문합니다.
                                    TV·가구·조명 설치 및 모든 서비스 완료 후 전선 정리, 안전 확인을 거쳐
                                    테스트까지 완료한 후 사용법을 설명드립니다.

                                    작업 후 청소까지 책임지기 때문에 고객님은 편하게 결과물만 확인하시면 됩니다.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                                    <h3 className="text-xl font-bold text-gray-900">커뮤니티 선데이 (Community Sundays)</h3>
                                </div>
                                <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
                                    <p>
                                        커뮤니티 선데이는 Smile Handyman의 대표 케니(Kenny)가 시작한 개인 커뮤니티 프로젝트입니다.
                                        매주 일요일, 도움이 필요한 지역 주민들에게{" "}
                                        <span className="font-semibold">핸디맨 무료서비스</span>와{" "}
                                        <span className="font-semibold">컴퓨터수리 자원봉사</span>를 제공하며 지역에 도움이 되고자 하는 작은 노력입니다.
                                    </p>
                                    <p>
                                        어르신, 장애인, 저소득 가정 등 도움이 필요한 이웃을 위한{" "}
                                        <span className="font-semibold">자원봉사 핸디맨</span> 프로그램으로,
                                        이 활동은 정규 유료 서비스와는 별개로 운영되며 향후 비영리 단체로 발전할 계획입니다.
                                    </p>
                                    <div className="pt-2">
                                        <p className="font-medium text-gray-900 mb-2">더 알아보기:</p>
                                        <a
                                            href="https://www.supportnewyork.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline bg-white px-4 py-2 rounded-xl border border-orange-100 shadow-sm transition-all hover:shadow-md"
                                        >
                                            👉 https://www.supportnewyork.org/
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutKO;
