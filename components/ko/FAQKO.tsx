"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "예약 당일에 바로 서비스를 받을 수 있나요?",
        answer: "당일 서비스는 보장해 드리기 어렵습니다. 작업마다 필요한 도구, 준비 과정, 혹은 현장 방문이 선행되어야 할 수도 있기 때문입니다. 하지만 예약 후 최대한 빠르게 연락드려 상황을 파악하고 최적의 일정을 조율해 드립니다.\n걱정하지 마세요. 귀하의 가정에 딱 맞는 계획을 함께 세워 드립니다."
    },
    {
        question: "사무실이나 사업자 고객도 서비스를 이용할 수 있나요?",
        answer: "네, 가능합니다. 가정, 소규모 사무실 및 비즈니스 고객 모두에게 지원을 제공합니다.\n\n비즈니스 고객의 경우, 단일 문제나 개별 장치에 대해 정찰제 요금이 적용됩니다.\n공유 네트워크, 서버 또는 여러 시스템이 연결된 복합적인 문제는 별도의 견적이 필요할 수 있습니다.\n단일 문제인지 불분명한 경우, 무료 현장 방문을 통해 견적을 확인해 드릴 수 있습니다.\n가정과 비즈니스 모두에게 투명한 가격과 신뢰할 수 있는 서비스를 약속합니다."
    },
    {
        question: "기본 정찰제($120)에는 어떤 작업들이 포함되나요?",
        answer: "Wi-Fi 문제, TV 설치, 프린터 설정, 스마트 기기 등 대부분의 일반적인 가정 및 소규모 사업장 테크 문제는 $120 정찰제(Tier 1/2 기준)가 적용됩니다.\n정찰제는 방문당 하나의 독립된 작업 또는 단일 한 개의 문제해결 항목에 적용되며, 작업 시간에 관계없이 동일합니다.\n컴퓨터 서비스의 경우, 하나의 독립된 문제(예: 특정 프로그램 오류나 개별 장치 문제)에 적용됩니다.\n사무실 환경에서 공유 네트워크나 서버, 여러 장치가 얽힌 문제는 별도 견적이 필요할 수 있습니다.\n일부 간단한 가사 작업은 동일 가격에 여러 항목이 포함될 수 있습니다:\n• LED 조명 기구 최대 2개 설치\n• 의자 조립 최대 4개\n• 침대(일반 프레임) 1개\n• 벽패치(작은거 3개 중간 2개)\n• 수도꼭지 1개\n• 샤워해드 1개\n• 실내 자전거 1개\n• 운동기구 1개\n• 또는 이와 유사한 규모의 작업\n작업이 여러 개이거나 복잡한 네트워크 문제인 경우, 사전에 내용을 검토하여 정확한 포함 범위와 가격을 확인해 드립니다.\n\n문제가 정확히 무엇인지 모를 경우, 작업 시작 전 무료 현장 견적을 요청하실 수 있습니다."
    },
    {
        question: "취소하거나 일정을 변경하고 싶으면 어떻게 하나요?",
        answer: "괜찮습니다. 일정은 언제든지 바뀔 수 있죠.\n방문 전이라면 언제든지 수수료 없이 취소나 변경이 가능합니다.\n문자나 문의 양식을 통해 미리 알려주시기만 하면 됩니다.\n예약부터 변경까지, 모든 과정을 간편하게 도와드립니다."
    },
    {
        question: "예약할 때 문제를 자세히 적어야 하나요?",
        answer: "네, 부탁드립니다! 상황을 미리 자세히 알수록 더 정확한 준비가 가능합니다. 필요한 경우, 특히 원인을 잘 모르실 때는 무료 현장 점검을 먼저 제안해 드릴 수 있습니다. 이를 통해 현실적인 해결 계획과 견적을 안내해 드립니다."
    },
    {
        question: "숨겨진 추가 비용이 있나요?",
        answer: "절대 없습니다. 저희 가격은 항상 투명하고 미리 안내해 드립니다. 예상치 못한 상황이 발생하더라도, 항상 먼저 설명해 드리고 고객님의 동의를 얻은 후 진행합니다."
    },
    {
        question: "문제를 해결하지 못해도 비용을 내야 하나요?",
        answer: "아니요. 문제를 해결하지 못하면 어떤 비용도 청구하지 않습니다. 저희는 오직 완료되고 성공적인 수리나 설치에 대해서만 비용을 받습니다.\n\n간단합니다 — 결과가 없으면 비용도 없습니다."
    },
    {
        question: "저희 집에 누가 오게 되나요?",
        answer: "신뢰할 수 있고 유니폼을 착용한 Smile Handyman 팀원이 방문합니다. 모든 팀원은 신원 조회를 거치고 전문 교육을 받았습니다. 방문 전, 팀원의 이름, 사진, 간단한 프로필이 담긴 문자를 보내드려 어떤 분이 오시는지 확인하실 수 있도록 합니다.\n\n현지 전문가. 검증된 인력. 친절함. 시작부터 끝까지 안심하고 서비스를 받으실 수 있도록 최선을 다합니다."
    }
];

const FAQKO = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">자주 묻는 질문</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">스마일 핸디맨의 궁금한 점을 확인해 보세요</h2>
                    <p className="text-gray-600 mb-4">
                        서비스 및 예약 과정에 대해 가장 자주 묻는 질문들에 대한 답변입니다.
                    </p>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-live-chat'))}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        궁금한 점이 더 있으신가요? AI 라이브 채팅으로 바로 물어보세요
                    </button>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                        >
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
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
                                            {faq.answer}
                                        </div>
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
