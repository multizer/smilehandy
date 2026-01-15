"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "당일 예약이 가능한가요? 서비스 지역은 어디인가요?",
        answer:
            "네, 맨하탄(UWS·UES 포함) 전역은 당일 또는 주말 예약이 가능합니다. 일정이 꽉 찬 경우 가까운 가능한 시간대를 바로 안내드리고 이동 동선을 최적화해 드립니다.",
    },
    {
        question: "비용은 어떻게 정해지나요?",
        answer:
            "작업 종류, 벽체 타입(건식/콘크리트/벽돌), 브라켓·부품 사용 여부에 따라 산정합니다. 현장 확인 후 투명하게 견적을 공유하고, 추가 비용은 사전 동의 없이 발생하지 않습니다.",
    },
    {
        question: "맨하탄 가구조립을 맡길 수 있나요? 큰 가구도 가능한가요?",
        answer:
            "네, 맨하탄 가구조립(침대, 서랍장, 옷장, 책상 등)과 부분 수리까지 진행합니다. 무거운 가구 이동 시 바닥 보호와 수평 잡기까지 완료해 드립니다.",
    },
    {
        question: "핸디맨 자원봉사나 컴퓨터수리 자원봉사는 어떻게 신청하나요?",
        answer:
            "커뮤니티 선데이 프로그램으로 진행합니다. 긴급하지 않은 소규모 작업과 컴퓨터수리 자원봉사를 우선 배정하며, 희망 날짜와 필요한 작업을 이메일(smilehandymanny@gmail.com)로 보내주시면 일정에 맞춰 연락드립니다.",
    },
    {
        question: "벽걸이 TV 설치는 어떤 브라켓과 벽에서도 가능한가요?",
        answer:
            "드라이월, 콘크리트, 벽돌 모두 가능합니다. 브라켓이 없으면 추천 규격을 안내드리며, 배선 정리와 수평 체크, 장비 테스트까지 마친 후 인수인계합니다.",
    },
    {
        question: "Wi‑Fi나 스마트홈 세팅 후 문제가 생기면 A/S가 되나요?",
        answer:
            "작업 후 7일 이내 동일 이슈는 무상 점검을 제공합니다. 네트워크 환경 변화나 신규 기기 추가가 있을 경우에는 추가 방문이 필요할 수 있습니다.",
    },
    {
        question: "예약을 변경하거나 취소하려면 어떻게 하나요?",
        answer:
            "최소 24시간 전에 알려주시면 수수료 없이 변경·취소 가능합니다. 당일 변경이 필요한 경우 가능한 가장 빠른 다른 슬롯을 찾아 드립니다.",
    },
    {
        question: "빌딩에서 COI(보험증명서)를 요구하는데 제공되나요?",
        answer: "네, 라이선스와 보험을 보유하고 있으며 COI 발급이 가능합니다. 빌딩 양식을 미리 보내주시면 방문 전까지 준비해 드립니다.",
    },
];

const FAQKO = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">자주 묻는 질문</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">예약·비용·자원봉사 안내</h2>
                    <p className="text-gray-600 mb-4">
                        TV 설치, 맨하탄 가구조립, 핸디맨 자원봉사/컴퓨터수리 자원봉사 등 문의가 많은 내용을 정리했습니다. 더 필요한
                        정보가 있다면 채팅으로 바로 문의 주세요.
                    </p>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-live-chat"))}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        바로 상담하기 (AI 실시간 채팅)
                    </button>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 text-orange-500">
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQKO;
