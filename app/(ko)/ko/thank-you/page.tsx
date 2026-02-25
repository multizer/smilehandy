import Link from "next/link";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "감사합니다 | Smile Handyman",
    description: "문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouPageKO() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">문의해 주셔서 감사합니다!</h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        메시지가 성공적으로 전송되었습니다. <br />
                        남겨주신 내용을 확인한 후 24시간 이내에 연락드리겠습니다.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/ko"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            홈으로 돌아가기
                        </Link>
                        <Link
                            href="/ko/#services"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                        >
                            서비스 둘러보기
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-sm text-gray-400">
                            급한 도움이 필요하신가요? <span className="font-semibold text-gray-600">(917) 818-0994</span>로 문자 메시지를 남겨주세요.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
