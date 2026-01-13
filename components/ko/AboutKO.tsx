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
                                <Image
                                    src="/aboutus1.png"
                                    alt="Smile Handyman 소개"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-6 rounded-3xl shadow-lg hidden md:block">
                                <div className="text-2xl font-bold mb-1">맨해튼 지역</div>
                                <div className="text-sm font-medium opacity-90">현지 기반 운영 및 서비스</div>
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
                        <span className="text-blue-900 font-semibold tracking-wide uppercase text-sm">회사 소개</span>

                        <div className="space-y-6 mt-2">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">Smile Handyman을 소개합니다</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Smile Handyman은 맨해튼에 기반을 둔 로컬 테크 지원 및 설치 서비스 전문 기업입니다.
                                    컴퓨터 설정, TV 설치, 인터넷 장애 해결, 스마트 홈 장치 등 <span className="font-semibold text-orange-500">친절하고 빠른 도움</span>으로 여러분의 일상 속 테크 문제를 해결해 드립니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">저희의 미션</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    저희의 미션은 모든 사람, 특히 어르신들과 바쁜 뉴요커들이 가정 내 기술 문화를 쉽고 스트레스 없이 누리도록 돕는 것입니다.
                                    친절한 서비스는 언제나 가까운 곳에 있어야 한다고 믿습니다.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                                    <h3 className="text-xl font-bold text-gray-900">커뮤니티 선데이 (Community Sundays)</h3>
                                </div>
                                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                    매주 일요일, 저소득층 주민, 어르신 및 장애인을 우선으로 <span className="font-semibold">무료 커뮤니티 서비스</span>를 제한된 인원에게 제공합니다.
                                </p>
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                    서비스에는 TV 설치, 단층 침대 조립, 간단한 컴퓨터 지원(Tier 1) 등이 포함됩니다. 자세한 사항이 궁금하시면 이메일 보내주세요.
                                </p>
                                <div className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-orange-100">
                                    <p className="mb-1">예약이 조기 마감될 수 있으며, 이메일을 통해 사전 일정이 확정됩니다.</p>
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
