import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-lavender-50/80 px-6 py-8 shadow-soft sm:my-8 sm:rounded-[36px]">
      <Link href="/" className="text-sm font-black text-lavender-600">
        ← 오늘의 운세
      </Link>
      <h1 className="mt-8 text-3xl font-black text-[#2d2541]">이용약관</h1>
      <section className="mt-6 space-y-5 rounded-[30px] bg-white p-5 leading-7 text-[#665a78] shadow-card">
        <p>
          본 서비스의 운세 콘텐츠는 일상적인 재미와 참고를 위한 정보입니다. 중요한 의사결정의 유일한 근거로 사용하지 않는 것을 권장합니다.
        </p>
        <p>
          광고, 제휴, 프리미엄 영역은 수익화 구조를 보여주기 위한 샘플이며 실제 결제 또는 상담 계약은 아직 제공하지 않습니다.
        </p>
        <p>서비스 내용은 더 나은 경험을 위해 사전 안내 후 변경될 수 있습니다.</p>
      </section>
    </main>
  );
}
