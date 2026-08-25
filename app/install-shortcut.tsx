"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallShortcut() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [message, setMessage] = useState("휴대폰 홈화면에서 매일 바로 열 수 있어요.");
  const [copyMessage, setCopyMessage] = useState("");
  const [guide, setGuide] = useState<string[]>([
    "홈화면 바로가기 만들기 버튼을 눌러보세요.",
    "설치가 안 될 경우 크롬창에서 주소를 붙여넣고 실행한 후 다시 눌러주세요.",
    "아이콘이 안 보이면 브라우저 메뉴에서 홈 화면에 추가를 선택하세요."
  ]);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean };
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      navigatorWithStandalone.standalone === true;

    setIsInstalled(isStandalone);

    if (isStandalone) {
      setMessage("이미 홈화면 앱으로 실행 중이에요.");
      setGuide(["홈화면 아이콘으로 실행된 상태입니다.", "다음부터는 휴대폰 바탕화면의 오늘운세 아이콘을 누르면 됩니다."]);
    } else if (isIos) {
      setMessage("iPhone은 버튼으로 홈화면 아이콘을 직접 만들 수 없어요.");
      setGuide([
        "설치가 안 될 경우 크롬창에서 주소를 붙여넣고 실행한 후 다시 눌러주세요.",
        "Safari 하단 공유 버튼을 누르세요.",
        "'홈 화면에 추가'를 선택하세요.",
        "오른쪽 위 '추가'를 누르면 바탕화면에 아이콘이 생깁니다."
      ]);
    } else if (isAndroid) {
      setMessage("Android는 브라우저에 따라 바로가기 창이 뜨거나 메뉴 추가가 필요해요.");
      setGuide([
        "설치가 안 될 경우 크롬창에서 주소를 붙여넣고 실행한 후 다시 눌러주세요.",
        "크롬 주소창에 사이트 주소를 붙여넣고 접속하세요.",
        "앱 설치 화면이 뜨면 설치를 누르세요.",
        "'안전하지 않은 앱 차단됨'이 뜨면 세부정보 더보기를 누르세요.",
        "무시하고 설치하기를 누르면 홈화면에 아이콘이 생깁니다."
      ]);
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
      setMessage("버튼을 누르면 홈화면 바로가기 창이 열립니다.");
      setGuide([
        "아래 버튼을 누르세요.",
        "설치가 안 될 경우 크롬창에서 주소를 붙여넣고 실행한 후 다시 눌러주세요.",
        "확인 창에서 설치를 선택하면 아이콘이 생성됩니다.",
        "'안전하지 않은 앱 차단됨'이 뜨면 세부정보 더보기 → 무시하고 설치하기를 선택하세요."
      ]);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (isInstalled) {
      setMessage("이미 홈화면 아이콘으로 실행 중이에요.");
      return;
    }

    if (installPrompt) {
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      setInstallPrompt(null);
      setMessage(
        choice.outcome === "accepted"
          ? "홈화면 바로가기 생성이 완료되었습니다."
          : "설치를 취소했어요. 필요할 때 다시 눌러주세요."
      );
      return;
    }

    setMessage("이 브라우저에서는 바로가기 창을 직접 띄울 수 없어요. 아래 순서대로 추가해주세요.");
  };

  const handleCopyUrl = async () => {
    const url = window.location.origin;

    try {
      await window.navigator.clipboard.writeText(url);
      setCopyMessage("URL이 복사되었습니다.");
    } catch {
      setCopyMessage(url);
    }
  };

  return (
    <section id="install" className="mt-6 rounded-[30px] bg-white p-5 shadow-soft">
      <p className="text-sm font-black text-lavender-500">바로가기 생성</p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-[#2d2541]">
        홈화면 바로가기 아이콘 만들기
      </h2>
      <p className="mt-3 text-sm font-bold leading-6 text-[#6d617f]">{message}</p>
      <div className="mt-4 grid gap-2">
        <button
          type="button"
          onClick={handleInstall}
          className="w-full rounded-2xl bg-lavender-500 px-5 py-4 text-base font-black text-white shadow-card transition hover:bg-lavender-600"
        >
          📱 홈화면 바로가기 만들기
        </button>
        <button
          type="button"
          onClick={handleCopyUrl}
          className="w-full rounded-2xl bg-lavender-50 px-5 py-4 text-base font-black text-lavender-600 shadow-card transition hover:bg-lavender-100"
        >
          🔗 URL 복사하기
        </button>
      </div>
      {copyMessage ? (
        <p className="mt-3 rounded-[18px] bg-[#fff7fb] p-3 text-sm font-bold leading-6 text-[#6d617f]">
          {copyMessage}
        </p>
      ) : null}
      <div className="mt-4 rounded-[22px] bg-lavender-50 p-4">
        <p className="text-xs font-black text-lavender-500">홈화면에 아이콘이 안 보일 때</p>
        <ol className="mt-2 space-y-2 text-sm font-bold leading-6 text-[#6d617f]">
          {guide.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
