import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Static 파일, 이미지, API, favicon 등은 미들웨어가 간섭하지 않고 통과시킵니다.
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 그 외 모든 페이지 요청에 대해 503 점검중 화면을 보여줍니다.
  return new NextResponse(
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temporary Maintenance - Smile Handyman</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #f59e0b;
      --primary-hover: #d97706;
      --bg-start: #0f172a;
      --bg-end: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Outfit', 'Noto Sans KR', sans-serif;
      background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
      color: var(--text-main);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      overflow: hidden;
      padding: 20px;
    }

    /* 배경 장식 원 */
    .bg-glow {
      position: absolute;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0) 70%);
      top: 20%;
      left: 10%;
      z-index: 1;
      pointer-events: none;
      animation: pulseGlow 8s infinite alternate;
    }
    
    .bg-glow-2 {
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%);
      bottom: 10%;
      right: 10%;
      z-index: 1;
      pointer-events: none;
      animation: pulseGlow 12s infinite alternate-reverse;
    }

    .card {
      position: relative;
      z-index: 10;
      background: rgba(30, 41, 59, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 48px 40px;
      max-width: 560px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      animation: fadeInUp 0.8s ease-out;
    }

    .icon-wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      background: rgba(245, 158, 11, 0.1);
      border: 2px dashed var(--primary);
      border-radius: 50%;
      margin-bottom: 28px;
      position: relative;
    }

    .icon-wrapper svg {
      width: 40px;
      height: 40px;
      fill: none;
      stroke: var(--primary);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      animation: spinGear 10s linear infinite;
    }

    .logo-text {
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--primary);
      margin-bottom: 12px;
    }

    h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 18px;
      background: linear-gradient(to right, #ffffff, #e2e8f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 32px;
      word-break: keep-all;
    }

    .divider {
      height: 1px;
      background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.1), rgba(255,255,255,0));
      margin: 24px 0;
    }

    .info-footer {
      font-size: 14px;
      color: var(--text-muted);
    }

    .info-footer a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s;
    }

    .info-footer a:hover {
      color: var(--primary-hover);
      text-decoration: underline;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes spinGear {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulseGlow {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.1); opacity: 1; }
    }

    @media (max-width: 480px) {
      .card {
        padding: 32px 24px;
      }
      h1 {
        font-size: 26px;
      }
      p {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="bg-glow"></div>
  <div class="bg-glow-2"></div>

  <div class="card">
    <div class="logo-text">Smile Handyman</div>
    <div class="icon-wrapper">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </div>
    <h1>Undergoing Maintenance<br>to Serve You Better</h1>
    <p>
      Thank you very much for visiting Smile Handyman.<br>
      Our website is temporarily down for service enhancements and system maintenance.<br>
      We will be back shortly with a much improved experience.
    </p>
    <div class="divider"></div>
    
  </div>
</body>
</html>
    `,
    {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '86400',
      },
    }
  );
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|icon.png|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
