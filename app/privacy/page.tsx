import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-lavender-50/80 px-6 py-8 shadow-soft sm:my-8 sm:rounded-[36px]">
      <Link href="/" className="text-sm font-black text-lavender-600">
        ← 오늘의 운세
      </Link>
      <h1 className="mt-8 text-3xl font-black text-[#2d2541]">개인정보처리방침</h1>
      <section className="mt-6 space-y-5 rounded-[30px] bg-white p-5 leading-7 text-[#665a78] shadow-card">
        <p>
          오늘의 운세는 이메일 구독 신청 시 입력한 이메일 주소를 운세 알림과 서비스 안내 목적으로 사용할 수 있습니다.
        </p>
        <p>
          현재 버전은 프론트엔드 샘플 앱이며 실제 저장, 전송, 결제 기능은 연결되어 있지 않습니다. 실제 서비스 전환 시 수집 항목,
          보관 기간, 제3자 제공 여부를 명확히 고지합니다.
        </p>
        <p>문의: hello@fortune.example</p>
      </section>
    </main>
  );
}
