"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, User } from "lucide-react";
import { sendEmail } from "@/app/actions";
import { useRouter } from "next/navigation";

const ContactFormKO = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                // Redirect to Thank You page
                router.push("/ko/thank-you");
            } else {
                setError(result.error || "메시지 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
            }
        } catch (err) {
            setError("서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact-form" className="py-20 bg-slate-50 scroll-mt-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                        {/* Info Side */}
                        <div className="bg-blue-900 p-8 md:p-12 text-white md:w-2/5">
                            <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">문의하기</span>
                            <h2 className="text-3xl font-bold mt-2 mb-6">궁금한 점이 있으신가요?</h2>
                            <p className="text-blue-100 mb-10 leading-relaxed">
                                서비스 예약, 견적 문의 등 아래 양식을 작성해 보내주시면 24시간 이내에 확인 후 연락드리겠습니다.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-800/50 p-2.5 rounded-lg">
                                        <Phone className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-300">전화/문자 상담</div>
                                        <div className="font-semibold">(917) 818-0994 (Text Only)</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-800/50 p-2.5 rounded-lg">
                                        <Mail className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-300">이메일 문의</div>
                                        <div className="font-semibold">smilehandymanny@gmail.com</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-blue-800/30 rounded-2xl border border-blue-700/50">
                                <p className="text-sm text-blue-100 italic">
                                    "맨해튼의 모든 테크 문제, 스마일 핸디맨이 친절하게 해결해 드립니다."
                                </p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-8 md:p-12 md:w-3/5">
                            <form action={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <User className="w-4 h-4 text-blue-600" /> 이름
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="홍길동"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-blue-600" /> 전화번호
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="000-000-0000"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-blue-600" /> 이메일 주소
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="example@gmail.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">문의 내용</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="수리가 필요한 부분이나 궁금한 점을 적어주세요."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 text-gray-900"
                                    ></textarea>
                                </div>

                                <AnimatePresence mode="wait">
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm"
                                        >
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            보내는 중...
                                        </>
                                    ) : (
                                        <>
                                            메시지 보내기
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    서비스 제공을 위해 최소한의 개인정보를 수집하며, 보안을 철저히 유지합니다.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormKO;
