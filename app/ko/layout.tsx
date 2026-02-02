import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.smilehandyman.com"),
  title: {
    default: "스마일 핸디맨",
    template: "%s | 스마일 핸디맨"
  },
  alternates: {
    canonical: "https://www.smilehandyman.com/ko",
    languages: {
      "en-US": "https://www.smilehandyman.com",
      "ko-KR": "https://www.smilehandyman.com/ko",
    },
  },
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
