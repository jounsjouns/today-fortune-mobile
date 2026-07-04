import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-lavender-50/80 px-6 py-8 shadow-soft sm:my-8 sm:rounded-[36px]">
      <Link href="/" className="text-sm font-black text-lavender-600">
        ← 오늘의 운세
      </Link>
      <h1 className="mt-8 text-3xl font-black text-[#2d2541]">문의하기</h1>
      <section className="mt-6 rounded-[30px] bg-white p-5 shadow-card">
        <p className="leading-7 text-[#665a78]">
          제휴, 광고, 프리미엄 운세 입점 문의는 아래 이메일로 보내주세요.
        </p>
        <a
          href="mailto:hello@fortune.example"
          className="mt-5 block rounded-2xl bg-lavender-500 px-5 py-4 text-center font-black text-white shadow-card"
        >
          hello@fortune.example
        </a>
      </section>
      <section className="mt-5 rounded-[30px] bg-[#fff7fb] p-5 shadow-card">
        <p className="text-sm font-black text-pink-400">빠른 제휴 문의</p>
        <div className="mt-4 grid gap-3">
          <input className="rounded-2xl border border-lavender-100 bg-white px-4 py-3 outline-none" placeholder="이름" />
          <input className="rounded-2xl border border-lavender-100 bg-white px-4 py-3 outline-none" placeholder="이메일" />
          <textarea
            className="min-h-32 rounded-2xl border border-lavender-100 bg-white px-4 py-3 outline-none"
            placeholder="문의 내용을 입력하세요"
          />
          <button className="rounded-2xl bg-[#4b3b68] px-5 py-4 font-black text-white shadow-card">
            문의 보내기
          </button>
        </div>
      </section>
    </main>
  );
}
