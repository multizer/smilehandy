"use client";

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
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
                                <Image src="/aboutus1.png" alt="Smile Handyman 작업 현장" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-6 rounded-3xl shadow-lg hidden md:block">
                                <div className="text-2xl font-bold mb-1">Smile Handyman</div>
                                <div className="text-sm font-medium opacity-90">맨하탄 한인 핸디맨 · 가구조립 · TV 설치</div>
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">맨하탄에서 믿을 수 있는 한인 핸디맨</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Smile Handyman은 맨하탄(UWS·UES)에서 TV 설치, Wi‑Fi/스마트홈 세팅, 맨하탄 가구조립, 작은 수리까지
                                    투명한 견적과 꼼꼼한 마감으로 제공하는 핸디맨 서비스입니다. 방문 전 사전 상담으로 필요한 브라켓과 부품을
                                    준비해 시간을 절약합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">안전하고 깔끔한 작업</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    라이선스와 보험을 갖춘 팀이 안전 차단 후 작업하며, 수평·전원·네트워크 테스트까지 끝낸 뒤 공간을 정리하고
                                    인수인계합니다. 빌딩 COI가 필요하면 미리 발급해 드립니다.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                                    <h3 className="text-xl font-bold text-gray-900">커뮤니티 선데이 (자원봉사)</h3>
                                </div>
                                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                    긴급하지 않은 소규모 작업을 위해 주말에 <span className="font-semibold">핸디맨 자원봉사</span>와{" "}
                                    <span className="font-semibold">컴퓨터수리 자원봉사</span>를 진행합니다. 도움이 필요한 이웃에게 우선 배정하며,
                                    가능한 범위에서 재료비만 요청드립니다.
                                </p>
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                    원하는 날짜와 필요 작업을 이메일로 보내주시면 가능한 일정에 배정해 드립니다. 맨하탄 내 어르신·학생·싱글맘
                                    가구를 우선 지원합니다.
                                </p>
                                <div className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-orange-100">
                                    <p className="mb-1">자원봉사 문의</p>
                                    <div className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                                        <Mail className="w-4 h-4" /> smilehandymanny@gmail.com
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
