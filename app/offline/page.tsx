import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[430px] place-items-center bg-lavender-50/80 px-6 py-8 text-center shadow-soft sm:my-8 sm:rounded-[36px]">
      <section className="rounded-[30px] bg-white p-7 shadow-card">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-lavender-100 text-3xl">
          🌙
        </div>
        <h1 className="mt-5 text-3xl font-black text-[#2d2541]">잠시 오프라인이에요</h1>
        <p className="mt-3 leading-7 text-[#665a78]">
          인터넷 연결이 돌아오면 오늘의 운세를 다시 확인할 수 있어요.
        </p>
        <Link
          href="/"
          className="mt-6 block rounded-2xl bg-lavender-500 px-5 py-4 font-black text-white shadow-card"
        >
          다시 확인하기
        </Link>
      </section>
    </main>
  );
}
