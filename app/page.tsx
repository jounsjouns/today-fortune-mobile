import Link from "next/link";
import { coupangProducts, getDailyFortune } from "@/data/fortune";

export const dynamic = "force-dynamic";

const navItems = [
  { href: "/", label: "오늘", icon: "✨" },
  { href: "#zodiac", label: "띠별", icon: "🧭" },
  { href: "#subscribe", label: "구독", icon: "💌" },
  { href: "/contact", label: "문의", icon: "☎️" }
];

function AdBox({ label }: { label: string }) {
  return (
    <section className="rounded-[28px] border border-dashed border-lavender-300 bg-white/64 p-5 text-center shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender-500">AD</p>
      <p className="mt-2 text-sm font-medium text-[#6d617f]">{label}</p>
    </section>
  );
}

function ScoreRing({ label, score, icon }: { label: string; score: number; icon: string }) {
  return (
    <article className="rounded-[26px] bg-white p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-2xl" aria-hidden>
          {icon}
        </span>
        <span className="text-lg font-black text-lavender-600">{score}</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-lavender-100">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-lavender-400 to-pink-300"
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="mt-3 text-sm font-bold text-[#45385f]">{label}</p>
    </article>
  );
}

type HomeProps = {
  searchParams?: Promise<{
    zodiac?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const { today, zodiacs } = getDailyFortune();
  const selectedId = params?.zodiac ?? zodiacs[0].id;
  const selected = zodiacs.find((zodiac) => zodiac.id === selectedId) ?? zodiacs[0];

  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-lavender-50/80 px-5 pb-28 pt-5 shadow-soft sm:my-8 sm:rounded-[36px]">
      <header className="rounded-[32px] bg-gradient-to-br from-lavender-300 via-purple-200 to-pink-100 p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-lavender-600">{today.dateLabel}</p>
            <h1 className="mt-2 text-4xl font-black leading-tight text-[#2d2541]">
              오늘의
              <br />
              운세
            </h1>
          </div>
          <div className="grid size-16 place-items-center rounded-full bg-white/72 text-4xl shadow-card">
            🌙
          </div>
        </div>
        <p className="mt-6 rounded-[24px] bg-white/70 p-4 text-lg font-bold leading-relaxed text-[#493a63]">
          {today.headline}
        </p>
      </header>

      <div className="mt-5">
        <AdBox label="상단 광고 영역 placeholder" />
      </div>

      <section className="mt-7">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-black text-[#2d2541]">오늘의 점수</h2>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-lavender-600 shadow-card">
            매일 업데이트
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {today.scores.map((score) => (
            <ScoreRing key={score.label} {...score} />
          ))}
        </div>
      </section>

      <section id="zodiac" className="mt-8">
        <h2 className="text-2xl font-black text-[#2d2541]">12띠별 운세</h2>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {zodiacs.map((zodiac) => {
            const isSelected = zodiac.id === selected.id;

            return (
              <Link
                key={zodiac.id}
                href={`/?zodiac=${zodiac.id}#zodiac`}
                aria-label={`${zodiac.animal} 운세 보기`}
                data-testid={`zodiac-${zodiac.id}`}
                className={`min-h-24 rounded-[24px] px-3 py-3 text-center shadow-card transition ${
                  isSelected
                    ? "bg-lavender-500 text-white"
                    : "bg-white text-[#4c4262]"
                }`}
              >
                <span className="text-2xl" aria-hidden>
                  {zodiac.emoji}
                </span>
                <span className="mt-2 block break-keep text-sm font-black">{zodiac.animal}</span>
              </Link>
            );
          })}
        </div>

        <article className="mt-4 rounded-[30px] bg-white p-5 shadow-soft">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-lavender-500">{selected.years}</p>
              <h3 className="mt-1 text-3xl font-black text-[#2d2541]">
                {selected.emoji} {selected.animal}
              </h3>
            </div>
            <span className="rounded-full bg-lavender-100 px-3 py-2 text-sm font-black text-lavender-600">
              맞춤
            </span>
          </div>
          <p className="mt-5 text-xl font-black leading-snug text-[#4b3b68]">{selected.summary}</p>
          <p className="mt-3 text-[15px] leading-7 text-[#6d617f]">{selected.detail}</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[22px] bg-lavender-50 p-4">
              <p className="text-xs font-bold text-[#7e7192]">행운의 색상</p>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className="size-5 rounded-full border border-white shadow"
                  style={{ backgroundColor: selected.lucky.colorHex }}
                />
                <b>{selected.lucky.color}</b>
              </div>
            </div>
            <div className="rounded-[22px] bg-lavender-50 p-4">
              <p className="text-xs font-bold text-[#7e7192]">행운의 숫자</p>
              <b className="mt-2 block text-xl">{selected.lucky.number}</b>
            </div>
            <div className="rounded-[22px] bg-lavender-50 p-4">
              <p className="text-xs font-bold text-[#7e7192]">행운의 방향</p>
              <b className="mt-2 block">{selected.lucky.direction}</b>
            </div>
            <div className="rounded-[22px] bg-lavender-50 p-4">
              <p className="text-xs font-bold text-[#7e7192]">행운의 아이템</p>
              <b className="mt-2 block">{selected.lucky.item}</b>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-[30px] bg-[#fff7fb] p-5 shadow-card">
        <p className="text-sm font-black text-pink-400">오늘의 조언</p>
        <p className="mt-2 text-lg font-bold leading-relaxed text-[#45385f]">{today.advice}</p>
      </section>

      <div className="mt-6">
        <AdBox label="중간 광고 영역 placeholder" />
      </div>

      <section id="subscribe" className="mt-6 rounded-[30px] bg-white p-5 shadow-soft">
        <p className="text-sm font-black text-lavender-500">아침 운세 구독</p>
        <h2 className="mt-2 text-2xl font-black text-[#2d2541]">내일도 잊지 않게 받아보세요</h2>
        <form action="/contact" className="mt-4 flex gap-2">
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            className="min-w-0 flex-1 rounded-2xl border border-lavender-100 bg-lavender-50 px-4 py-3 text-sm outline-none focus:border-lavender-400"
          />
          <button className="rounded-2xl bg-lavender-500 px-4 py-3 text-sm font-black text-white shadow-card">
            구독
          </button>
        </form>
      </section>

      <section className="mt-6 rounded-[30px] bg-gradient-to-br from-[#4b3b68] to-lavender-600 p-5 text-white shadow-soft">
        <p className="text-sm font-bold text-lavender-100">Premium</p>
        <h2 className="mt-2 text-2xl font-black">프리미엄 운세 보기</h2>
        <p className="mt-2 text-sm leading-6 text-lavender-100">
          월간 흐름, 궁합, 재물운 리포트를 한 번에 확인하세요.
        </p>
        <Link href="/contact" className="mt-5 block w-full rounded-2xl bg-white px-5 py-4 text-center font-black text-lavender-600 shadow-card">
          🔮 자세히 보기
        </Link>
      </section>

      <section className="mt-7">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-black text-lavender-500">추천 광고</p>
            <h2 className="mt-1 text-2xl font-black text-[#2d2541]">영상 제작 아이템</h2>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-pink-500 shadow-card">
            Coupang
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {coupangProducts.map((product) => (
            <a
              key={product.id}
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="overflow-hidden rounded-[24px] bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="aspect-square bg-lavender-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="line-clamp-2 min-h-10 text-sm font-black leading-5 text-[#2d2541]">
                  {product.name}
                </p>
                <p className="mt-2 text-xs font-bold text-lavender-500">자세히 보기</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-3 rounded-[18px] bg-white/70 p-3 text-[11px] font-medium leading-5 text-[#7b708c] shadow-card">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </section>

      <footer className="mt-8 flex justify-center gap-4 text-xs font-bold text-[#7e7192]">
        <Link href="/privacy">개인정보처리방침</Link>
        <Link href="/terms">이용약관</Link>
        <Link href="/contact">문의하기</Link>
      </footer>

      <nav className="fixed inset-x-0 bottom-4 z-20 mx-auto w-[calc(100%-32px)] max-w-[398px] rounded-[28px] bg-white/92 p-2 shadow-soft backdrop-blur">
        <div className="grid grid-cols-4 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[22px] px-2 py-3 text-center text-xs font-black text-[#6d617f] transition hover:bg-lavender-100"
            >
              <span className="block text-xl" aria-hidden>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
