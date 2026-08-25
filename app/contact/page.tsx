import Link from "next/link";
import CopyEmailButton from "./copy-email-button";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-lavender-50/80 px-6 py-8 shadow-soft sm:my-8 sm:rounded-[36px]">
      <Link href="/" className="text-sm font-black text-lavender-600">
        ← 오늘의 운세
      </Link>
      <h1 className="mt-8 text-3xl font-black text-[#2d2541]">문의하기</h1>
      <section className="mt-6 rounded-[30px] bg-white p-5 shadow-card">
        <p className="text-sm font-black text-lavender-500">이메일 문의</p>
        <p className="mt-3 leading-7 text-[#665a78]">문의는 아래 이메일로 보내주세요.</p>
        <a
          href="mailto:jounsjouns@naver.com"
          className="mt-5 block rounded-2xl bg-lavender-500 px-5 py-4 text-center font-black text-white shadow-card"
        >
          jounsjouns@naver.com
        </a>
        <CopyEmailButton />
      </section>
    </main>
  );
}
